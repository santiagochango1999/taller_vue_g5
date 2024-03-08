<template>
  <div class="body">
    <div class="factura">
      <header>
        <h1>Factura Imprimir</h1>
      </header>
      <div class="container">
        <div class="info-comprobante">
          <p><strong>Fecha de emisión:</strong> 07/3/2023</p>
          <p><strong>Vencimiento:</strong> 30 días</p>
        </div>
        <div class="info-cliente">
          <p><strong>Cliente:</strong> {{ form.cliente.nombre }}</p>
          <p><strong>C.:</strong> {{ form.cliente.cedula }}</p>
          <p><strong>Teléfonos:</strong> {{ form.cliente.telefono }}</p>
          <p><strong>Direccion:</strong> {{ form.cliente.direccion }}</p>
        </div>
      </div>
      <table class="tabla-productos">
        <caption>
          Tabla de servicios
        </caption>
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Detalle</th>
            <th>Precio</th>
            <th>Iva 12%</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ form.datosconsultas.nombreServicio }}</td>
            <td>{{ form.dato.detalleFactura }}</td>
            <td>{{ form.dato.total }}</td>
            <td>{{ iva }}</td>
            <td>{{ pagototal }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="closeModal">atrás</button>
    </div>
    <div class="container3">
      <h1>Formulario de pago</h1>
      <form >
        <div class="form-group">
          <label for="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingrese su nombre completo"
          />
        </div>
        <div class="form-group">
          <label for="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <br />
        <div class="checkdiv">
          <input type="radio" id="visa" name="payment" value="visa" />
          <label for="visa"> Visa</label><br />

          <input type="radio" id="master" name="payment" value="mastercard" />
          <label for="master"> Mastercard</label><br />

          <input type="radio" id="discover" name="payment" value="discover" />
          <label for="discover"> Discover</label><br />
        </div>
        <br />
        <p>Seleccione el servicio Bancario</p>
        <br />
        <div class="checkdiv">
          <input type="radio" id="visa" name="payment" value="visa" />
          <label for="visa">Pichincha</label><br />

          <input type="radio" id="master" name="payment" value="mastercard" />
          <label for="master">Guayaquil</label><br />

          <input type="radio" id="discover" name="payment" value="discover" />
          <label for="discover">Pacifico</label><br />
        </div>
        <br />

        <div class="form-group">
          <label for="tarjeta">Número de tarjeta</label>
          <input
            type="text"
            id="tarjeta"
            name="tarjeta"
            placeholder="Ingrese el número de su tarjeta"
          />
        </div>
        <div class="form-group">
          <label for="fecha">Fecha de vencimiento</label>
          <input
            type="text"
            id="fecha"
            name="fecha"
            placeholder="Ingrese la fecha de vencimiento (MM/YY)"
          />
        </div>
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" placeholder="Ingrese el CVV" />
        </div>
        <div class="form-group">
          <label for="monto">Monto a pagar</label>
          <input
            type="number"
            id="monto"
            name="monto"
            placeholder="Ingrese el monto a pagar"
          />
        </div>
      <button @click="Pago">Pago</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      requerid: false,
      default: () => {},
    },
    form1: {
      type: Object,
      requerid: false,
      default: () => {},
    },
  },
  dato() {
    return {
      ver: "b",
      iva: null,
      pagototal: null,
    };
  },

  methods: {
    //maneja poder salir de la pantalla evento
    closeModal() {
      this.$emit("closeModal");
    },
    Pago() {
      alert("PAGO REALIZADO");
    },
    calcularIVA() {
      // Aquí asumimos que el IVA es el 12%, puedes ajustar según tus necesidades.
      const ivaPorcentaje = 12;
      const total = parseFloat(this.form.dato.total);
      const iva2 = (total * ivaPorcentaje) / 100;
      this.iva = iva2.toFixed(2); // Ajusta el número de decimales según tu preferencia.
    },
    calcularTotalConIVA() {
      const total = parseFloat(this.form.dato.total);
      const iva = parseFloat(this.iva);
      const totalConIVA = total + iva;
      this.pagototal = totalConIVA.toFixed(2); // Ajusta el número de decimales según tu preferencia.
    },
  },
  created() {
    this.calcularIVA();
    this.calcularTotalConIVA();
  },
};
</script>

<style scoped>
body {
  display: grid;
  align-content: center;
  font-family: sans-serif;
  margin: 20px;
  padding: 10px;
}
.container1 {
  position: absolute;
  width: 400px;
  height: 500px;
  background-color: #e6e6e6;
  border-radius: 8px;
  font-family: "Times New Roman", Times, serif;
  box-shadow: 0px 0px 40px -10px #000;
  padding: 10px;
  margin-left: 40%;
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

.factura {
  font-family: Arial, sans-serif;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 10px;
  background: white;
}

header {
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 10px;
}

header h1 {
  font-size: 24px;
  margin: 0;
}

/* Comprobante */

.comprobante {
  border: 1px solid #ddd;
  padding: 20px;
}

.container {
  text-align: left;
  padding-left: 5%;
}

/* Tabla de productos */

.tabla-productos {
  width: 100%;
  border-collapse: collapse;
}

.tabla-productos th,
.tabla-productos td {
  background-color: #f2f2f2;
  text-align: center;
  padding: 5px;
  border: 1px solid #000;
}

.totales {
  border-top: 1px solid#ddd;
  padding-top: 10px;
}

.totales p {
  margin-bottom: 5px;
}

.tabla-productos caption {
  font-weight: bold;
  margin-bottom: 10px;
}
.container3 {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  margin: 20px 20px 20px 33%;
  padding: 30px;
  border-radius: 4px;
}

h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #333;
}
.checkdiv {
  display: flex;
}
</style>