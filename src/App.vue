<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import { RouterView } from 'vue-router';
</script>

<template>
   <HeaderComponent />
  <div id="app">
    <RouterView />
  </div>
</template>