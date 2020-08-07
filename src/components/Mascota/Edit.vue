<template>
  <div>
    <div class="row">
      <div class="col m2 s2"></div>
      <div class="col m8 s8">
        <h3>Edición </h3>
        <form @submit.prevent="editar_mascota">
          <div class="input-field">
            <input id="first_name" type="text" required="required" class="validate" v-model="nombre">
            <label for="first_name">Nombre</label>
          </div>
          <div class="input-field">
            <input id="age" type="number" required="required" class="validate" v-model="edad">
            <label for="first_name">Años</label>
          </div>
          <div class="input-field">
            <input type="text" required="required" class="validate" v-model="vacunas" maxlength="50">
            <label>Vacunas (separe por espacios)</label>
          </div>
          <div class="input-field">
            <input type="submit" class="btn">
          </div>
        </form>
      </div>
      <div class="col m2 s2"></div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase';

export default {
  name: 'Edit',
  data() {
    return {
      nombre: '',
      edad: 1,
      vacunas: []
    }
  },
  props: {
    id: String
  },
  mounted() {
    db.collection("mascotas").doc(this.$route.params.id).get()
    .then(datos => {
      // acá capturamos los datos de mi mascota, entonces los podemos asociar al objeto data
      const miMascota = datos.data();
      this.nombre = miMascota.nombre;
      this.edad = miMascota.edad;
      this.vacunas = miMascota.vacunas.join(' ');
    });
  },
  methods: {
    editar_mascota() {
      db.collection("mascotas").doc(this.$route.params.id).update({
        nombre: this.nombre,
        edad: parseInt(this.edad),
        vacunas: this.vacunas.split(' ')
      })
      .then(() => {
        this.$router.push('/pets');
      })
    }
  }
}
</script>