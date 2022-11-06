import { defineStore } from "pinia";

export const useRamStore = defineStore("ram", {
  state: () => ({
    ram: [
      {
        id: 2,
        name: "Corsair Vengeance LPX 16Go (1x16Go)",
        prix: 65.88,
        taille: "16 GB",
        img: true,
        lien: "https://www.amazon.fr/Corsair-Vengeance-2666MHz-M%C3%A9moire-Performance/dp/B019HVO62A/ref=sr_1_14?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ddr4+16go&qid=1666011414&qu=eyJxc2MiOiI1Ljc1IiwicXNhIjoiNS4wNSIsInFzcCI6IjQuOTYifQ%3D%3D&refinements=p_n_feature_twelve_browse-bin%3A11415997031&rnid=188176031&s=computers&sr=1-14",
      },
      {
        id: 1,
        name: "Corsair Vengeance LPX 32GB (2x16GB)",
        prix: 122.14,
        taille: "32 GB",
        img: true,
        lien: "https://www.amazon.fr/Corsair-Vengeance-32GB-2x16GB-3200MHz/dp/B07RW6Z692/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=dd4+16go&qid=1666010912&qu=eyJxc2MiOiIzLjA4IiwicXNhIjoiMi40MyIsInFzcCI6IjAuMDAifQ%3D%3D&s=computers&sr=1-4",
      },
    ],
  }),

  getters: {
    getAllRam: (state) => {
      return state.ram;
    },
    getOneRam: (state) => {
      return (id) => state.ram.find((el) => el.id === id);
    },
  },
});
