<template>
  <div class="body">
    <cabecera :cedula="cedulaE" />
    <InformacionBasica :datos="datoPaciente" />
    <div class="Seleccionar">
      <p type="Ingrese la cedula del Paciente:">
        <input v-model="cedulaConsulta" type="text" />
      </p>
      <button @click="buscarconsultas">Buscar</button>
    </div>
    <TablaConsultaVue :datos="datoConsulta" @dateclick="dateinfo1" />

    <calendarioVue
      :activador2="datoPaciente.nombre"
      @dateclick="dateinfo"
      v-if="!showModal && !showModalFactura "
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

import { buscarMFachada } from "../helpers/clienteMedico";
import {
  buscarFachada,
  verificarCedulaExistentefachada,
} from "../helpers/clientePaciente";
import {
  consultarFachadaC2,
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
      showModalFactura: false,
      facturadatos:null,
      cedulaConsulta: "",
      activador: null,
      cedulaE: null,
      datoConsulta: "",
      datoPaciente: {
        requerid: false,
      },
      datoPaciente2: {
        requerid: false,
      },
      showModal: false,
      NewEvent: {
        motivo: "",
        date_at: "",
        hour: "",
        user_id: "",
        servicio: "",
        medico: "validado",
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
    async buscarconsultas() {
      //realizar validacion primero y de ahi verificar numero de datos que sean 10

      if (this.cedulaConsulta) {
        const verifica = await verificarCedulaExistentefachada(
          this.cedulaConsulta
        );
        if (verifica) {
          const data = await buscarFachada(this.cedulaConsulta);
          this.datoPaciente2 = data;
          console.log("cedula: " + this.cedulaE);

          const data2 = await consultarFachadaC2(
            this.datoPaciente2.id,
            this.cedulaE
          );
          this.datoConsulta = data2;
          if (data2.length === 0) {
            alert("NO HAY CONSULTAS");
          }
        } else {
          alert(
            `No se encontro un Paciente con esta cedula:${this.cedulaConsulta}`
          );
        }
      } else {
        alert("Ingrese datos en la cedula del paciente");
      }
    },
    //metodo para realizar la consulta a la base de datos
    async consultarMedico() {
      this.cedulaE = this.$route.params.cedula;
      const data = await buscarMFachada(this.$route.params.cedula);
      this.datoPaciente = data;

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
      if (this.cedulaConsulta) {
        const verifica = await verificarCedulaExistentefachada(
          this.cedulaConsulta
        );
        if (verifica) {
          const data = await buscarFachada(this.cedulaConsulta);
          const body = {
            fechaConsulta: param.date_at + "T" + param.hour + ".000Z",
            motivo: param.motivo,
            paciente: data,
            medico: this.datoPaciente,
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
        } else {
          alert("PACIENTE NO ENCONTRADO INGRESE BIEN LA CEDULA");
        }
      } else {
        alert("INGRESE LA CEDULA DEL PACIENTE EN LA PARTE PRINCIPAL");
      }
    },
  },
  created() {
    //inicializamos al inicio los datos consultados de la consulta del cliente para que se dezpliegue en la pantalla
    this.consultarMedico();
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