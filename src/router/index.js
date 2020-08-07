import Vue from 'vue';
import VueRouter from 'vue-router';

import Comidas from '@/components/Comidas.vue';
import Mascotas from '@/components/Mascotas.vue';
import Details from '@/components/Mascota/Details.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Comidas
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
            path: '*',
            component: NotFound
        }
    ]
})