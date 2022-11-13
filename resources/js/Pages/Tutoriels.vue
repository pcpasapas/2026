<script lang="js">
import { ref } from 'vue';
import headerComponent from '../Layouts/headerComponent.vue'
export default {
    setup() {
        let categorie = ref(0)
        let categorieSec = ref(0)
        const changeCat = (cat) => {
            categorie.value = cat
            categorieSec.value = 0
        }
        const changeCatSec = (cat) => {
            categorieSec.value = cat
        }
        return { categorie, changeCat, categorieSec, changeCatSec }
    },
    components: {headerComponent}
}
</script>
<!-- eslint-disable vue/html-closing-bracket-newline -->
<template>
    <headerComponent></headerComponent>
    <div>
        <button class="catTuto" @click="changeCat(1)">Laravel + vite</button>
        <button class="catTuto">Google Firebase</button>
        <button class="catTuto">Vue js</button>
        <button class="catTuto" @click="changeCat(4)">CSS</button>
        <button class="catTuto" @click="changeCat(5)">
            Sites incontournables
        </button>
    </div>
    <div>
        <button v-if="categorie === 1" @click="changeCatSec(11)">
            Connexion https
        </button>

        <div v-if="categorieSec === 11">
            <p>app/Providers/AppServiceProviders.php</p>

            <textarea
                style="height: 280px"
                readonly="true"
                class="code bg-gray-100"
            >
public function boot()
    {
{  if (App::environment('production')) {
            \URL::forceScheme('https');
        }
        else {
            \URL::forceScheme('http');
        }
    }
}</textarea
            >
            <p>
                Vous aurez sans doute a faire un "php artisan config:cache" dans
                le terminal à chaque changement
            </p>
        </div>
    </div>
    <div>
        <button v-if="categorie === 4" @click="changeCatSec(41)">
            Changer la couleur d'une checkbox
        </button>

        <div v-if="categorie === 5">
        <a href="https://cssgradient.io/" target="blank">
            CSS Gradient</a>
        <a href="https://www.bequiet.com/fr/psucalculator/quick" target="_blank">
            Evaluer la puissance nécessaire pour l'alimentation</a>
        </div>
    </div>
</template>

<style>
.code {
    width: 500px;
    resize: none;
    overflow: hidden;
    margin: 10px;
}

.catTuto {
    background-color: rgb(192, 192, 192);
    margin: 3px;
    padding: 5px;
    border-radius: 20%;
    font-size: x-large;
}
.catTuto :hover {
    background-color: grey;
}
</style>
