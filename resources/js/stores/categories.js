import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: [
      { id: 0, title: "Boitiers", prog: "boitiers" },
      { id: 1, title: "Alimentations", prog: "alim" },
      { id: 2, title: "Processeurs", prog: "processeur" },
      { id: 3, title: "Cartes Mères", prog: "carteMere" },
      { id: 4, title: "Ram", prog: "ram" },
      { id: 5, title: "Cartes Graphiques", prog: "carteGraphique" },
      { id: 6, title: "SSD", prog: "ssd" },
      { id: 7, title: "Disques Durs Hdd", prog: "hdd" },
    ],
  }),

  getters: {
    getAllCategories: (state) => {
      return state.categories;
    },
  },
});
