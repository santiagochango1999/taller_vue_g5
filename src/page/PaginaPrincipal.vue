<template>
  <div class="container">
    <div class="containerInicio">
      <div>
        <img id="imagen2" src="../assets/imglogo2.jpg" alt="no hay" />
      </div>
      <NavbarInicio/>
      <div class="containerButton">
        <button><router-link to="/seccion">INGRESAR </router-link></button>
        <button><router-link to="/registrar">REGISTRAR </router-link></button>
      </div>
    </div>

    <div class="containerimg">
      <img id="imagen1" src="../assets/imglogo_1.jpg" alt="no funciona" />
      <img id="imagen3" src="../assets/informacion.jpg" alt="no funciona" />
    </div>
  </div>
</template>

<script>
import NavbarInicio from '../components/NavbarInicio.vue';
// Importa el componente Navbar
export default {
  components: {
    NavbarInicio // Registra el componente Navbar
  }
};
</script>

<style scoped>
.container {
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: rgb(43, 104, 145);
  grid-template-rows: 20% 80%;
  border-bottom-right-radius: 60px;
}

#imagen2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 120px;
  border-bottom-right-radius: 60px;
}

.containerOpcion li {
  display: inline-block;
  margin: 20px;
  font: bold 18px verdana;
  color: rgb(255, 255, 255);
}
.containerOpcion {
  padding-right: 70px;
  padding-top: 15px;
}

.containerButton {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
  padding-right: 30px;
}
button {
  margin: 5px;
  background-color: rgb(255, 255, 255);
  font-size: 18px;
  border: none;
  border-radius: 6px;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
}
button:hover {
  background-color: rgb(43, 104, 145);
}
.containerInicio {
  width: 1500px;
  display: grid;
  text-align: right;
  grid-template-columns: 20% 60% 20%;
  /*     background-color: rgb(212, 237, 218);
 */
  border-radius: 10px;
  background-color: #007c76;
  box-shadow: 15px 10px 5px 5px #00000033;
}

/* imagenes movimiento o tiempos */
@keyframes moverImagen {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100%);
  }
  75% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.containerimg {
  position: relative;
  overflow: hidden;
}
#imagen1 {
  width: 100%;
  height: 730px;
  /* height: auto; */
  animation: moverImagen 20s linear infinite;
  animation-delay: 3s;

  padding-top: 30px;
  padding-bottom: 50px;
  border-bottom-right-radius: 180px;
}
#imagen3 {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 730px;
  animation: moverImagen 20s linear infinite;
  animation-delay: 3s;
  padding-top: 30px;
  padding-bottom: 50px;
  border-bottom-right-radius: 180px;
}
a{
    text-decoration: none;

}
</style>