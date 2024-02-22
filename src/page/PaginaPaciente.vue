<template>
  <div class="body">
    <cabecera :cedula="cedulaE" />
    <InformacionBasica :datos="datoPaciente" />
    <TablaConsultaVue :datos="datoConsulta" />
    <!-- <calendario/> -->
  </div>
</template>

<script>
import InformacionBasica from "@/components/InformacionBasica.vue";
import cabecera from "../components/cabezera.vue";
import calendario from "@/components/calendario.vue";
import TablaConsultaVue from "@/components/TablaConsulta.vue";

import { buscarFachada } from "../helpers/clientePaciente";
import { consultarFachadaC } from "../helpers/clienteConsulta";

export default {
  components: {
    cabecera,
    InformacionBasica,
    calendario,
    TablaConsultaVue,
  },
  data() {
    return {
      cedulaE: this.$route.params.id,
      datoConsulta: {
        type: Object,
        requerid: false,
      },
      datoPaciente: {
        requerid: false,
      },
    };
  },
  methods: {
    async consultarPaciente() {
      const data = await buscarFachada(this.$route.params.cedula);
      this.datoPaciente = data;

      const data2 = await consultarFachadaC(this.datoPaciente.id);
      this.datoConsulta = data2;
    },
  },
  created() {
    this.consultarPaciente();
  },
};
</script>

<style scoped>
.body {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  /* position : fixed =este estilo realiza como si estuviera flotando y no sobrepone a ningun elemento como una marca de agua */
  position: fixed;
  /* para garantizar que empieze desde los bordes toca poner top:0px y left:0px*/
  top: 0px;
  left: 0px;
  background-color: rgb(56, 119, 160);
}
</style>