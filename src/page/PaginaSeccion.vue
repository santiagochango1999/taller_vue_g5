<template>
<div class="body">
 <div class="container">
        <header>
            <h1>Bienvenidos</h1>
        </header>

        <form class="form" >
            <img src="../assets/imgHospital1.jpg" alt="">
            <h2>LOGIN</h2>
            <p type="Cedula:"> <input type="text"> </p>
            <p type="Contraseña:"><input type="text"></p>
            <button>Ingresar </button>
            <button><router-link to="/registrar">Registrarse </router-link></button>
        </form>

    </div>
</div>
</template>

<script>
export default {

}
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
  height: 40px;
  margin: 10px 120px;
  font-size: 20px;
  position: relative;
  border-radius: 20px;
  background-color: #ffffff;
}
</style>