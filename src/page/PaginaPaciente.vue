<template>
  <div class="body">
    <cabecera :cedula="cedulaE" />
    <InformacionBasica :datos="datoPaciente" />
    <TablaConsultaVue :datos="datoConsulta" />
    <calendarioVue @dateclick="dateinfo" v-if="!showModal" />
    <modals
      v-if="showModal"
      :form="NewEvent"
      :form1="NewEvent1"
      @closeModal="close"
      @saveApp="saveApp"
    />
  </div>
</template>

<script>
import InformacionBasica from "@/components/InformacionBasica.vue";
import cabecera from "../components/cabezera.vue";
import TablaConsultaVue from "@/components/TablaConsulta.vue";
import calendarioVue from "@/components/calendario.vue";
import modals from "../components/Modals/CalendarModal.vue";

import { buscarFachada } from "../helpers/clientePaciente";
import { consultarFachadaC } from "../helpers/clienteConsulta";
import { buscartodoFachadaM } from "../helpers/clienteMedico";
import { consultarTodoFachada } from "../helpers/clienteServiciosMedicos";



export default {
  components: {
    cabecera,
    InformacionBasica,
    calendarioVue,
    TablaConsultaVue,
    modals,
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
      showModal: false,
      NewEvent: {
        motivo: "",
        date_at: "",
        hour: "",
        user_id: "",
        servicio: "",
        medico: "",
      },
      NewEvent1: {
        servicio: "",
        medico: "",
      },
      //datos servicios
      datosServicios: [],
      listaServicio: null,
      //datos medicos
      datosMedicos: [],
      listaMedicos: null,
    };
  },
  methods: {
    //metodo para realizar la consulta a la base de datos
    async consultarPaciente() {
      const data = await buscarFachada(this.$route.params.cedula);
      this.datoPaciente = data;

      const data2 = await consultarFachadaC(this.datoPaciente.id);
      this.datoConsulta = data2;

      //MANEJAR LOS DATOS DE SERVICIO Y MEDICOS PARA SACAR SUS NOMBRES Y TENER PRESENTES ................................

      //servicios todos
      this.NewEvent1.servicio = await consultarTodoFachada();
      this.NewEvent1.medico = await buscartodoFachadaM();

      //-----------------------------------------------------------------------------------------------------------------
    },
    dateinfo(arg) {
      //traemos datos del calendario cuando damos click
      console.log("recibiendo datos", arg);
      //cambiamos
      this.showModal = true;
      this.setModalOpen(arg);
    },
    close() {
      //controlamos el atras
      this.showModal = false;
    },
    setModalOpen(obj) {
      //controlamos los datos fecha que aparescan directo
      let dateAndTime = obj.dateStr.split("T");
      this.NewEvent.date_at = dateAndTime[0];
      this.NewEvent.hour = dateAndTime[1].substr(0, 8);
      this.NewEvent.user_id = this.datoPaciente.id;
      return;
    },
    saveApp(param) {
      //para guardar datos
      console.log(param);
    },
  },
  created() {
    //inicializamos al inicio los datos consultados de la consulta del cliente para que se dezpliegue en la pantalla
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
  overflow-y: auto; /* Agregado overflow-y para permitir desplazamiento vertical */
  /* para garantizar que empieze desde los bordes toca poner top:0px y left:0px*/
  top: 0px;
  left: 0px;
  background-color: rgb(56, 119, 160);
}
</style>