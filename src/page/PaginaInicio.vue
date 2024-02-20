<template>
  <div class="container">
    <div class="image-container">
      <img v-bind:src="currentImage" v-bind:alt="currentAlt" class="image" :key="currentIndex" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require('@/assets/imglogo_1.jpg'), alt: 'Imagen 1 no funciona' },
        { src: require('@/assets/informacion.jpg'), alt: 'Imagen 2 no funciona' }
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex].src;
    },
    currentAlt() {
      return this.images[this.currentIndex].alt;
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // Cambia de imagen cada 5 segundos
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>
<style scoped>
.container {
  display: grid;
  place-items: center;
  background-color: rgb(43, 104, 145);
  padding: 20px;
  border-bottom-right-radius: 60px;
}
.image-container {
  max-width: 1000px;
}
.image {
  width: 100%;
  height: auto;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out; /* Añadimos transición de opacidad */
}
.image-enter-active, .image-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.image-enter, .image-leave-to {
  opacity: 0;
}
</style>