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
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Persona',
  props: {
    nombre: String,
    comidas: Array
  }
}
</script>