import { defineStore } from "pinia";

export const useSsdStore = defineStore("ssd", {
  state: () => ({
    ssd: [
      {
        id: 1,
        name: "Kingston A400 SSD SSD Interne 2.5",
        prix: 25.9,
        taille: "240 gb",
        img: true,
        lien: "https://www.amazon.fr/Kingston-SSD-A400-240GB-Disque-SATA/dp/B01N5IB20Q/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ssd&qid=1666010044&qu=eyJxc2MiOiI2LjI1IiwicXNhIjoiNS40MyIsInFzcCI6IjQuOTgifQ%3D%3D&s=computers&sr=1-3",
      },
      {
        id: 2,
        name: "Kingston A400 SSD SSD Interne 2.5",
        prix: 40.19,
        taille: "480 gb",
        img: true,
        lien: "https://www.amazon.fr/Kingston-SSD-A400-480GB-Disque-SATA/dp/B01N5IB20Q/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ssd&qid=1666010044&qu=eyJxc2MiOiI2LjI1IiwicXNhIjoiNS40MyIsInFzcCI6IjQuOTgifQ%3D%3D&s=computers&sr=1-3",
      },
      {
        id: 3,
        name: "Kingston A400 SSD SSD Interne 2.5",
        prix: 81,
        taille: "960 gb",
        img: true,
        lien: "https://www.amazon.fr/Kingston-SSD-A400-960GB-Disque-SATA/dp/B01N5IB20Q/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ssd&qid=1666010044&qu=eyJxc2MiOiI2LjI1IiwicXNhIjoiNS40MyIsInFzcCI6IjQuOTgifQ%3D%3D&s=computers&sr=1-3",
      },
    ],
  }),

  getters: {
    getAllSsd: (state) => {
      return state.ssd;
    },
    getOneSsd: (state) => {
      return (id) => state.ssd.find((el) => el.id === id);
    },
  },
});
