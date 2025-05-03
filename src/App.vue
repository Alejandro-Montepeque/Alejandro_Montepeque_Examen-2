<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import RestaurantCard from './components/RestaurantComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
   <HeaderComponent />
   <RestaurantCard
    title="Explora lo mejor"
    description="Comparte tu opinión sobre los mejores restaurantes."
    imageSrc="/img/PortadaSitio.jpg"
    imageAlt="Hamburguesa deliciosa"
    />
  <div id="app">
    <RouterView />
  </div>
  <FooterComponent />
</template>