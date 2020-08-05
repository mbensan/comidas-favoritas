<template>
  <div class="col s4 m4">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{nombre}}</span>
        <ul class="collection">
          <li v-for="(comida, i) in comidas" :key="i" class="collection-item">{{comida}}</li>
        </ul>
      </div>
      <div class="card-action">
        <div class="input-field">
          <input placeholder="" type="text" class="validate" v-model="nueva_comida">
          <label >Nueva Comida</label>
          <a class="waves-effect waves-light btn" @click="agregarComida">Agregar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Persona',
  // El objeto data sirve para capturar el valor del input que ingrese el usuario
  data() {
    return {
      nueva_comida: ''
    }
  },
  props: {
    nombre: String,
    comidas: Array
  },
  // manejadores de eventos
  methods: {
    agregarComida() {
      // Primero validamos que input no esté vacío
      if (this.nueva_comida == '') {
        return
      }
      // entonces ahora haremos la mutación
      const datos = {
        nombre: this.nombre,
        nueva_comida: this.nueva_comida
      }
      this.$store.commit('agregar_comida_persona', datos);
      // Finalmente limpiamos el input
      this.nueva_comida = ''
    }
  }
}
</script>