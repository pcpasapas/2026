<template>
  <div class="tutoCard" @click="$emit('tutoChoisi', tuto)">
    <p>Tuto {{ tuto.id }}</p>
    <p>{{ tuto.title }}</p>
    <p>{{ tuto.categorie }}</p>
  </div>
</template>

<script setup>
defineProps(['tuto'])
</script>

<style scoped>
.tutoCard {
    border: 1px solid black;
    text-align: center;
    width: 25%;
    padding: 10px;
}

.tutoCard:hover {
  background-color: rgb(206, 203, 203);
}

</style>