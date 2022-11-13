<template>
    <headerComponent
        :canLogin="canLogin"
        :canRegister="canRegister"
    ></headerComponent>
    <img :src="'/img/composition hdd.jpg'" />
    <div class="menus">

        <div class="menu">
            <a href="/comparateur">
                Découvrir les composants</a>
        </div>
        <div class="menu">
            Configurer un nouvel ordinateur
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
    width: 60%;
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
    height: 100px;
}
</style>
