<script setup>
import ReviewCard from '../components/CardListComponent.vue';

const reviews = [
  {
    titulo: 'La Parrilla del Chef',
    resena: 'La carne en su punto perfecto, el ambiente acogedor.',
    estrellas: 4.5,
    imagen: '/img/restaurante3.jpg'
  },
  {
    titulo: 'Sushi Go!',
    resena: 'Buena variedad, pero el servicio puede mejorar.',
    estrellas: 3.5,
    imagen: '/img/restaurante2.jpg'
  },
  {
    titulo: 'El Rincón Vegano',
    resena: 'Platos deliciosos y creativos. Ideal para una comida saludable.',
    estrellas: 5,
    imagen: '/img/restaurante8.jpg'
  },
  {
    titulo: 'Taco Loco',
    resena: 'Buen sabor, pero las porciones son pequeñas.',
    estrellas: 3,
    imagen: '/img/restaurante6.jpg'
  },
  {
    titulo: 'Pizzería Nápoles',
    resena: 'Pizza al horno de leña con ingredientes frescos. ¡Una delicia!',
    estrellas: 4.8,
    imagen: '/img/restaurante7.jpg'
  },
  {
    titulo: 'Café Central',
    resena: 'Excelente café y atención. Ideal para trabajar o leer.',
    estrellas: 4.2,
    imagen: '/img/restaurante10.jpg'
  },
  {
    titulo: 'Mariscos del Puerto',
    resena: 'Los camarones al ajillo son los mejores que he probado.',
    estrellas: 4.7,
    imagen: '/img/restaurante9.jpg'
  },
  {
    titulo: 'Hamburguesas El Toro',
    resena: 'La hamburguesa doble con queso es un clásico. Muy buena.',
    estrellas: 4.3,
    imagen: '/img/restaurante5.jpg'
  }
];

</script>

<template>
  <div class="container mt-4">
    <h1>Comentarios Positivos</h1>
    <div class="row">
      <div class="col-md-6" v-for="(review, i) in reviews" :key="i">
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
