<template>
  <div class="row">
    <Persona v-for="(persona, i) in personas" :key="i" :nombre="persona.nombre" :comidas="persona.comidas"/>
  </div>
</template>

<script>
import Persona from '@/components/Persona.vue'

export default {
  name: 'Comidas',
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
