<template>
  <div class="body">
    <div class="container">
      <div>
        <h1>Bienvenidos</h1>
      </div>

      <form class="form">
        <img src="../assets/imgHospital1.jpg" alt="" />
        <h2>LOGIN</h2>
        <p type="Cedula:">
          <input v-model="Cedula" type="text" placeholder="Ingrese la cedula" />
        </p>
        <p type="Contraseña:">
          <input
            v-model="Contraseña"
            type="text"
            placeholder="Ingrese la contraseña"
          />
        </p>
        <div class="buttoncontainer">
          <button id="button1" @click="iniciarPaciente">
            Ingreso Paciente
          </button>
          <button id="button2" @click="iniciarMedico">Ingreso Medico</button>
        </div>
        <button><router-link to="/registrar">Registrarse </router-link></button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  buscarFachada,
  verificarCedulaExistentefachada,
} from "../helpers/clientePaciente.js";
import {
  buscarMFachada,
  verificarCedulaExistenteMfachada,
} from "../helpers/clienteMedico.js";
export default {
  data() {
    return {
      Cedula: null,
      Contraseña: null,
    };
  },
  methods: {
    async iniciarPaciente() {
      if (this.Cedula && this.Contraseña) {
        const verifica = await verificarCedulaExistentefachada(this.Cedula);
        if (verifica) {
          const data = await buscarFachada(this.Cedula);
          if (this.Contraseña === data.contraseña) {
            this.$router.push(`/pacientes/${this.Cedula}`);
          } else {
            alert("la contraseña es INCORRECTA");
          }
        } else {
          alert(`No se encontro un Paciente con esta cedula:${this.Cedula}`);
        }
      } else {
        alert("Ingrese datos en la cedula o la contraseña del paciente");
      }
    },
     async iniciarMedico() {
      if (this.Cedula && this.Contraseña) {
        const verifica = await verificarCedulaExistenteMfachada(this.Cedula);
        if (verifica) {
          const data = await buscarMFachada(this.Cedula);
          if (this.Contraseña === data.contraseña) {
            this.$router.push(`/medicos/${this.Cedula}`);
          } else {
            alert("la contraseña es INCORRECTA");
          }
        } else {
          alert(`No se encontro un Medico con esta cedula:${this.Cedula}`);
        }
      } else {
        alert("Ingrese datos en la cedula o la contraseña del medico");
      }
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
.buttoncontainer {
  display: grid;
  grid-template-columns: repeat(2, 50%);
}
#button1 {
  right: 80px;
}
#button2 {
  right: 80px;
}

.form {
  align-items: center;
  width: 400px;
  height: 450px;
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
  width: 400px;
  height: 450px;
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
  margin-left: 90px;
  padding-bottom: 10px;
  width: 200px;
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
  height: 60px;
  margin: 10px 120px;
  font-size: 20px;
  position: relative;
  border-radius: 20px;
  background-color: #ffffff;
}
a {
  text-decoration: none;
  color: #000000;
}
button:hover {
  background: #d2d1d1;
}
</style>