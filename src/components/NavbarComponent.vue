<script setup>
import { RouterLink } from 'vue-router'
const { navigation } = defineProps(['navigation']);
</script>

<template>
  <nav class="navbar navbar-expand pb-3">
    <div class="container">
    <RouterLink to="/" class="navbar-brand text-white fw-bold fs-3">
        GastroGuía
    </RouterLink>
      <div class="collapse navbar-collapse justify-content-center">
        <ul class="navbar-nav d-flex flex-row gap-3">
          <li
            class="nav-item"
            v-for="({ to, icon, name }, index) in navigation?.menuRoutes"
            :key="index"
          >
            <RouterLink class="nav-link animate__animated hover-tada text-white" :to="to">
              <i :class="`${icon} me-1`"></i>
              {{ name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>