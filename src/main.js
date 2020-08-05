import Vue from 'vue'
import Vuex from 'vuex'
import VueFirestore from 'vue-firestore';
import App from './App.vue'

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
    ]
  },
  mutations: {
    agregar_comida_persona(state, datos) {
      console.log(`Agregué ${datos.nueva_comida} para ${datos.nombre}`)
      // primero nos traemos a la persona
      const persona = state.personas.find(per => per.nombre == datos.nombre);
      // después le agregamos una nueva comida
      persona.comidas = [...persona.comidas, datos.nueva_comida]
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
