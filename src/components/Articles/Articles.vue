<script setup>
  import CoverImage from "./CoverImage.vue";
  import TheGrayZone from "./TheGrayZone.vue";
  import Cocoon from "./Cocoon.vue";
  import EyeCandy from "./EyeCandy.vue";
  import HorzLine from "./HorzLine.vue";

  import { useMedia } from "../../composables/useMedia";
  import { ref, computed } from "vue";

  import { useDarkMode } from "../../Stores/darkMode";

  const darkMode = ref(useDarkMode());
  const isMobile = useMedia("(max-width: 800px)");

  const layout = computed(() => {
    return isMobile.value ? "container-mobile" : "container-web";
  });
</script>

<template>
  
  <!-- Mobile -->
  <div v-if="isMobile" class="text-2xl">
    <div class="border-b border-border-black">
      <CoverImage />
    </div>

    <div class="w-full pl-8">
      <!-- top pad -->
      <div class="h-[25px]" />
      <TheGrayZone />
      <HorzLine />
      <Cocoon />
      <HorzLine />
      <EyeCandy />

      <!-- bottom pad -->
      <div class="h-[20px]" />
    </div>
  </div>

  <!-- Web -->
  <div v-else class="text-2xl">
    <div class="flex w-full border-t border-b border-r border-border-black">
      <div class="w-[242px] border-r border-border-black pl-8"></div>

      <div class="w-full border-r border-border-black pl-8">
        <!-- top pad -->
        <div class="h-[25px]" />
        <TheGrayZone />
        <HorzLine />
        <Cocoon />
        <HorzLine />
        <EyeCandy />

        <!-- bottom pad -->
        <div class="h-[20px]" />
      </div>

      <!-- imgae -->
      <div class="flex w-2/3 border-r border-border-black bg-black pl-8">
        <!-- <img class="object-contain" src="../../assets/COVID_4.png" alt="" /> -->
        <CoverImage />
      </div>
    </div>
  </div>
</template>
