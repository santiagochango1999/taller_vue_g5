<template>
  <div class="containercabezera">
    <img src="../assets/imglogo2.jpg" alt="no hay" />
    <div class="container2">
      <router-link :to="`/pacientes/${cedula}`">Inicio</router-link>
      <router-link to="/HistorialClinico">Historial Clinico</router-link>
      <router-link to="/ServicioMedicos">Servicios Medicos</router-link>
      <router-link to="/departamentos">Departamentos</router-link>
    </div>
    <div class="container3">
    <router-link to="/" class="exit-button">Salir</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cedula: {
      require: false,
    },
  },
};
</script>

<style scoped>
.container3 {
  position:absolute;
  top:50px;
  right:100px;
  padding:10px
}

.containercabezera {
  width: 1500px;
  display: grid;
  text-align: right;
  grid-template-columns: 20% 80%;
  margin: 20px;
  border-radius: 10px;
  background-color: #007c76;
  box-shadow: 15px 10px 5px 5px #00000033;
}

.container2 {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 120px;
  border-bottom-right-radius: 60px;
}

a {
  height: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;
  padding: 10px 20px; /* Adjusted padding for the button */
  border: solid 1px white;
  margin: 0px 20px;
  background: white;
  border-radius: 6px;
  color: rgb(56, 119, 160);
  text-decoration: none;
  transition: transform 0.3s ease;
}

.exit-button {
  width: auto; /* Set width to auto for the "Salir" button */
}

a:hover {
  transform: scale(1.05);
}
</style>
