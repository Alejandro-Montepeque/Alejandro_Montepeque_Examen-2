<script setup>
import { RouterLink } from 'vue-router'
const { navigation } = defineProps(['navigation']);
</script>

<template>
    <nav class="navbar navbar-expand bg-white pb-3">
      <div class="container">
        <nav class="collapse navbar-collapse justify-content-center">
          <ul class="navbar-nav small g-3">
            <li
              class="nav-item"
              v-for="({ to, icon, name }, index) in navigation?.menuRoutes"
              :key="index"
            >
              <RouterLink class="nav-link animate__animated animate__pulse" :to="to">
                <i :class="`${icon} me-1`"></i>
                {{ name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
</template>