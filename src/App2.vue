<script setup>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  import { useMedia } from "./composables/useMedia.js";
  import { ref, computed, onMounted } from "vue";

  const isMobile = useMedia("(max-width: 768px)");
  const isLoading = ref(true);

  const layout = computed(() => {
    return isMobile.value ? "container-mobile" : "container-web";
  });

  const address = ref("");
</script>

<template>
  <div class="min-w-300">
    <div v-if="isMobile">
      <nav class="container flex justify-between px-4 py-8 mx-auto bg-white">
        <div>
          <!-- <h3 />class="text-2xl font-medium text-blue-500">LOGO</h3> -->
          <img src="../assets/contra_logo.svg" />
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
    </div>

    <div v-else>
      <nav class="container flex justify-between px-4 py-8 mx-auto bg-white">
        <div>
          <!-- <h3 class="text-2xl font-medium text-blue-500">LOGO</h3> -->
        </div>

        <div class="hidden space-x-8 lg:flex md:flex">
          <a href="#">Menu 1</a>
          <a href="#">Menu 2</a>
          <a href="#">Menu 3</a>
          <a href="#">Menu 4</a>
        </div>
      </nav>
    </div>
  </div>
  <Logo />
</template>
