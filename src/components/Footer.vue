<script setup>
  import { useMedia } from "../composables/useMedia";
  import { ref, computed } from "vue";

  const isMobile = useMedia("(max-width: 800px)");

  const layout = computed(() => {
    return isMobile.value ? "container-mobile" : "container-web";
  });
</script>

<template>
  <!-- Mobile -->
  <div v-if="isMobile" class="text-2xl">
    <div class="bg flex h-20 w-full ">
      <div class="grid grid-rows-1 grid-cols-1">
        <img class="self-end  object-bottom w-20" src="../assets/contra_logo_white.svg" alt="" />
      </div>

      <div class="flex pl-10">
        <img class="w-10 place-items-center" src="../assets/substack-icon.svg" alt="" />
      </div>

      <div class="flex pl-5">
        <img class="w-12" src="../assets/twitter-color-icon.svg" alt="" />
      </div>

      <div class="flex pl-5">
        <img class="w-12" src="../assets/instagram-icon.svg" alt="" />
      </div>

      <!-- <div class="object-cover pl-10 pt-10 text-sm text-white">legal - disclaimers</div> -->
    </div>
  </div>

  <!-- Web -->
  <div v-else class="text-2xl">
    <div class="bg flex h-20 w-full">
      <div class="object-cover">
        <img class="h-20" src="../assets/contra_logo_white.svg" alt="" />
      </div>

      <div class="flex pl-[160px]">
        <img class="w-10 place-items-center" src="../assets/substack-icon.svg" alt="" />
      </div>

      <div class="flex pl-10">
        <img class="w-12" src="../assets/twitter-color-icon.svg" alt="" />
      </div>

      <div class="flex pl-10">
        <img class="w-12" src="../assets/instagram-icon.svg" alt="" />
      </div>

      <div class="object-cover pl-10 pt-10 text-sm text-white">legal - disclaimers</div>
    </div>
  </div>
</template>

<style scoped>
  .bg {
    background-color: #ff4b4c;
  }
</style>
