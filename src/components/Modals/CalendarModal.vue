<template>
  <div class="body">
    <div class="container">
      <div class="containertitulo">
        <h2>reservas</h2>
      </div>
      <div class="cantainerdatos">
        <form class="form">
          <p type="Motivo">
            <input
              v-model="form.motivo"
              type="text"
              placeholder="Cual es el motivo"
            />
          </p>
          <p type="Fecha">
            <input v-model="form.date_at" type="text" />
          </p>
          <p type="Hora">
            <input v-model="form.hour" type="text" />
          </p>
          <p type="Servicio Medico:">
            <select v-model="form.servicio">
              <option v-for="dato in form1.servicio" :key="dato.id">
                {{ dato.nombre }}
              </option>
            </select>
          </p>
          <!-- <p type="Doctor:">
            <select v-model="form.medico">
              <option v-for="dato in form1.medico" :key="dato.id">
                {{ dato.nombre }}
              </option>
            </select>
          </p> -->
        </form>
      </div>
      <div class="containeropciones">
        <button @click="closeModal">atrás</button>
        <button @click="store(form)">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    form1: {
      type: Object,
      default: () => {},
    },
  },
  
  methods: {
    //maneja poder salir de la pantalla evento
    closeModal() {
      this.$emit("closeModal");
    },
    store(form) {
      //va a manejar el guardar
      if (
        this.form.motivo === "" ||
        this.form.servicio === "" ||
        this.form.medico === ""
      ) {
        alert("Ingrese los datos de la consulta para continuar");
      } else {
        this.capturaid(this.form1.servicio);
        this.capturaidm(this.form1.medico);
        this.$emit("saveApp", form);
      }
    },
    capturaid(lista) {
      lista.forEach((element) => {
        if (element.nombre === this.form.servicio) {
          this.form.servicio = element;
        }
      });
    },
    capturaidm(lista) {
      lista.forEach((element) => {
        if (element.nombre === this.form.medico) {
          this.form.medico = element;
        }
      });
    },
  },
};
</script>

<style scoped>
.body {
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
}
.container {
  width: 400px;
  height: 500px;
  background-color: #e6e6e6;
  border-radius: 8px;
  font-family: "Times New Roman", Times, serif;
  box-shadow: 0px 0px 40px -10px #000;
  padding: 10px;
}

.containeropciones {
  display: flex;
  justify-content: center;
}

p:before {
  content: attr(type);
  display: flex;
  margin: 5px 2px;
  font-size: 25px;
  color: #000000;
}

input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #bebed2;
  box-shadow: 30px 20px 40px -8px #000;
}

input:focus {
  border-bottom: 3px solid #78788c;
}

button {
  width: 125px;
  height: 40px;
  margin: 10px 10px;
  font-size: 20px;
  border-radius: 20px;
  background-color: #ffffff;
}
select {
  width: 100%;
}
</style>