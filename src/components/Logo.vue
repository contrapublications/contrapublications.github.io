<script setup>
  //   import Menu from "./Menu.vue";

  import { ref } from "vue";

  const props = defineProps({
    isMobile: String,
  });
</script>

<template>
  <div v-if="isMobile == 'container-mobile'">
    <img
      class="max-h-15"
      src="../assets/contra_logo_black.svg"
    />
  </div>

  <div v-else>
    <img
      class="max-h-15"
      src="../assets/contra_logo_black.svg"
    />
  </div>
</template>
