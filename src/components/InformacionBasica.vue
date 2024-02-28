<template>
  <div class="container">
    <div class="container2">
      <img src="../assets/imgHospital1.jpg" alt="" />
    </div>
    <div class="container3">
      <h1>Bienvenido</h1>
      <div>
        <h1>{{ datos.rol }}</h1>
        <h1>{{ datos.nombre }} {{ datos.apellido }}</h1>
      </div>

      <h2>Esperamos que tengas una exelente experiencia</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datos: {
      type: Object,
      require: false,
    },
  },
};
</script>

<style scoped>
.container {
  width: 1500px;
  height: 500px;
  display: grid;
  text-align: right;
  grid-template-columns: 70% 30%;
  margin: 20px;
  border-radius: 10px;
  background-color: #007c76;
  box-shadow: 15px 10px 5px 5px #00000033;
}
.container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #007c76;
}
.container3 {
  display: grid;
  grid-template-rows: 25% 50% 25%;
  background: rgb(37, 37, 37);
  color: white;
  align-items: center;
  padding: 20px; /* Agregar espacio interno para mejorar la apariencia */
  border-radius: 10px; /* Añadir esquinas redondeadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  text-align: center;
  transition: transform 0.3s ease;
}

h1,
h2 {
  margin: 0; /* Eliminar el margen predeterminado */
}

h1 {
  font-size: 2.5em; /* Tamaño de fuente más grande para 'Bienvenido' */
  font-weight: bold; /* Texto en negrita */
  color: #00ffcc; /* Color más llamativo */
}

h2 {
  font-size: 1.5em; /* Tamaño de fuente ligeramente más grande */
  opacity: 0.8; /* Reducir la opacidad para un aspecto más suave */
}

.container3:hover {
  transform: scale(
    1.05
  ); /* Hacer que el container3 sobresalga un poco al pasar el ratón */
}
img {
  border-radius: 5px;
  width: 1004px;
  height: 450px;
}
</style>