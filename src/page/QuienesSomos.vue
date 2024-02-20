<template>
  <div class="container">
    <div class="card">
      <h2>Visión</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio id velit ultricies pulvinar. Sed ac eros metus. Nam suscipit, nisl a venenatis posuere, augue eros auctor est, ac fermentum magna nisl ac risus.</p>
    </div>
    <div class="card">
      <h2>Misión</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio id velit ultricies pulvinar. Sed ac eros metus. Nam suscipit, nisl a venenatis posuere, augue eros auctor est, ac fermentum magna nisl ac risus.</p>
    </div>
  </div>
</template>

<script>
export default {
  // Puedes agregar lógica aquí si es necesario
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa; /* Color de fondo más claro */
  padding: 20px;
}
.card {
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
.card h2 {
  margin-bottom: 10px;
  color: #007bff; /* Color de título azul */
}
.card p {
  margin: 0;
}
.navigation ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.navigation li {
  margin-right: 20px;
}
.navigation li:last-child {
  margin-right: 0;
}
.navigation li a {
  text-decoration: none;
  color: #007bff; /* Color de enlace azul */
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;
}
.navigation li a:hover {
  color: #0056b3; /* Color de enlace azul más oscuro al pasar el mouse */
}
</style>