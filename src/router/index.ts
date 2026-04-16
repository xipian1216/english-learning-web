import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => import('../components/SignIn.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../components/SignUp.vue')
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import('../components/ResetPassword.vue')
    },
  ],
})

export default router
