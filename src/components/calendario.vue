<template>
  <div class="calendario">
    <div class="header">
      <button @click="mesAnterior">&lt;</button>
      <h2>{{ mesActual }}</h2>
      <button @click="mesSiguiente">&gt;</button>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="dia in diasSemana" :key="dia">{{ dia }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(semana, index) in semanas" :key="index">
          <td v-for="dia in semana" :key="dia.numero">
            <button @click="mostrarTabla(dia)">{{ dia.numero }}</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="tablaVisible" class="tabla">
      <!-- Contenido de la tabla -->
      <h3>Tabla para {{ fechaSeleccionada }}</h3>
      <!-- ... otras tablas o contenido ... -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fechaActual: new Date(),
      diasSemana: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      tablaVisible: false,
      fechaSeleccionada: null,
    };
  },
  computed: {
    mesActual() {
      const options = { month: "long", year: "numeric" };
      return this.fechaActual.toLocaleDateString("es-ES", options);
    },
    semanas() {
      // Lógica para obtener las semanas del mes
      // Puedes implementar tu propia lógica o usar una biblioteca como 'date-fns'
      // (en este ejemplo, se asume que todas las semanas tienen 7 días)
      // ...
    },
  },
  methods: {
    mesAnterior() {
      // Lógica para cambiar al mes anterior
      // ...
    },
    mesSiguiente() {
      // Lógica para cambiar al mes siguiente
      // ...
    },
    mostrarTabla(dia) {
      this.tablaVisible = true;
      this.fechaSeleccionada = dia.fecha; // Puedes ajustar esto según tu lógica
    },
  },
};
</script>

<style scoped>
.calendario {
  max-width: 600px;
  margin: 20px auto;
  border-radius: 8px;
  background-color: #f4f4f4;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007c76;
  color: white;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.mes-btn {
  background-color: #00433e;
  color: white;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}

.mes-titulo {
  font-size: 1.5em;
}

.calendario-table {
  width: 100%;
  border-collapse: collapse;
}

.dia-semana,
.dia-btn {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
}

.dia-btn {
  width: 100%;
  background-color: #f4f4f4;
  cursor: pointer;
}

.dia-btn:hover {
  background-color: #ddd;
}

.tabla {
  background-color: #fff;
  padding: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>