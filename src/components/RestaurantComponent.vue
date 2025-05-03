<template>
    <div class="w-100 mt-4">
      <div class="row bg-primary text-white rounded shadow-lg overflow-hidden m-0">
        <div class="col-md-6 d-flex flex-column justify-content-center p-4">
          <h2 class="display-6 fw-bold">{{ title }}</h2>
          <p class="lead">{{ description }}</p>
        </div>
        <div class="col-md-6 bg-light d-flex align-items-center justify-content-center">
          <img
            v-if="imageSrc"
            :src="imageSrc"
            :alt="imageAlt"
            class="img-fluid animate__animated animate__pulse animate__infinite animate__slower"
          />
          <p v-else class="text-muted text-center m-0">
            imagen<br />(animación 1)
          </p>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'InfoBanner',
    props: {
      title: {
        type: String,
        default: 'Descubre y comparte',
      },
      description: {
        type: String,
        default: 'Las mejores reseñas de restaurantes en tu ciudad. Comparte tu experiencia y ayuda a otros a encontrar los mejores lugares.',
      },
      imageSrc: {
        type: String,
        default: '',
      },
      imageAlt: {
        type: String,
        default: 'Imagen relacionada',
      },
    },
  };
  </script>