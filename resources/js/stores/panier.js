import { defineStore } from "pinia";
import { useBoitiersStore } from "./composants/boitiers";
import { useAlimsStore } from "./composants/alimentations";
import { useProcesseurStore } from "./composants/processeurs";
import { useCarteMereStore } from "./composants/cartemere";
import { useRamStore } from "./composants/ram";
import { useCartegraphiqueStore } from "./composants/cartegraphique";
import { useSsdStore } from "./composants/ssd";
import { useHddStore } from "./composants/hdd";

export const usePanierStore = defineStore("panier", {
  state: () => ({
    panier: [
      {
        id: 0,
        title: "Boitier",
        prog: "boitiers",
        choisi: 0,
        article: {},
      },
      {
        id: 1,
        title: "Alimentation",
        prog: "alim",
        choisi: 0,
        article: {},
      },
      {
        id: 2,
        title: "Processeur",
        prog: "processeur",
        choisi: 0,
        article: {},
      },
      {
        id: 3,
        title: "Carte Mère",
        prog: "carteMere",
        choisi: 0,
        article: {},
      },
      { id: 4, title: "Ram", prog: "ram", choisi: 0, article: {} },
      {
        id: 5,
        title: "Carte Graphique",
        prog: "carteGraphique",
        article: {},
        choisi: 0,
      },
      { id: 6, title: "SSD", prog: "ssd", choisi: 0, article: {} },
      {
        id: 7,
        title: "Disque Dur Hdd",
        prog: "hdd",
        article: {},
        choisi: 0,
      },
    ],
  }),

  getters: {
    getAllPanier: (state) => {
      return state.panier;
    },
    getOnePanier: (state) => {
      return (id) => state.panier.find((el) => el.id === id);
    },
  },

  actions: {
    modifStorePanier(id, payload) {
      if (isNaN(id)) {
        id = [id];
        id = id[0];
      } else {
        id = Array.from(String(id), Number);
        payload = Array.from(String(payload), Number);
      }
      payload = [payload];
      payload = payload[0];

      if (payload === 0) {
        this.panier[id].choisi = payload;
        this.panier[id].article = {};
      } else {
        for (let i = 0; i < id.length; i++) {
          if (id[i] === 0) {
            this.panier[0].article = useBoitiersStore().getOneBoitier(
              payload[i]
            );
          } else if (id[i] === 1) {
            this.panier[1].article = useAlimsStore().getOneAlim(payload[i]);
          } else if (id[i] === 2) {
            this.panier[2].article = useProcesseurStore().getOneProcesseur(
              payload[i]
            );
          } else if (id[i] === 3) {
            this.panier[3].article = useCarteMereStore().getOneCarteMere(
              payload[i]
            );
          } else if (id[i] === 4) {
            this.panier[4].article = useRamStore().getOneRam(payload[i]);
          } else if (id[i] === 5) {
            this.panier[5].article =
              useCartegraphiqueStore().getOnecarteGraphique(payload[i]);
          } else if (id[i] === 6) {
            this.panier[6].article = useSsdStore().getOneSsd(payload[i]);
          } else if (id[i] === 7) {
            this.panier[7].article = useHddStore().getOneHdd(payload[i]);
          }
          this.panier[id[i]].choisi = payload[i];
        }
      }
    },
  },
});
