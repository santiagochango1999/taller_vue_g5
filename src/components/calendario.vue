<template>
  <div class="body2">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGrid from "@fullcalendar/timegrid";
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  props: {
    activador: {
      required: false,
    },

  },
  watch: {
    activador: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.activar(); // Llama al método cuando el valor es true
        }
      },
      immediate: true, // Llama al handler inmediatamente al inicio si el valor es true
    },
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGrid],
        initialView: "timeGridWeek",
        headerToolbar: {
          left: "prev,next,today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        height: "auto", // Ajusta nuestro calendario
        allDaySlot: false, //quita nota del dia
        slotMinTime: "8:00:00", //horario de apertura
        slotMaxTime: "17:00:00", //horario de cierre
        slotDuration: "01:00:00", // Establece la duración de cada ranura a 1 hora
        dateClick: this.handleDateClick, //lanza un evento
        validRange: {
          start: new Date(), // Establece la fecha mínima como la fecha actual
        },
      },
    };
  },
  beforeMount() {
    this.calendarOptions.events = {
      url: "http://localhost:8080/API/v1.0/Registro/consultas",
      method: "GET",
      failure: (error) => {
        console.log("tenemos este error: ", error.message);
      },
    };
  },
  methods: {
    handleDateClick: function (arg) {
      //mandar la informacion del horario a la pagina padre
      this.$emit("dateclick", arg);
    },
    activar() {
      this.calendarOptions.events = {
        url: `http://localhost:8080/API/v1.0/Registro/consultas/filtro/${this.activador}`,
        method: "GET",
        failure: (error) => {
          console.log("tenemos este error: ", error.message);
        },
      };
    },
  },
};
</script>

<style scoped>
.body2 {
  margin: 20px;
  margin-right: 120px;
  padding: 10px 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 15px 10px 5px 5px #00000033;
}
</style>