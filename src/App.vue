<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Las comidas favoritas</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <Persona v-for="(persona, i) in personas" :key="i" :nombre="persona.nombre" :comidas="persona.comidas"/>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12">
        <h3>Mis Mascotas:</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Vacunas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mascota in mascotas" :key="mascota.id">
              <td>{{ mascota.nombre }}</td>
              <td>{{ mascota.edad }}</td>
              <td><span v-for="(vacuna, i) in mascota.vacunas" :key="i">{{ vacuna }} </span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase';
import Persona from './components/Persona.vue'

export default {
  name: 'App',
  data() {
    return {
      mascotas: []
    }
  },
  firestore() {
    return {
      mascotas: db.collection('mascotas')
    }
  },
  mounted() {
    console.log(this.mascotas)
  },
  components: {
    Persona
  },
  // para traernos los datos del almacén usamos las propiedades calculadas
  computed: {
    personas: function() {
      return this.$store.state.personas
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.collection-item {
  color: #616161;
  font-weight: bold;
}
</style>
