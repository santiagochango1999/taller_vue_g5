<template>
  <div class="container">
    <div class="tablah">
      <h1>Lista de Consultas</h1>
      <table>
        <tr>
          <td>fechaConsulta</td>
          <td>motivo</td>
          <td>Nombre Medico</td>
          <td>Nombre Servicio</td>
          <td>Eliminar Consulta</td>
          <td>Ver factura</td>
        </tr>

        <tr v-for="dato in datos" :key="dato.id">
          <td>{{ dato.fechaConsulta }}</td>
          <td>{{ dato.motivo }}</td>
          <td>{{ dato.nombreMedico }}</td>
          <td>{{ dato.nombreServicio }}</td>
          <td><button @click="eliminarConsulta(dato.id)">Eliminar</button></td>
          <td><button @click="factura(dato.id)">Factura</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { eliminarFachadaC } from "../helpers/clienteConsulta";
export default {
  props: {
    datos: {
      type: Object,
      require: false,
    },
  },
  methods: {
    async eliminarConsulta(id) {
      // Lógica para eliminar la consulta con el ID correspondiente
      await eliminarFachadaC(id);
      location.reload();
    },
    factura(id){
      console.log("el id de la consulta es: "+id);
    }
  },
};
</script>

<style scoped>
table {
  margin: 0px 20px;
  background: -webkit-linear-gradient(left, #25c481, rgb(56, 119, 160));
  background: linear-gradient(to right, #25c481, rgb(56, 119, 160));
  text-align: left;
  width: 100%;
  height: 100%;
  table-layout: fixed;
}
.tablah {
  padding: 5px;
  padding-right: 60px;
  margin: 20px;
  border-radius: 10px;
  background-color: #007c76;
  box-shadow: 15px 10px 5px 5px #00000033;
}

th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
body {
  font-family: "Roboto", sans-serif;
}
</style>