<template>
    <headerComponent
        :canLogin="canLogin"
        :canRegister="canRegister"
    ></headerComponent>
    <img :src="'/img/compositionhdd.jpg'" alt="composition ordinateur" />
    <div class="menus">
        <div class="menu">
            <a href="/comparateur">
                <p>Composants</p>
                <p class="text-xs">
                    En apprendre davantage sur le choix de vos composants
                </p>
            </a>
        </div>
        <div class="menu">
            <a href="/configurateur">
                <p>Configuration</p>
                <p class="text-xs">
                    Simuler la configuration d'un ordinateur composant après
                    composants avec les prix du marché
                </p>
            </a>
        </div>
        <div class="menu">
            <a href="/tutoriels">
                <p>Tutoriels</p>
                <p class="text-xs">
                    Apprendre des astuces dans le montage d'un pc ainsi que dans
                    la programmation
                </p>
            </a>
        </div>
    </div>
</template>

<script lang="js">
import headerComponent from '../Layouts/headerComponent.vue'
export default {
    props:['canLogin', 'canRegister'],
    components: {
        headerComponent
    },
    mounted() {

    },
}
</script>

<style scoped>
img {
    margin: auto;
    width: 60%;
}

@media (max-width: 400px) {
    img {
        width: 90%;
    }
}
.menus {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.menu {
    font-size: large;
    align-items: center;
    margin-top: 10px;
    border: 1px solid grey;
    width: 30%;
    text-align: center;
}
</style>
