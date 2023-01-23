<script setup>
  import { useDarkMode } from "./stores/darkMode";
  //   import { useFontStore } from "./stores/font";

  const darkMode = useDarkMode();
  //   const darkMode = useFontStore();
</script>

<template>
  <div class="flex-col flex">
    <!-- {{ darkMode }} -->
    {{ darkMode.mode }}
    <button class="button" @click="darkMode.toggle()">click</button>
  </div>

  
</template>

<style scoped>
  .button {
    background-color: aqua;
    color: red;
  }
</style>
