<template>
    <headerComponent
        :canLogin="canLogin"
        :canRegister="canRegister"
    ></headerComponent>
    <h1>page des tutos</h1>
    <button>Laravel + vite</button>
    <button>Connexion https</button>
    <p>app/Providers/AppServiceProviders.php</p>
    
    <textarea
        style="height:150px"
        readonly="true"
        class="code"
    >public function boot() {
        { 
            \URL::forceScheme('https');
         }
    }</textarea>
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
    methods: {
        
        auto_grow(element) {
            element.style.height = "5px";
            element.style.height = (element.scrollHeight)+"px";
        }
    }
}
</script>
<style>
.code {
    width: 500px;
    resize: none;
    overflow: hidden;
}
</style>
