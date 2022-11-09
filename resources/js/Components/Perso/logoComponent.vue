<script setup></script>

<template>
  <div class="">
    <img :src="'/img/PcPasaPas.png'" />
  </div>
</template>

<style scoped>
@media (max-width: 800px) {
  img {
    margin: 20px;
    width: 150px;
    height: 150px;
   
  }
}
@media (min-width: 800px) {
  img {
    width: 200px;
    height: 200px;
    margin: auto;
    justify-content: center;
  }
}
</style>
