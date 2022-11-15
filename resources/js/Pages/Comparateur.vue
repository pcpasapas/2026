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
    <button class="catCompar" @click="changeCat(2)">Alimentation</button>
    <button class="catCompar" @click="changeCat(3)">Processeur</button>
    <div v-if="categorie === 1">
        <p class="titre">Le boitier</p>
        <div class="flex justify-around">
            <img :src="'/img/comparateur/boitiers/1.jpg'" />
            <img :src="'/img/comparateur/boitiers/2.jpg'" />
        </div>
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
                    de cartes mères: E-ATX, ATX, Micro ATX, Mini ITX, mais aussi
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
                    général seulement les cartes mères et Micro-Atx Mini-ITX
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
    <div v-if="categorie === 2">
        <p class="titre">L'alimentation</p>
        <div class="flex justify-around">
            <img :src="'/img/comparateur/alimentations/1.jpg'" />
            <img :src="'/img/comparateur/alimentations/2.jpg'" />
        </div>
        <section class="section">
            <p class="titreSection">
                Qu'est ce que l'alimentation d'un ordinateur ?
            </p>
            <div class="contenuSection">
                <p>
                    L'alimentation fournit du courant à tous les composants de
                    l'ordinateur. L'alimentation doit avoir une puissance
                    suffisante pour alimenter les différents périphériques de ce
                    dernier.
                </p>
                <p>
                    Aujourd'hui, la norme ATX est la norme d'alimentation des
                    cartes mères ATX et micro-ATX, qui représentent la grande
                    majorité des PC vendus dans le monde. La norme ATX comprend
                    :
                </p>

                <ul>
                    <li>- Connecteur principal ATX 2x12 broches</li>
                    <li>- Connecteur déporté 2x2 broches "P4"</li>
                    <li>
                        - 1 ou plusieurs connecteurs d'alimentation périphérique
                        (Molex / Mini-Molex ou SATA).
                    </li>
                </ul>

                <p>
                    Pour choisir votre alimentation vous allez prendre en
                    considération sa puissance, sa taille, ses connecteurs
                    disponibles.
                </p>
            </div>
        </section>
        <section class="section">
            <p class="titreSection">
                Comment choisir la puissance de votre alimentation PC ?
            </p>
            <div class="contenuSection">
                <p>
                    La puissance d'une alimentation est donnée en Watts,
                    généralement de 350W à plus de 1000W pour les grosses
                    configurations. Les composants qui consomment le plus sont
                    le processeur et la carte graphique.
                </p>
                <p>
                    Généralement, pour calculer la puissance nécéssaire
                    simplement on prend la consommation processeur (ex : AMD
                    Ryzen™ 7 7700X => 105 W), puis la consommation de la carte
                    graphique (ex : GeForce RTX 2070 => 185 W) que l'on
                    multiplie par 2.
                </p>
                <div class="border-2 text-center">
                    Ce qui donne pour cette configuration :
                    <p>(105 + 185) * 2 = 580 W</p>
                </div>
                <p>
                    Dans ce cas votre alimentation devra être d'une puissance
                    supérieure à 580 W. Cette valeur doit être vérifiée plus
                    précisément mais elle nous donne une bonne estimation de la
                    puissance nécessaire pour votre alimentation.
                </p>
            </div>
        </section>
        <section class="section">
            <p class="titreSection">
                Configurateurs de puissances d'alimentations en ligne
            </p>
            <p>
                Les principaux constructeurs d'alimentations ont mis en ligne
                des outils pour pouvoir connaitre la puissance nécessaire en
                fonction des composants qui constituent votre configuration.
            </p>
            <div class="liens">
                <a
                    class="a"
                    href="https://www.evga.com/power-meter/"
                    target="_blank"
                    >EVGA</a
                >

                <a
                    class="a"
                    href="https://www.bequiet.com/fr/psucalculator/quick"
                    target="_blank"
                >
                    BeQUIET
                </a>
            </div>
        </section>
        <section class="section">
            <p class="titreSection">Les connectiques de votre alimentation</p>
            <p>
                Le standard est ATX pour brancher votre carte mère, il faudra
                surtout faire attention à ce que votre alimentation puisse
                accueillir la connectique de votre carte graphique qui peut
                varier. Vérifiez la connectique nécessaire sur le site du
                fabriquant de votre carte graphique.
            </p>
            <div class="liens">
                <a
                    class="a"
                    href="https://www.nvidia.com/fr-fr/geforce/graphics-cards/"
                    target="_blank"
                    >Nvidia</a
                >

                <a
                    class="a"
                    href="https://www.amd.com/fr/graphics/radeon-rx-graphics"
                    target="_blank"
                    >AMD</a
                >
            </div>
        </section>
    </div>
    <div v-if="categorie === 3">
        <p class="titre">Le processeur</p>
        <div class="flex justify-around">
            <img :src="'/img/comparateur/processeurs/1.jpg'" />
            <img :src="'/img/comparateur/processeurs/2.jpg'" />
        </div>

        <section class="section">
            <p class="titreSection">
                Qu'est ce que le processeur d'un ordinateur ?
            </p>
            <div class="contenuSection">
                <p>
                    Un processeur ou CPU (Central Processing Unit) est le
                    cerveau de votre ordinateur. C'est lui qui gère les échanges
                    entre vos composants. Le processeur est très important car
                    c'est la partie principale de l'ordinateur sans laquelle
                    aucun calcul n'est possible sur votre machine.
                </p>
                <p></p>
                <p>
                    Pour choisir votre processeur vous allez prendre en
                    considération son format, sa puissance.
                </p>
            </div>
        </section>
        <section class="section">
            <p class="titreSection">Les différents formats de processeurs ?</p>
            <div class="contenuSection">
                <p>
                    Deux grands fabriquants de processeurs se partagent le
                    marché : Intel et AMD. Chacun dispose de son propre format
                    (ex AMD4, Intel 1200). Pour une configuration moderne le
                    choix va se faire entre ces deux fabricants. Les processeurs
                    AMD et Intel d'aujourd'hui offrent des niveaux de
                    performances comparables. Choisissez la marque qui
                    correspond à vos critères de recherche en fonction de vos
                    besoins.
                </p>
                <img
                    class="mx-auto"
                    :src="'/img/tutos/processeurs/proccartemere.jpg'"
                />
                <p>
                    Le processeur s'insère dans la carte mère, il faut donc un
                    compatibilité entre les deux composants. Il faut qu'ils
                    aient le même "socket". Si vous possèdez déjà une carte mère
                    vous n'avez pas le choix dans le format de votre processeur,
                    il faut impérativement que le socket de votre processeur
                    soit le même que celui de votre carte mère.
                </p>
                <p></p>
                <div class="border-2 text-center"></div>
                <p></p>
            </div>
        </section>
        <section class="section">
            <p class="titreSection">La partie graphique du processeur</p>
            <p>
                Certains processeurs disposent d'une partie graphique ce qui
                vous dispensera d'acheter une carte graphique indépendente.
                Toutefois dans la majorité des cas pour une configuration
                optimale il vaut mieux privilégier une carte graphique séparée.
            </p>
            <div class="liens"></div>
        </section>
        <section class="section">
            <p class="titreSection">La puissance de votre processeur</p>
            <p></p>
            <div class="liens"></div>
        </section>
    </div>
</template>

<style scoped>
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
    background-color: cornsilk;
    border: solid 1px grey;
    margin: 20px;
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
.liens {
    display: flex;
}
.a {
    width: 50%;
    border-radius: 50%;
    text-align: center;
    background-color: bisque;
    padding: 10px;
    margin: 1px;
}

img {
    width: 30%;
}
</style>
