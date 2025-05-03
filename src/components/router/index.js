import { createRouter, createWebHistory } from 'vue-router'
import Pagina1 from '../../views/Pagina1.vue'
import Pagina2 from '../../views/pagina2.vue'
import Pagina3 from '../../views/pagina3.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '',
        name: 'home',
        component: Pagina1,
      },
      {
        path: '/reseñasNegativas',
        name: 'Negativas',
        component: Pagina2,
      },
      {
        path: '/restaurantes',
        name: 'Calificación de restaurantes',
        component: Pagina3
      }
    ]
})
export default router