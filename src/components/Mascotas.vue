<template>
  <div class="row">
    <div class="col s6 m6">
      <h3>Mis Mascotas:</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Vacunas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mascota in mascotas" :key="mascota.id">

            <td><router-link :to="{path:'/pets/' + mascota.id}">{{ mascota.nombre }}</router-link></td>
            
            <td>{{ mascota.edad }}</td>
            <td><span v-for="(vacuna, i) in mascota.vacunas" :key="i">{{ vacuna }} </span></td>
            <td>
              <a href="#" class="boton-borrar" @click.prevent="borrar_mascota(mascota.id)"><i class="material-icons">delete</i></a>
              <router-link :to="{path: `/pets/${mascota.id}/edit`}"><i class="material-icons">edit</i></router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col m6 s6">
      <h3>Nueva Mascota</h3>
      <form @submit="ingresar_mascota">
        <div class="input-field">
          <input id="first_name" type="text" required="required" class="validate" v-model="nueva_nombre">
          <label for="first_name">Nombre</label>
        </div>
        <div class="input-field">
          <input id="age" type="number" required="required" class="validate" v-model="nueva_edad">
          <label for="first_name">Años</label>
        </div>
        <div class="input-field">
          <input type="text" required="required" class="validate" v-model="nueva_vacunas" maxlength="50">
          <label>Vacunas (separe por espacios)</label>
        </div>
        <div class="input-field">
          <input type="submit" class="btn">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase';

export default {
  name: 'Mascotas',
  data() {
    return {
      // mascotas que traermos de firebase
      mascotas: [],
      // elementos del formulario de nueva mascota
      nueva_nombre: '',
      nueva_edad: '',
      nueva_vacunas: ''
    }
  },
  methods: {
    ingresar_mascota(ev) {
      ev.preventDefault();
      db.collection('mascotas').add({
        nombre: this.nueva_nombre,
        edad: parseInt(this.nueva_edad),
        vacunas: this.nueva_vacunas.split(' ')
      });
      // Ahora vaciamos el formulario
      this.nueva_nombre = '';
      this.nueva_edad = '';
      this.nueva_vacunas = '';
    },
    borrar_mascota(id_mascota) {
      console.log(id_mascota);
      const respuesta = confirm('¿Desea borrar esta mascota?');
      if (respuesta == false) { return; }
      db.collection("pets").doc(id_mascota).delete();
    }
  },
  firestore() {
    return {
      mascotas: db.collection('mascotas')
    }
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
}
.collection-item {
  color: #616161;
  font-weight: bold;
}
.boton-borrar > i {
  color: #d32f2f;
}
</style>
