import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => import('../views/SignIn.vue'),
      meta: { layout: 'AuthLayout', requireAuth: false }
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue'),
      meta: { layout: 'AuthLayout', requireAuth: false }
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import('../views/ResetPassword.vue'),
      meta: { layout: 'AuthLayout', requireAuth: false }  
    },
    {
      path: '/',
      name: 'VocabularyNotebook',
      component: () => import('../views/VocabularyNotebook.vue'),
      meta: { layout: 'MainLayout', requireAuth: true }
    }
  ],
})

export default router
