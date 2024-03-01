<template>
  <div class="containerOpcion">
      <router-link to="/">Inicio</router-link>
      <router-link to="/quienes-somos">Quines Somos</router-link>
      <router-link to="/Documentos">Documentos</router-link>
     
  </div>
</template>

<script>
export default {
  // Puedes agregar lógica aquí si es necesario
};
</script>

<style scoped>
.containerOpcion{
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
a{
  height: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;
  padding: 10px 30px;
  border: solid 1px white;
  margin: 0px 20px;
  background: white;
  border-radius: 6px;
  color: rgb(56, 119, 160);
  text-decoration: none;
   transition: transform 0.3s ease;
}
a:hover{
transform: scale(1.05);
}
</style>