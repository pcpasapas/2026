<script>
import axios from 'axios'
import { reactive, ref } from 'vue'

export default {
    props: ['panier', 'loading'],
    emits: ['composantRetirePanier', 'reset'],
    setup(props) {
        let Loading = ref(props.loading)
        let Panier = reactive(props.panier)
        return {
            Panier,
            Loading
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
            this.Loading = true
            this.prixTotalPanier = 0
            console.log(this.Panier.value)
            if (this.Panier.value !== undefined && this.Panier.value !== null) {
                for (let i = 0; i < this.Panier.value.length; i++) {
                    if (
                        this.Panier.value[i] !== null &&
                        this.Panier.value[i] !== ''
                    ) {
                        this.prixTotalPanier += this.Panier.value[i].prix / 100
                    }
                    this.Loading = false
                }
            }
            this.Loading = false
            return this.prixTotalPanier.toFixed(2)
        }
    },

    mounted() {},

    methods: {
        async retirerproduit(categorie) {
            await axios
                .put('/panier/1', { categorie, undefined })
                .then((response) => {
                    this.Panier.value = response.data
                    this.fnPrixTotalPanier
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
    <div class="panier" v-if="fnPrixTotalPanier != 0.00">
        <p class="selection">Votre sélection</p>

        <div v-if="!Loading">
            <div v-if="this.Panier.value !== ''">
                <div v-for="(produit, index) in Panier.value" :key="index">
                    <div
                        class="composant"
                        v-if="produit !== '' && produit !== null"
                    >
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
                                <td class="col3">{{ produit.prix / 100 }} €</td>
                                <td class="col4">
                                    <button
                                        @click="
                                            retirerproduit(
                                                produit.categorie.progBDD
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
                <div class="prixTotal" v-if="fnPrixTotalPanier !== 0.0">
                    <tr>
                        <td>Prix total</td>
                        <td>{{ fnPrixTotalPanier }} €</td>
                    </tr>
                    <tr>
                        <button class="reset" @click="resetPanier()">
                            Reset
                        </button>
                    </tr>
                </div>
            </div>
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
