<script setup>
import NavbarComponent from './NavbarComponent.vue';

const navigation = {
  menuRoutes: [
    {
      name: 'Comentarios Positivos',
      icon: 'pi pi-thumbs-up',
      to: '/reseñasPositivas',
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
    <header class="position-fixed top-0 start-0 w-100 z-3 ">
      <NavbarComponent :navigation="navigation" />
    </header>
  </template>