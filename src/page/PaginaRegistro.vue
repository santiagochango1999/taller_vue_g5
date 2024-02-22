<template>
  <div class="body">
    <div class="container">
      <header>
        <h1>Bienvenidos</h1>
      </header>

      <form class="form">
        <img src="../assets/imgHospital1.jpg" alt="" />
        <h2>Registrarse</h2>
        <p type="Nombre:"><input v-model="nombre" type="text" /></p>
        <p type="Apellido:"><input v-model="apellido" type="text" /></p>
        <p type="Cedula:"><input v-model="cedula" type="text" /></p>
        <p type="Direccion:"><input v-model="direccion" type="text" /></p>
        <p type="Telefono:"><input v-model="telefono" type="text" /></p>
        <p type="Rol:">
          <select v-model="rol">
            <option value="estudiante">Estudiante</option>
            <option value="administrativo">Administrativo</option>
            <option value="externo">Externo</option>
          </select>
        </p>
        <p type="Fecha Nacimiento:">
          <input v-model="fechaNacimiento" type="date" />
        </p>
        <p type="Contraseña"><input v-model="contraseña" type="text" /></p>
        <button @click="insertar">Registrarse</button>
        <!-- Mensaje de registro exitoso -->
        <p v-if="registroExitoso" class="registro-exitoso">
          ¡Registro exitoso!
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import {
  insertarfachada,
  verificarCedulaExistentefachada,
} from "../helpers/clientePaciente.js";
export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: null,
      direccion: null,
      telefono: null,
      rol: null,
      fechaNacimiento: null,
      contraseña: null,
    };
  },
  methods: {
    async insertar() {
      if (
        this.nombre &&
        this.apellido &&
        this.cedula &&
        this.direccion &&
        this.telefono &&
        this.rol !== "" &&
        this.fechaNacimiento &&
        this.contraseña
      ) {
        if (this.cedula.length === 10 && this.telefono.length === 10) {
          if (this.contraseña.length >= 6) {
            const fechaFormateada = new Date(
              this.fechaNacimiento
            ).toISOString();
            const pacBody = {
              nombre: this.nombre,
              apellido: this.apellido,
              cedula: this.cedula,
              direccion: this.direccion,
              telefono: this.telefono,
              rol: this.rol,
              fechaNacimiento: fechaFormateada,
              contraseña: this.contraseña,
            };
            const cedulaExistente = await verificarCedulaExistentefachada(
              this.cedula
            );
            console.log("tercera fase" + cedulaExistente);
            if (cedulaExistente) {
              alert(
                "La cédula ya está registrada. No se puede volver a registrar."
              );
            } else {
              await insertarfachada(pacBody);
              // Registro exitoso
              alert(
                "SE A REGISTRADO CORRECTAMENTE"
              );
              this.resetearDatos();
            }
          } else {
            alert(
              "La cédula o el telefono debe tener exactamente 10 dígitos verificar."
            );
          }
        } else {
          alert(
            "La cédula o el telefono debe tener exactamente 10 dígitos verificar."
          );
        }
      } else {
        alert("Por favor, complete todos los campos antes de registrarse.");
      }
    },
    resetearDatos() {
      // Restablecer los valores de las variables
      this.nombre = null;
      this.apellido = null;
      this.cedula = null;
      this.direccion = null;
      this.telefono = null;
      this.rol = null;
      this.fechaNacimiento = null;
      this.contraseña = null;

      // Ocultar el mensaje de registro exitoso
      //me va a servir para modificar
    },
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

.container {
  display: grid;
  justify-content: center;
  align-items: center;
}

.form {
  align-items: center;
  width: 400px;
  height: 700px;
  background-color: #e6e6e6;
  border-radius: 8px;
  font-family: "Times New Roman", Times, serif;
  box-shadow: 0px 0px 40px -10px #000;
  padding: 10px;
}

img {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 404px;
  height: 700px;
  /* Asegura que la imagen ocupe todo el espacio disponible */
  /* Aplica un filtro de desenfoque a la imagen */
  opacity: 0.5;
  position: fixed;
}

h1 {
  padding-left: 50px;
  color: white;
  border-bottom: 3px solid #78788c;
}

h2 {
  width: 200px;
  margin: 10px 0px;
  font-size: 35px;
  position: relative;
}

p {
  position: relative;
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
  position: relative;
}

input:focus {
  border-bottom: 3px solid #78788c;
}

button {
  width: 125px;
  height: 40px;
  margin: 10px 120px;
  font-size: 20px;
  position: relative;
  border-radius: 20px;
  background-color: #ffffff;
}
select {
  width: 100%;
}
.registro-exitoso {
  color: green;
  font-weight: bold;
  position: relative;
}
</style>