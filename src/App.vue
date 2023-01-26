// .item.item${$}*3 // .item*3

<script setup>
  import Header from "./components/Header/Header.vue";
  import Articles from "./components/Articles/Articles.vue";
  import Campaigns from "./components/Campaigns/Campaigns.vue";
  import Footer from "./components/Footer.vue";
  import { useDarkMode } from "./stores/darkMode";
  import { ref } from "vue";

  const darkMode = ref(useDarkMode());
</script>

<template>
  <div class="sticky top-0 z-30 w-full">
    <Header />
  </div>
  <Articles />
  <div class="h-2 w-full bg-black dark:bg-white" />
  <Campaigns />
  <Footer />
</template>
