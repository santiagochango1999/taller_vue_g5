<template>
  <div class="container">
    <div class="containerInicio">
      <div>
        <img id="imagen2" src="../assets/imglogo2.jpg" alt="no hay" />
      </div>
      <NavbarInicio />
      <div class="containerButton">
        <button><router-link to="/seccion">INGRESAR </router-link></button>
        <button><router-link to="/registrar">REGISTRAR </router-link></button>
      </div>
    </div>

    <div class="cgeneral">
      <div class="card">
        <h1>Misión</h1>
        <p>
          Brindar atención especializada, con calidad, eficacia, eficiencia y calidez satisfaciendo las necesidades de
          salud
          integral, física, emocional y social de la población universitaria y público en general. Para lo cual contamos
          con
          una moderna infraestructura, tecnología de punta y personal altamente calificado de esta manera velamos por la
          buena salud de la comunidad universitaria.
        </p>
      </div>
      <div class="card">
        <h1>Visión</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio id velit ultricies pulvinar. Sed ac eros
          metus. Nam suscipit, nisl a venenatis posuere, augue eros auctor est, ac fermentum magna nisl ac risus.</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarInicio from '../components/NavbarInicio.vue';
export default {
  // Puedes agregar lógica aquí si es necesario
  components: {
    NavbarInicio
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 50%;
 
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

}


.card h2 {
  margin-bottom: 10px;
  color: #007bff;
  /* Color de título azul */
}


.cgeneral{
  display: flex;
  align-items: center;
  
  height: 100%;
  margin-bottom: 0%;
}

.container {
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: rgb(43, 104, 145);
  border-bottom-right-radius: 60px;
  width: 100%;
  height: 100%;
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

h1 {
  color: white;

}

p {
  color: white;
  font-size: medium;

  height: 100%;
}
</style>