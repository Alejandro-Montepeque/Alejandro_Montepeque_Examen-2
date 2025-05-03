<script setup>
import ReviewCard from '../components/CardListComponent.vue';

const reviewsNegativos = [
  {
    titulo: 'La Parrilla del Chef',
    resena: 'La carne llegó fría y el servicio fue lento.',
    estrellas: 1.5,
    imagen: '/img/restaurante3.jpg'
  },
  {
    titulo: 'Sushi Go!',
    resena: 'El sushi no parecía fresco y el lugar estaba sucio.',
    estrellas: 2.5,
    imagen: '/img/restaurante2.jpg'
  },
  {
    titulo: 'El Rincón Vegano',
    resena: 'La comida sin sabor y muy cara para lo que ofrecen.',
    estrellas: 1.5,
    imagen: '/img/restaurante8.jpg'
  },
  {
    titulo: 'Taco Loco',
    resena: 'Esperamos 40 minutos por tacos fríos y mal servidos.',
    estrellas: 2,
    imagen: '/img/restaurante6.jpg'
  },
  {
    titulo: 'Pizzería Nápoles',
    resena: 'Masa cruda y servicio pésimo. No volveré.',
    estrellas: 2.5,
    imagen: '/img/restaurante7.jpg'
  },
  {
    titulo: 'Café Central',
    resena: 'Pedí un café con leche y me dieron uno frío y aguado.',
    estrellas: 1.5,
    imagen: '/img/restaurante10.jpg'
  },
  {
    titulo: 'Mariscos del Puerto',
    resena: 'El pescado olía mal. Tuve malestar estomacal luego.',
    estrellas: 2,
    imagen: '/img/restaurante9.jpg'
  },
  {
    titulo: 'Hamburguesas El Toro',
    resena: 'Muy grasosa y pan quemado. Mala experiencia.',
    estrellas: 1,
    imagen: '/img/restaurante5.jpg'
  }
];

</script>

<template>
    <div class="container mt-4">
      <h1>Comentarios Negativos</h1>
      <div class="row">
        <div class="col-md-6" v-for="(review, i) in reviewsNegativos" :key="i">
          <ReviewCard
            :titulo="review.titulo"
            :resena="review.resena"
            :estrellas="review.estrellas"
            :imagen="review.imagen"
          />
        </div>
      </div>
    </div>
  </template>