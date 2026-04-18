import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import('../views/ResetPassword.vue')
    },
  ],
})

export default router
