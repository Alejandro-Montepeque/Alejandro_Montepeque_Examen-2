<script setup>
import NavbarComponent from './NavbarComponent.vue';

const navigation = {
  menuRoutes: [
    {
      name: 'Comentarios Positivos',
      icon: 'pi pi-thumbs-up',
      to: '/',
    },
    {
      name: 'Comentarios Negativos',
      icon: 'pi pi-thumbs-down',
      to: '/reseñasNegativas'
    },
    {
      name: 'Calificación de restaurantes',
      icon: 'pi pi-star',
      to: '/restaurantes'
    }
  ]
}
</script>
<template>
    <header class="d-flex flex-column bg-white h-100 mb-3 pt-3 position-sticky top-0 z-1 shadow-sm">
      <NavbarComponent :navigation="navigation" />
    </header>
  </template>