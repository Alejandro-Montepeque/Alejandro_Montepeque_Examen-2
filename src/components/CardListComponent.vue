<script setup>
defineProps({
  titulo: String,
  resena: String,
  estrellas: Number,
  imagen: String
});
</script>

<template>
  <div class="card shadow-sm p-3 mb-3 bg-white rounded d-flex flex-row justify-content-between align-items-center">
    <div>
      <h5>{{ titulo }}</h5>
      <p>{{ resena }}</p>
      <div>
        <span v-for="n in 5" :key="n">
          <i
            :class="{
              'pi pi-star-fill text-warning': n <= Math.floor(estrellas),
              'pi pi-star-half text-warning': n - estrellas === 0.5,
              'pi pi-star text-warning': n > estrellas && n - estrellas !== 0.5
            }"
          ></i>
        </span>
      </div>
    </div>
    <div class="text-center">
        <img
            :src="imagen"
            alt="Imagen del restaurante"
            class="img-fluid rounded "
             style="max-width: 100px; height: auto; animation: tiltGlowPulse 5s infinite ease-in-out;"
        />
    </div>
  </div>
</template>

<style scoped>
.pi {
  font-size: 1.2rem;
  margin-right: 4px;
}
</style>
