<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { useMedia } from './composables/useMedia.js'
import { ref, computed, onMounted } from 'vue'


const isMobile = useMedia("(max-width: 650px)")
const isLoading = ref(true)

const layout = computed(() => {
  return isMobile.value ? "container-mobile" : "container-web"
})

const address = ref('')

</script>

<template>
    <Header />

    <div class="container">
        <div class="black"> test One </div>
        <div class="black"> test Two </div>
    </div>

    <Footer />
</template>

<style scoped>
.black {
    color: black;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgb(251, 250, 208);
    height: 100vh;
    width: 100vw;
}
</style>