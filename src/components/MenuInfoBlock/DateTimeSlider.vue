<script setup>
  import Slider from "./slider.vue";
  import Quotes from "../Quotes/Quotes.vue";
  import { ref, defineEmits } from "vue";

  const currentDate = new Date();
  const cDay = currentDate.getDate();
  const cMonth = currentDate.getMonth() + 1;
  const cYear = currentDate.getFullYear();
  const cHours = currentDate.getHours();
  const cMinutes = currentDate.getMinutes();
  const cSeconds = currentDate.getSeconds();

  const date = ref(` ${cDay}.${cMonth}.${cYear}`);
  const time = ref(` ${cHours}:${cMinutes}:${cSeconds}`);
</script>

<template>
  <div class="h-fulll flex w-full flex-col">
    <div class="h-fulll flex w-full flex-row">
      <div class="flex w-full flex-row">
        <div class="mr-3 font-favorit-mono text-xl">
          {{ time }}
        </div>
        <img class="mr-5 w-10" src="../../assets/Arg_flag.svg" alt="" />

        <div class="mr-10 font-favorit-mono text-sm">
          {{ date }}
        </div>
        <Slider class="mr-10" />
      </div>
    </div>

    <Quotes />
    <!-- <div class="h-full flex w-full  bg-slate-700 p-3 items-end">
  "Some Intresting relevant Quote!"
  </div> -->
  </div>
</template>

<style scoped>
  .sm-text {
    font-size: x-small;
  }
</style>
