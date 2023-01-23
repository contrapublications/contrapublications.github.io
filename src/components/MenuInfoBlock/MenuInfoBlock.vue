<script setup>
  import DateTimeSlider from "./DateTimeSlider.vue";
  import { ref } from "vue";
</script>

<template>
  <div class="flex w-full flex-row">
    <DateTimeSlider class="items-start" />

    <img class="h-full w-[100px] place-content-center self-end bg-slate-900 object-contain" src="../../assets/publications.svg" alt="" />
  </div>
</template>
