import { defineStore } from "pinia";

export const useAlimsStore = defineStore("alims", {
  state: () => ({
    alims: [
      {
        id: 1,
        name: "Mars Gaming MPIII550",
        prix: 28.9,
        puissance: "550 W",
        img: true,
        lien: "https://www.amazon.fr/MPIII550-Alimentation-Technologie-Silencieuse-Efficacit%C3%A9/dp/B0B38TPM5H/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=alimentation+pc&qid=1666012725&qu=eyJxc2MiOiI2LjU0IiwicXNhIjoiNi4wMyIsInFzcCI6IjUuODEifQ%3D%3D&s=computers&sr=1-4",
      },
      {
        id: 2,
        name: "Mars Gaming MPII650",
        prix: 41.99,
        puissance: "650 W",
        img: true,
        lien: "https://www.amazon.fr/dp/B01C41OGZC/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B01C41OGZC&pd_rd_w=SSvXM&content-id=amzn1.sym.46f3bd26-124e-4785-b190-ff05ba326c3e&pf_rd_p=46f3bd26-124e-4785-b190-ff05ba326c3e&pf_rd_r=E4E2ZZKEJC9WYVV143KJ&pd_rd_wg=PZgnO&pd_rd_r=a1e8c968-c056-4df9-8cdd-4f63f348ad92&s=computers&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVDNYOUlJWjJXVEJaJmVuY3J5cHRlZElkPUEwOTUwMzI5Mjk4SE1YNTZSTkdETSZlbmNyeXB0ZWRBZElkPUEwMDYxODU1S1AwV1o4T1BOMlRFJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
      },
    ],
  }),

  getters: {
    getAllAlims: (state) => {
      return state.alims;
    },
    getOneAlim: (state) => {
      return (id) => state.alims.find((el) => el.id === id);
    },
  },
});
