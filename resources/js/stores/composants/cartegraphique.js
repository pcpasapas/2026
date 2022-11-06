import { defineStore } from "pinia";

export const useCartegraphiqueStore = defineStore("cartegraphique", {
  state: () => ({
    cartegraphique: [
      {
        id: 1,
        name: "MAXSUN AMD Radeon RX 550",
        prix: 149.99,
        memoire: "4 go",
        puissance: "1071 Mhz",
        img: true,
        lien: "https://www.amazon.fr/Graphiques-RX-550-Graphique-DisplayPort/dp/B09SKZSDRT/ref=sr_1_12?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=carte+graphique&qid=1665998342&qu=eyJxc2MiOiI4Ljg0IiwicXNhIjoiNy42MSIsInFzcCI6IjYuOTgifQ%3D%3D&refinements=p_36%3A428409031&rnid=428393031&s=computers&sr=1-12",
      },
      {
        id: 2,
        name: "MSI RX 6500 XT Radeon",
        prix: 174.87,
        memoire: "4 go",
        puissance: "2685 Mhz",
        img: true,
        lien: "https://www.amazon.fr/MSI-6500-Radeon-Mech-V508-003R/dp/B09R1RVN3R/ref=sr_1_10?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=rx+5700&qid=1666014009&qu=eyJxc2MiOiI1LjQ2IiwicXNhIjoiNC4zNiIsInFzcCI6IjIuNzMifQ%3D%3D&s=computers&sr=1-10",
      },
      {
        id: 3,
        name: "ASUS TUF GAMING NVIDIA GeForce GTX 1660",
        prix: 290,
        memoire: "6 go",
        puissance: "1815 Mhz",
        img: true,
        lien: "https://www.amazon.fr/ASUS-Gaming-GeForce-Graphique-NVIDIA/dp/B09C8YJZH5/ref=sr_1_15?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=gtx+1070&qid=1666014227&qu=eyJxc2MiOiI1LjExIiwicXNhIjoiNS4wNCIsInFzcCI6IjIuNjQifQ%3D%3D&s=computers&sr=1-15",
      },
    ],
  }),

  getters: {
    getAllCartegraphiques: (state) => {
      return state.cartegraphique;
    },

    getOnecarteGraphique: (state) => {
      return (id) => state.cartegraphique.find((el) => el.id === id);
    },
  },
});
