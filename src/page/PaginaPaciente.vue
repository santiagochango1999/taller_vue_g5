<template>
  <div class="body">
    <cabecera :cedula="cedulaE" />
    <InformacionBasica :datos="datoPaciente" />
    <TablaConsultaVue :datos="datoConsulta" @dateclick="dateinfo1" />
    <div class="Seleccionar">
      <p type="Filtrar por Medico:">
        <select v-model="NewEvent.medico">
          <option v-for="dato in NewEvent1.medico" :key="dato.id">
            {{ dato.nombre }}
          </option>
        </select>
      </p>
    </div>
    <calendarioVue
      :activador="NewEvent.medico"
      @dateclick="dateinfo"
      v-if="!showModal && !showModalFactura"
    />
    <modals
      v-if="showModal"
      :form="NewEvent"
      :form1="NewEvent1"
      @closeModal="close"
      @saveApp="saveApp"
    />
    <facturamodals
      v-if="showModalFactura"
      @closeModal="close"
      :form="facturadatos"
    />
  </div>
</template>

<script>
import InformacionBasica from "@/components/InformacionBasica.vue";
import cabecera from "../components/cabezera.vue";
import TablaConsultaVue from "@/components/TablaConsulta.vue";
import calendarioVue from "@/components/calendario.vue";
import modals from "../components/Modals/CalendarModal.vue";
import facturamodals from "../components/Modals/FacturaModal.vue";

import { buscarFachada } from "../helpers/clientePaciente";
import {
  consultarFachadaC,
  guardarFachadaC,
  verificarFachadaC,
} from "../helpers/clienteConsulta";
import { buscartodoFachadaM } from "../helpers/clienteMedico";
import { consultarTodoFachada } from "../helpers/clienteServiciosMedicos";

export default {
  components: {
    cabecera,
    InformacionBasica,
    calendarioVue,
    TablaConsultaVue,
    modals,
    facturamodals,
  },
  data() {
    return {
      facturadatos: null,
      activador: null,
      cedulaE: this.$route.params.id,
      datoConsulta: {
        type: Object,
        requerid: false,
      },
      datoPaciente: {
        requerid: false,
      },
      showModal: false,
      showModalFactura: false,

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
    dateinfo1(dato) {
      console.log(dato);
      this.facturadatos = dato;
      this.showModalFactura = true;
      /*       this.setModalOpen(arg);
       */
    },
    close() {
      //controlamos el atras
      this.showModal = false;
      this.showModalFactura = false;
    },
    setModalOpen(obj) {
      //controlamos los datos fecha que aparescan directo
      let dateAndTime = obj.dateStr.split("T");
      this.NewEvent.date_at = dateAndTime[0];
      this.NewEvent.hour = dateAndTime[1].substr(0, 8);
      this.NewEvent.user_id = this.datoPaciente;
      return;
    },
    async saveApp(param) {
      //para guardar datos
      const body = {
        fechaConsulta: param.date_at + "T" + param.hour + ".000Z",
        motivo: param.motivo,
        paciente: param.user_id,
        medico: param.medico,
        factura: null,
        serviciosMedicos: param.servicio,
      };
      console.log(body);

      const verificar = await verificarFachadaC(
        body.fechaConsulta.substring(0, 19),
        body.medico.id
      );
      if (verificar === true) {
        alert("Ya esta ocupado el turno");
      } else {
        await guardarFachadaC(body); //ingreso los datos a la base de datos de la consulta
        location.reload();
        alert("Se ha ingresado correctamente");
      }
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
p:before {
  content: attr(type);
  display: flex;
  margin: 5px 2px;
  font-size: 25px;
  color: #000000;
}
.Seleccionar {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 15%;
  margin-left: 35%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
}
select {
  width: 100%;
}
</style>