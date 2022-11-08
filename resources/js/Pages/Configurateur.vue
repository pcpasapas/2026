<template>
    <headerComponent
        :canLogin="canLogin"
        :canRegister="canRegister"
    ></headerComponent>
    <panierComponent
        @reset="reset"
        @updateTable="updateTable"
        @composantRetirePanier="composantRetirePanier"
        :panier="panierReact"
    ></panierComponent>
    <!-- choix en fonction d'un jeu -->
    <div>
        <ul>
            <Link href="/configurateur/jeux">
                <li class="liMenuCategorie">
                    <span>Choix d'une configuration en fonction d'un jeu</span>
                </li>
            </Link>
        </ul>
    </div>
    <!-- affichage jeux -->
    <div v-if="games !== null">
        <ul>
            <button v-for="game in games" :key="game.id" class="jeu">
                {{ game.name }}
            </button>
        </ul>
    </div>
    <!-- choix en fonction des composants -->
    <div>
        <ul>
            <InertiaLink href="/configurateur/composants">
                <li class="liMenuCategorie">
                    <span>
                        Choix d'une configuration en fonction des composants
                    </span>
                </li>
            </InertiaLink>
        </ul>
    </div>
    <!-- affichage categories -->
    <div v-if="categories !== null"></div>
    <div v-if="loading === false">
        <ul
            class="ulCategorie"
            v-for="categorie in categories"
            :key="categorie.id"
        >
            <div
                v-if="
                    panierReact.value[categorie.id - 1] === undefined ||
                    panierReact.value[categorie.id - 1] === null ||
                    panierReact.value[categorie.id - 1] === ''
                "
            >
                <a
                    :key="categorie.prog"
                    @click="composantsAffiche(categorie.prog)"
                >
                    <li class="liCategorie">
                        <span>{{ categorie.name }}</span>
                        <p>{{ panierReact.value[categorie.id - 1] }}</p>
                    </li>
                </a>

                <ul
                    class="ulComposant"
                    v-if="categorie.prog === categorieChoisie"
                >
                    <li
                        class="composant"
                        v-for="composant in composantsAffiches"
                        :key="composant.id"
                    >
                        {{ composant.name }}
                        <div class="composantBoutons">
                            <composant-card
                                :composant="composant"
                                :categorie="categorie"
                            ></composant-card>
                            <div class="boutonsComposant">
                                <a
                                    class="choisir"
                                    :href="composant.lien"
                                    target="_blank"
                                    >🔍
                                </a>
                                <button
                                    alt="Ajouter au panier"
                                    class="choisir"
                                    @click="
                                        ajoutPanier(
                                            categorie.progBDD,
                                            composant.id,
                                            categorie.prog,
                                            categorie.modelBDD
                                        )
                                    "
                                >
                                    🛒
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </ul>
    </div>
</template>

<script>
import headerComponent from '../Layouts/headerComponent.vue'
import { usePanierStore } from '../stores/panier'
import composantCard from '../Components/templatesComposants/composantCard.vue'
import panierComponent from '../Components/Perso/panierComponent.vue'
import { Link, InertiaLink } from '@inertiajs/inertia-vue3'
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue'
// import { computed } from 'vue'

export default {
    props: [
        'canLogin',
        'canRegister',
        'alimentations',
        'categories',
        'games',
        'composants',
        'categorieChoisi'
    ],
    data() {
        return {
            categorieChoisie: '',
            bouton: '+',
            // panierDetail: {},
            versionTable: 0,
            jeu: false,
            enFctComposants: false,
            composantsAffiches: {}
        }
    },
    setup() {
        let panierReact = reactive({})
        let loading = ref()

        const mounted = onMounted(async () => {
            await axios.get('/panier').then((response) => {
                panierReact.value = response.data
                console.log(panierReact)
                loading.value = false
            })
        })
        const ajoutPanier = async (
            categorie,
            composant,
            categorieProg,
            modelBDD
        ) => {
            await axios
                .put('/panier/1', {
                    categorie,
                    composant,
                    categorieProg,
                    modelBDD
                })
                .then((response) => {
                    panierReact.value = response.data
                    return panierReact
                })
                .catch((err) => console.log(err))
        }
        return { panierReact, mounted, ajoutPanier, loading }
    },
    methods: {
        composantRetirePanier() {
            this.enFctComposants = true
        },
        reset() {
            this.versionTable++
            this.panierDetail = usePanierStore().getAllPanier
            this.categorieChoisie = ''
            this.enFctComposants = false
            this.jeu = false
        },
        updateTable() {
            this.panierDetail = usePanierStore().getAllPanier
            this.versionTable++
            this.categorieChoisie = ''
        },
        panierGtaV() {
            usePanierStore().modifStorePanier(
                [0, 1, 2, 3, 4, 5, 6],
                [1, 1, 3, 3, 2, 1, 1]
            )
            this.updateTable()
        },
        panierFlight() {
            usePanierStore().modifStorePanier(
                [0, 1, 2, 3, 4, 5, 6],
                [1, 1, 4, 3, 2, 1, 1]
            )
            this.updateTable()
        },
        composantsAffiche(categorie) {
            console.log(categorie)
            axios
                .get(`/configurateur/composants/choix/${categorie}`)
                .then((response) => {
                    this.composantsAffiches = response.data.composants
                    this.categorieChoisie = response.data.categorieChoisi
                    console.table(this.categorieChoisie)
                })
        },
        affiche(prog) {
            console.log(prog, this.jeu)
            if (prog === 'jeu') {
                if (this.jeu === false) {
                    this.enFctComposants = false
                    this.categorieChoisie = ''
                    this.jeu = true
                    return this.jeu
                } else {
                    this.jeu = false
                    return this.jeu
                }
            }
            if (prog === 'enFctComposants') {
                if (this.enFctComposants === false) {
                    this.categorieChoisie = ''
                    this.enFctComposants = true
                } else {
                    this.enFctComposants = false
                    return this.jeu
                }
            }
            if (this.categorieChoisie === prog) {
                this.jeu = false
                this.categorieChoisie = ''
            } else {
                this.jeu = false
                this.categorieChoisie = prog
                // if (prog === "boitiers") {
                //     this.composants = useBoitiersStore().getAllBoitiers;
                // } else if (prog === "alim") {
                //     this.composants = useAlimsStore().getAllAlims;
                // } else if (prog === "processeur") {
                //     this.composants =
                //         useProcesseurStore().getAllProcesseursSocket;
                // } else if (prog === "carteMere") {
                //     this.composants =
                //         useCarteMereStore().getAllCarteMeresSocket;
                // } else if (prog === "ram") {
                //     this.composants = useRamStore().getAllRam;
                // } else if (prog === "carteGraphique") {
                //     this.composants =
                //         useCartegraphiqueStore().getAllCartegraphiques;
                // } else if (prog === "ssd") {
                //     this.composants = useSsdStore().getAllSsd;
                // } else if (prog === "hdd") {
                //     this.composants = useHddStore().getAllHdd;
            }

            // return this.composants;
        }
    },
    components: {
        headerComponent,
        panierComponent,
        composantCard,
        // eslint-disable-next-line vue/no-reserved-component-names
        Link,
        InertiaLink
    }
}
</script>

<style scoped>
.liCategorie {
    margin-left: 20px;
    margin-right: 20px;
}
.ulCategorie .a {
    margin-left: 10;
    margin-right: 10;
    padding: 0;
}
.boutonsComposant {
    margin: 0;
    justify-content: center;
    padding: 0;
}
.jeu {
    background-color: blueviolet;
    padding: 15px;
    margin: 10px;
    cursor: pointer;
    font-size: large;
    font-weight: 700;
}

.choisir {
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.5rem;
    cursor: pointer;
    padding-bottom: 0;
    padding-top: 0;
}

.composant {
    background-color: white;
    color: black;
    height: auto;
    padding-top: 0;
    padding-bottom: 0;
    text-align: center;
    align-items: center;
}

@media (max-width: 400px) {
    .composant {
        width: 100%;
    }
}
@media (min-width: 900px) {
    .liCategorie,
    .liMenuCategorie {
        font-size: 2rem;
    }
}

.ulCategorie {
    padding: 0;
}

.ulComposant {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    justify-content: space-around;
}
.liMenuCategorie {
    background-color: rgb(32, 78, 112);
    text-align: center;
    align-items: center;
    min-height: 50px;
}
.liCategorie,
.liMenuCategorie {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
li {
    list-style: none;
    background-color: rgb(65, 128, 177);
    color: white;
    font-weight: 700;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
}

a {
    text-decoration: none;
    background-color: white;
}

button,
a {
    border-radius: 10px;
    border: 0;
    background-color: white;
    font-size: large;
}

#boutonComposants:hover {
    background-color: blue;
}

ul {
    margin: 0;
    padding: 0;
}
</style>
