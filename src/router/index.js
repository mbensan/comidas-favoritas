import Vue from 'vue';
import VueRouter from 'vue-router';

import Comidas from '@/components/Comidas.vue';
import Login from '@/components/Login.vue';
import Mascotas from '@/components/Mascotas.vue';
import Details from '@/components/Mascota/Details.vue';
import Edit from '@/components/Mascota/Edit.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
  routes: [
    {
      path: '/', 
      component: Comidas
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/pets',
      component: Mascotas
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