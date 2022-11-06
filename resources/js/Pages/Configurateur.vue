<template>
    <headerComponent
        :canLogin="canLogin"
        :canRegister="canRegister"
    ></headerComponent>
    <panierComponent
        @reset="reset"
        @updateTable="updateTable"
        @composantRetirePanier="composantRetirePanier"
        :key="versionTable"
        :panier="this.panier"
        :produitspanier="this.panierDetail"
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
            <Link href="/configurateur/composants">
                <li class="liMenuCategorie">
                    <span
                        >Choix d'une configuration en fonction des
                        composants</span
                    >
                </li>
            </Link>
        </ul>
    </div>
    <!-- affichage categories -->
    <div v-if="categories !== null">
        <ul
            class="ulCategorie"
            v-for="categorie in categories"
            :key="categorie.id"
        >
            <div>
                <InertiaLink :key="categorie.prog"
                    :href="
                        route('composantsChoix.index', {
                            categorie: categorie.prog,
                        })
                    "
                >
                    <li class="liCategorie">
                        <span>{{ categorie.name }}</span>
                    </li>
                </InertiaLink>
            </div>
            <div>
                <ul class="ulComposant" v-if="categorie.prog === categorieChoisi" >
                    <li
                        class="composant"
                        v-for="composant in composants"
                        v-bind:key="composant.id"
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
                                    >🔍</a
                                >
                                <button
                                    alt="Ajouter au panier"
                                    class="choisir"
                                    @click="
                                        ajoutPanier(
                                            categorie.progBDD,
                                            composant.id,
                                            composant.name,
                                            composant.prix
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
import headerComponent from "../Layouts/headerComponent.vue";
// import { useCategoriesStore } from "../stores/categories";
// import { useBoitiersStore } from "../stores/composants/boitiers";
// import { useAlimsStore } from "../stores/composants/alimentations";
// import { useProcesseurStore } from "../stores/composants/processeurs";
import { usePanierStore } from "../stores/panier";
// import { useCarteMereStore } from "../stores/composants/cartemere";
// import { useRamStore } from "../stores/composants/ram";
// import { useCartegraphiqueStore } from "../stores/composants/cartegraphique";
// import { useSsdStore } from "../stores/composants/ssd";
// import { useHddStore } from "../stores/composants/hdd";
import composantCard from "../Components/templatesComposants/composantCard.vue";
import panierComponent from "../Components/Perso/panierComponent.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { InertiaLink } from "@inertiajs/inertia-vue3";
import axios from "axios";

export default {
    props: [
        "canLogin",
        "canRegister",
        "alimentations",
        "categories",
        "games",
        "composants",
        "categorieChoisi",
        "panier",
    ],
    data() {
        return {
            // categories: useCategoriesStore().getAllCategories,
            categorieChoisie: "",
            bouton: "+",
            // panier: usePanierStore(),
            panierDetail: usePanierStore().getAllPanier,
            versionTable: 0,
            jeu: false,
            enFctComposants: false,
        };
    },
    mounted() {
    },
    methods: {
        composantRetirePanier() {
            this.enFctComposants = true;
        },
        reset() {
            this.versionTable++,
                (this.panierDetail = usePanierStore().getAllPanier);
            this.categorieChoisie = "";
            this.enFctComposants = false;
            this.jeu = false;
        },
        updateTable() {
            this.panierDetail = usePanierStore().getAllPanier;
            this.versionTable++;
            this.categorieChoisie = "";
        },
        panierGtaV() {
            usePanierStore().modifStorePanier(
                [0, 1, 2, 3, 4, 5, 6],
                [1, 1, 3, 3, 2, 1, 1]
            );
            this.updateTable();
        },
        panierFlight() {
            usePanierStore().modifStorePanier(
                [0, 1, 2, 3, 4, 5, 6],
                [1, 1, 4, 3, 2, 1, 1]
            );
            this.updateTable();
        },
        async ajoutPanier(categorie, composant) {
            console.log(categorie, composant)
            await axios.put('/panier/1', {categorie, composant}).then((response) =>
            {
                this.versionTable++
            }).catch((err) => console.log(err))
            // this.updateTable();
            // this.panier.modifStorePanier(categorie, composant);
            // this.categorieChoisie = "";
        },
        affiche(prog) {
            const boutons = document.querySelectorAll("#bouton");
            boutons.forEach(function (boutons) {
                boutons.innerHTML = "+";
            });
            console.log(prog, this.jeu);
            if (prog === "jeu") {
                if (this.jeu === false) {
                    this.enFctComposants = false;
                    this.categorieChoisie = "";
                    this.jeu = true;
                    return this.jeu;
                } else {
                    this.jeu = false;
                    return this.jeu;
                }
            }
            if (prog === "enFctComposants") {
                if (this.enFctComposants === false) {
                    this.categorieChoisie = "";
                    this.enFctComposants = true;
                } else {
                    this.enFctComposants = false;
                    return this.jeu;
                }
            }
            if (this.categorieChoisie === prog) {
                this.jeu = false;
                this.categorieChoisie = "";
            } else {
                this.jeu = false;
                this.categorieChoisie = prog;
                if (prog === "boitiers") {
                    this.composants = useBoitiersStore().getAllBoitiers;
                } else if (prog === "alim") {
                    this.composants = useAlimsStore().getAllAlims;
                } else if (prog === "processeur") {
                    this.composants =
                        useProcesseurStore().getAllProcesseursSocket;
                } else if (prog === "carteMere") {
                    this.composants =
                        useCarteMereStore().getAllCarteMeresSocket;
                } else if (prog === "ram") {
                    this.composants = useRamStore().getAllRam;
                } else if (prog === "carteGraphique") {
                    this.composants =
                        useCartegraphiqueStore().getAllCartegraphiques;
                } else if (prog === "ssd") {
                    this.composants = useSsdStore().getAllSsd;
                } else if (prog === "hdd") {
                    this.composants = useHddStore().getAllHdd;
                }
            }
            return this.composants;
        },
    },
    components: {
        headerComponent,
        panierComponent,
        composantCard,
        Link,
        InertiaLink
    },
};
</script>

<style scoped>
.liCategorie{
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
