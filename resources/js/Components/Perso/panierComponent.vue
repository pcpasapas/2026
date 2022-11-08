<script>
import axios from 'axios'
import { reactive } from 'vue'

export default {
    props: ['panier'],
    emits: ['composantRetirePanier', 'reset'],
    setup(props) {
        let Panier = reactive(props.panier)
        return {
            Panier
        }
    },
    data() {
        return {
            produitsPanier: this.produitspanier,
            prixTotalPanier: 0
        }
    },
    computed: {
        fnPrixTotalPanier() {
            this.prixTotalPanier = 0
            console.log(this.Panier.value)
            if (this.Panier.value !== undefined) {
                for (let i = 0; i < this.Panier.value.length; i++) {
                    console.log(this.Panier.value[i].prix)
                    this.prixTotalPanier += this.Panier.value[i].prix / 100
                }
            }
            return this.prixTotalPanier.toFixed(2)
        }
    },

    mounted() {},

    methods: {
        async retirerproduit(categorie, composant) {
            await axios
                .put('/panier/1', { categorie, composant })
                .then((response) => {
                    this.Panier.value = response.data
                })
                .catch((err) => console.log(err))
        },
        resetPanier() {
            this.Panier.$reset()
            this.fnPrixTotalPanier
            this.$emit('reset')
        }
    }
}
</script>

<template>
    <div class="panier">
        <p class="selection">Votre sélection</p>
        <div v-for="produit in Panier.value" :key="produit.id">
            <div class="composant" v-if="produit !== ''">
                <tbody>
                    <tr>
                        <td class="col1">
                            <img
                                :src="
                                    '../img/' +
                                    produit.categorie.prog +
                                    '/' +
                                    produit.id +
                                    '.jpg'
                                "
                            />
                        </td>

                        <td class="col2">
                            <p>{{ produit.name }}</p>
                        </td>
                        <td class="col3">{{ (produit.prix / 100) }} €</td>
                        <td class="col4">
                            <button
                                @click="
                                    retirerproduit(
                                        produit.categorie.progBDD,
                                        null
                                    )
                                "
                            >
                                X
                            </button>
                        </td>
                    </tr>
                </tbody>
            </div>
        </div>
        <div class="prixTotal">
            <tr>
                <td>Prix total</td>
                <td>{{ fnPrixTotalPanier }} €</td>
            </tr>
            <tr>
                <button class="reset" @click="resetPanier()">Reset</button>
            </tr>
        </div>
    </div>
</template>

<style scoped>
tbody {
    width: 100%;
}
img {
    width: 100px;
    margin: 0;
}
.reset {
    background-color: blueviolet;
    border-radius: 50%;
    cursor: pointer;
    color: white;
}
.composant {
    border-bottom: 1px solid blueviolet;
    border-top: 1px solid blueviolet;
}
.panier {
    border: 5px solid blueviolet;
    margin: 10px;
    text-align: center;
}
.selection {
    text-align: center;
    font-size: 2rem;
    margin: 0;
}

.prixTotal {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 2rem;
}
.col1 {
    width: 100px;
}

.col2 {
    width: 400px;
}
.col3 {
    width: 100px;
}
td {
    padding: 10px;
}
</style>
