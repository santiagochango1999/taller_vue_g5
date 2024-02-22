<template>
  <div class="container">
    <div class="tablah">
      <table>
        <tr>
          <td>fechaConsulta</td>
          <td>motivo</td>
          <td>Nombre Medico</td>
          <td>Nombre Servicio</td>
        </tr>

        <tr v-for="dato in datos" :key="dato.id">
          <td>{{ dato.fechaConsulta }}</td>
          <td>{{ dato.motivo }}</td>
          <td>{{ dato.nombreMedico }}</td>
          <td>{{ dato.nombreServicio }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datos: {
      type: Object,
      require: false,
    },
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