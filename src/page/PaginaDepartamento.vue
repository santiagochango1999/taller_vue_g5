<template>
  <div class="container">
    <cabecera />
    <div class="consulta">
      <button @click="consultar">Consultar</button>
      <input v-model="name" type="text" />
    </div>

    <div class="tablah">
      <table>
        <tr>
          <td>Id</td>
          <td>Especialidad</td>
          <td>Telefono</td>
          <td>Doctores</td>
        </tr>

        <tr v-for="dato in datos" :key="dato.id">
          <td>{{ dato.id }}</td>
          <td>{{ dato.nombre }}</td>
          <td>{{ dato.telefono }}</td>
          <td  v-for="da in dato.medico" :key="da.id">{{convertir(dato.medico)}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import cabecera from "../components/cabezera.vue";
import{listaFachada} from"../helpers/DaTra/listaSeryMed";
import {
  consultarFachada,
  consultarUnoFachada,
} from "../helpers/clienteDepartamento.js";
export default {
  components: {
    cabecera,
  },
  data() {
    return {
      datos: null,
    };
  },
  methods: {
    async consultar() {
      console.log("alo");
      this.datos = await consultarFachada();
    },
    convertir(dato){
      console.log("dato:"+dato);
      return listaFachada(dato);
    }
  },
};
</script>

<style scoped >
.container {
  background-color: rgb(56, 119, 160);
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  top: 0px;
  left: 0px;
  position: fixed;
}
/* * {
  background: -webkit-linear-gradient(left, #25c481, rgb(56, 119, 160));
  background: linear-gradient(to right, #25c481, rgb(56, 119, 160));
  text-align: left;
} */
.consulta {
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
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