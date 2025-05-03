<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <HeaderComponent />
  <router-view></router-view>
</template>