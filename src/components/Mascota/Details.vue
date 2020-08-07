<template>
  <div>
    Pantalla de ver detalles de la mascota de id {{$route.params.id}}
  </div>
</template>

<script>
import { db } from '@/firebase';

export default {
  name: 'Details',
  data() {
    return {
      nombre: '',
      edad: 0,
      vacunas: []
    }
  },
  mounted() {
    db.collection("mascotas").doc(this.$route.params.id).get()
    .then(datos => {
      // acá capturamos los datos de mi mascota, entonces los podemos asociar al objeto data
      const miMascota = datos.data();
      console.log(miMascota)
    });
  }
}
</script>