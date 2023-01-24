<script setup>
  import DateTimeSlider from "./DateTimeSlider.vue";
  import { ref } from "vue";

  import { useDarkMode } from "../../Stores/darkMode";

  const darkMode = ref(useDarkMode());
</script>

<template>
  <div class="flex w-full flex-row">
    <DateTimeSlider class="items-start" />

    <img v-if="darkMode.mode" class="h-full w-[100px] place-content-center self-end bg-slate-900 object-contain" src="../../assets/publications_white.svg" alt="" />
    <img v-else class="h-full w-[100px] place-content-center self-end bg-white object-contain" src="../../assets/publications_black.svg" alt="" />
  </div>
</template>
