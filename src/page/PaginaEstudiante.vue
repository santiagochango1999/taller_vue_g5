<template>
  <div class="body">
    <cabecera />
    <InformacionBasica />
    <calendario/>
  </div>
</template>

<script>
import InformacionBasica from "@/components/InformacionBasica.vue";
import cabecera from "../components/cabezera.vue";
import calendario from "@/components/calendario.vue";

export default {
  components: {
    cabecera,
    InformacionBasica,
    calendario,
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
</style>