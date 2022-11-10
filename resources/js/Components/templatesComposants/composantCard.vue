<script>
export default {
    props: ['composant', 'categorie'],
    methods: {
        toggleAgrandir() {}
    }
}
</script>

<template>
    <div class="composant" @click="toggleAgrandir">
        <h3 v-if="composant.gamer == true" class="gamer">
            GAMER
        </h3>
        <h3 v-if="composant.marque !== undefined">
            {{ composant.marque }}
        </h3>
        <h3>{{ composant.name }}</h3>
        <h4 v-if="composant.socket !== undefined">
            Socket : {{ composant.socket }}
        </h4>
        <h4 v-if="composant.puissanceMini">
            Puissance mini : {{ composant.puissanceMini }} Ghz
        </h4>
        <h4 v-if="composant.puissanceBoost">
            Puissance boostée : {{ composant.puissanceBoost }} Ghz
        </h4>
        <h4 v-if="composant.puissance !== undefined">
            Puissance : {{ composant.puissance }}
        </h4>
        <h4 v-if="composant.memoire !== undefined">
            Mémoire : {{ composant.memoire }}
        </h4>
        <h4 v-if="composant.taille_text !== undefined">
            {{ composant.taille_text }}
        </h4>
        <h4 v-if="composant.format_cm !== ''">
            Carte mère : {{ composant.format_cm }}
        </h4>
        <h4 v-if="composant.taille !== undefined">
            Taille : {{ composant.taille }}
        </h4>
        <div class="prixImage">
            <img
                v-if="this.categorie.prog !== undefined"
                :src="'/img/' + categorie.prog + '/' + composant.id + '.jpg'"
            />
            <img
                v-if="this.categorie.prog === undefined"
                :src="'/img/' + categorie + '/' + composant.id + '.jpg'"
            />
            <p class="prix">{{ (composant.prix / 100).toFixed(2) }} €</p>
        </div>
    </div>
</template>

<style scoped>
.gamer {
    position: absolute;
    color: white;
    padding: 1px;
    margin-top: 3px;
    background: rgb(70, 251, 63);
    border-radius: 30px;
    background: radial-gradient(
        circle,
        rgba(70, 251, 63, 1) 0%,
        rgba(121, 131, 167, 1) 100%
    );
}
.prixImage {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

h3 {
    margin: 0;
    padding: 0px;
}
.composant {
    padding: 0;
    width: 300px;
    align-items: center;
}

.prix {
    background-color: blueviolet;
    font-size: 1.5rem;
    border-radius: 30%;
    padding: 5px;
    margin: 0;
}

img {
    padding-top: 0px;
    height: 100px;
    max-width: 200px;
    margin: 0;
}

h4 {
    padding: 0;
    margin: 0;
}
</style>
