import { defineStore } from "pinia";

export const useHddStore = defineStore("hdd", {
  state: () => ({
    hdd: [
      {
        id: 1,
        name: "Western Digital WD Blue Desktop 1 To",
        prix: 48.95,
        taille: "1 To",
        img: true,
        lien: "https://www.ldlc.com/fiche/PB00134121.html",
      },
    ],
  }),

  getters: {
    getAllHdd: (state) => {
      return state.hdd;
    },
    getOneHdd: (state) => {
      return (id) => state.hdd.find((el) => el.id === id);
    },
  },
});
