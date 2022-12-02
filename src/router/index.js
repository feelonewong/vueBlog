import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../Layout/layout.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        }
      ]
    }
  ]
})

export default router
