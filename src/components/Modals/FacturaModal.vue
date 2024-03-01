<template>
  <div class="body">
    <div class="container">
      <div class="containertitulo">
        <h2>Datos Factura</h2>
      </div>
      <div class="cantainerdatos">
        <form class="form">
          <p type="Detalle: ">{{ form.detalleFactura }}</p>
          <p type="Fecha: ">{{ form.fechaFactura }}</p>
          <p type="Total: ">{{ form.total }}</p>
        </form>
      </div>
      <div class="containeropciones">
        <button @click="closeModal">atrás</button>
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