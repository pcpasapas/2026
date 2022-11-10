<script lang="js">
import { ref } from 'vue';
import headerComponent from '../Layouts/headerComponent.vue'
export default {
    setup() {
        let categorie = ref(0)
        const changeCat = (cat) => {
            categorie.value = cat
        }
        return { categorie, changeCat}
    },
    components: {headerComponent}
}
</script>
<!-- eslint-disable vue/html-closing-bracket-newline -->
<template>
    <headerComponent></headerComponent>
    <button class="catCompar" @click="changeCat(1)">Boitier</button>
    <button class="catCompar">Alimentation</button>
    <button class="catCompar">Processeur</button>
    <div v-if="categorie === 1">
        <p class="titre">Le boitier</p>
        <section class="section">
            <p class="titreSection">
                Qu'est ce que le boitier d'un ordinateur ?
            </p>
            <div class="contenuSection">
                <p>
                    Le boitier de votre ordinateur, autrement appelé "chassis"
                    est le squelette, la carcasse de votre ordianteur. C'est à
                    l'intérieur de celui-ci que vous allez mettre tous les
                    composants de votre ordinateur.
                </p>
                <p>
                    Pour choisir votre boitier vous allez prendre en
                    considération sa taille, sa forme, son design, le nombre de
                    connecteurs disponibles en facade.
                </p>
            </div>
        </section>
        <section class="section">
            <p class="titreSection">
                Comment choisir la taille de son boitier PC ?
            </p>
            <div class="contenuSection">
                <p>
                    Le premier élément à prendre en compte c'est sa taille, il
                    devra étre compatible avec la taille de votre carte mère
                    mais aussi pouvoir accueillir votre carte graphique le cas
                    échéant.
                </p>
                <p>Les différentes tailles de boitiers :</p>
                <p class="font-bold text-center mt-5">Grand TOUR :</p>
                <p>
                    C'est le plus grand des boitiers, il vous permettra
                    d'accueillir toutes les configurations. Toutes les tailles
                    de cartes mères: E-ATX, ATX, Mini ATX, Micro ATX, mais aussi
                    les cartes graphiques de grande taille en général plus de
                    30cm. Il contient aussi un grand nombre d'emplacements pour
                    vos disques durs, vos ventilateurs...
                </p>
                <p>
                    Les dimensions moyennes de ce type d'équipement sont en
                    général : hauteur (70cm), profondeur(70cm), largeur(30cm),
                    poids(15kg)
                </p>
                <p>
                    C'est le boitier idéal pour les personnes qui veulent un
                    configuration gamer qui pourra évoluer dans le temps,
                    attention à prendre en compte la taille de ce boitier lors
                    du choix de votre bureau.
                </p>
                <p class="font-bold text-center mt-5">Moyen TOUR :</p>
                <p>
                    C'est le boitier de taille "standard", le plus courant. Il
                    permetta d'intégrer la majorité des configurations attention
                    cependant parfois, il n'est pas prévu pour intégrer les très
                    grandes cartes mères E-ATX.
                </p>
                <p>
                    Les dimensions moyennes de ce type d'équipement sont en
                    général : hauteur (50cm), profondeur(50cm), largeur(25cm),
                    poids(5kg)
                </p>
                <p>
                    C'est le bon compromis pour les personnes qui veulent un
                    configuration généreuse sans pour autant dépasser un budget
                    serré.
                </p>
                <p class="font-bold text-center mt-5">Mini TOUR :</p>
                <p>
                    C'est le boitier le plus compact avec lequel vous pourrez
                    configurer un PC évolutif et performant. Il acceuille en
                    général seulement les cartes mères Mini-ATX et Micro-Atx.
                    Attention aussi à la taille de votre carte graphique et de
                    vos ventilateurs.
                </p>
                <p>
                    Les dimensions moyennes de ce type d'équipement sont en
                    général : hauteur (35cm), profondeur(35cm), largeur(20cm),
                    poids(4kg)
                </p>
                <p></p>
            </div>
        </section>
        <section class="section">
            <p class="titreSection">Le design de votre boitier PC</p>
            <div class="contenuSection">
                <p>
                    Il existe deux grandes familles de design pour les boitiers
                    : "bureau" et "gamer". Souvent c'est plus une affaire de
                    design à proprement parler que de performances.
                </p>
                <div class="design">
                    <div>
                        <p class="font-bold text-center mt-5">
                            Le design "Bureau"
                        </p>
                        <p>Souvent d'une couleur noire c'est le plus sobre</p>
                        <img :src="'/img/boitiers/9.jpg'" />
                    </div>
                    <div>
                        <p class="font-bold text-center mt-5">
                            Le design "Gamer"
                        </p>
                        <p>Toutes les fantaisies sont possibles ici</p>
                        <img :src="'/img/boitiers/4.jpg'" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.design {
    display: flex;
    justify-content: space-around;
}
.catCompar {
    background-color: rgb(192, 192, 192);
    margin: 3px;
    padding: 5px;
    border-radius: 20%;
    font-size: x-large;
}

.titre {
    font-size: xx-large;
    text-align: center;
    font: bold;
}
.section {
    margin: 10px;
}

.titreSection {
    background-color: rgb(192, 192, 192);
    font: bold;
    font-size: large;
    border: 1px solid grey;
    padding: 2px;
}

.contenuSection {
    margin: 10px;
    text-align: justify;
}
</style>
