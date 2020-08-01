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
        <Persona nombre="JP" :comidas="['Asado', 'Hamburguesas']" />
        <Persona nombre="Gaby" :comidas="['Sushi', 'Lasagna']" />
        <Persona nombre="Pablo" :comidas="['Papapletos', 'Pizza']" />
        <Persona nombre="Mati" :comidas="['Lasagna', 'Albacora', 'Nutella']" />
        <Persona nombre="Clau" :comidas="['Papafritas']" />
      </div>
    </div>
  </div>
</template>

<script>
import Persona from './components/Persona.vue'

export default {
  name: 'App',
  components: {
    Persona
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.collection-item {
  color: #616161;
  font-weight: bold;
}
</style>
