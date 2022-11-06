<template>
    <headerComponent :canLogin="canLogin" :canRegister="canRegister"></headerComponent>
</template>

<script>
import headerComponent from '../Layouts/headerComponent.vue'
export default {
    props:['canLogin', 'canRegister'],
    components: {
        headerComponent
    },
    mounted() {
    }
}
</script>