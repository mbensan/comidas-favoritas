import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

import Comidas from '@/components/Comidas.vue';
import Login from '@/components/Login.vue';
import Mascotas from '@/components/Mascotas.vue';
import Details from '@/components/Mascota/Details.vue';
import Edit from '@/components/Mascota/Edit.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);    // instalamos explícitamente el router

const router = new VueRouter({
  routes: [
    {
      path: '/', 
      component: Comidas,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/pets',
      component: Mascotas,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pets/:id',
      component: Details
    },
    {
      path: '/pets/:id/edit',
      component: Edit,
      props: true
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {

  let currentUser = firebase.auth().currentUser;
  
  if (to.meta.requiresAuth && currentUser == null) {
    next('/login')
  } else {
    next()
  }
})

export default router;
