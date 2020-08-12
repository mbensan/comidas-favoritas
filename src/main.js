import Vue from 'vue'
import Vuex from 'vuex'
// son para la autentificación
import firebase from 'firebase/app';
import 'firebase/auth';

import VueFirestore from 'vue-firestore';
import App from './App.vue'
import router from '@/router';

Vue.config.productionTip = false

// Acá se activan las librerías
Vue.use(Vuex)
Vue.use(VueFirestore, {key: 'id'});

const store = new Vuex.Store({
  state: {
    personas: [
      {nombre:"JP", comidas: ['Asado', 'Hamburguesas']},
      {nombre:"Gaby", comidas: ['Sushi', 'Lasagna']},
      {nombre:"Pablo", comidas: ['Papapletos', 'Pizza']},
      {nombre:"Clau", comidas: ['Papafritas']},
      {nombre: 'Matias', comidas: ['sushi', 'pescado']}
    ],
    user: null,
    error: null
  },
  mutations: {
    agregar_comida_persona(state, datos) {
      console.log(`Agregué ${datos.nueva_comida} para ${datos.nombre}`)
      // primero nos traemos a la persona
      const persona = state.personas.find(per => per.nombre == datos.nombre);
      // después le agregamos una nueva comida
      persona.comidas = [...persona.comidas, datos.nueva_comida]
    },
    // mutación para cambiar el 'user'
    set_user(state, new_user) {
      state.user = new_user;
    },
    // mutación para cambiar el error
    set_error(state, new_error) {
      state.error = new_error;
    }
  },
  actions: {
    register(context, datos) {
      firebase.auth().createUserWithEmailAndPassword(datos.email, datos.password)
      // en el caso de que el registro sea exitoso
      .then(function (response) {
        console.log(response);
        // si el registro es exitoso, entonces le agrego el nombre
        firebase.auth().currentUser.updateProfile({
          displayName: datos.name
        })
      })
      .then((response) => {
        // guardamos nuestros datos en el almacén
        console.log(response)
        context.commit('set_error', null);
        context.commit('set_user', {email: datos.email, name: datos.name});
        router.push('/');
      })
      // en el caso de que ocurra un error
      .catch(function (error) {
        console.log(error);
        context.commit('set_error', error.message);
        context.commit('set_user', null);
      });
    },
    logout(context) {
      firebase.auth().signOut()
      .then(() => {
        context.commit('set_error', null);
        context.commit('set_user', null);
        router.push('/login');
      })
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
/*
Error from chokidar (C:\): Error: EBUSY: resource busy or locked, lstat 'C:\hiberfil.sys'
Error from chokidar (C:\): Error: EBUSY: resource busy or locked, lstat 'C:\pagefile.sys'
Error from chokidar (C:\): Error: EBUSY: resource busy or locked, lstat 'C:\swapfile.sys'

*/
