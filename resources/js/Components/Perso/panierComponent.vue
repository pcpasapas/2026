<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<script>
import { usePanierStore } from "../../stores/panier";

export default {
  name:"panierComponent",
  props: ["panier", "produitspanier"],
  data() {
    return {
      produitsPanier: this.produitspanier,
      Panier: this.panier,
      prixTotalPanier: 0,
    };
  },
  methods: {
    retirerproduit(categorie, composant) {
      this.Panier.modifStorePanier(categorie, composant);
      this.Panier === this.panier;
      this.$emit("composantRetirePanier");
      console.log(this.Panier);
    },
    resetPanier() {
      this.Panier.$reset();
      this.produitsPanier = usePanierStore().getAllPanier;
      this.fnPrixTotalPanier;
      this.$emit("reset");
    },
  },
  computed: {
    fnPrixTotalPanier() {
      this.prixTotalPanier = 0;
      console.log(this.produitsPanier)
      for (let i = 0; i < this.produitsPanier.length; i++) {
        if (
          this.produitsPanier[i].article !== undefined &&
          this.produitsPanier[i].choisi !== 0
        ) {
          if (this.produitsPanier[i].article.prix !== undefined) {
            this.prixTotalPanier += this.produitsPanier[i].article.prix;
          }
        } else {
          this.prixTotalPanier += 0;
        }
      }
      return this.prixTotalPanier.toFixed(2);
    },
  },
  mounted() {
    this.fnPrixTotalPanier;
    this.produitsPanier = this.produitspanier;
    this.Panier = this.panier;
    console.log(this.produitsPanier)
  },
};
</script>

<template>
  <div class="panier" v-if="this.prixTotalPanier !== 0">
    <p class="selection">Votre sélection</p>
    <div v-for="produit in produitsPanier" :key="produit.id">
      <div class="composant" v-if="produit.choisi !== 0">
        <tbody>
          <tr>
            <td class="col1">
              <img
                :src="
                  '../img/' + produit.prog + '/' + produit.article.id + '.jpg'
                "
              />
            </td>

            <td class="col2">
              <p>{{ produit.title }}</p>
              {{ produit.article.name }}
            </td>
            <td class="col3">{{ produit.article.prix }} €</td>
            <td class="col4">
              <button @click="retirerproduit(produit.id, 0)">X</button>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
    <div class="prixTotal" v-if="fnPrixTotalPanier !== '0.00'">
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
