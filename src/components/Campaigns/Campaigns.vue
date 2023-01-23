<script setup>
  import Kevin from "./Kevin_campaign.vue";
  //   import HorzLine from "../Articles/HorzLine.vue";

  import { useMedia } from "../../composables/useMedia";
  import { ref, computed } from "vue";

  const isMobile = useMedia("(max-width: 800px)");

  const layout = computed(() => {
    return isMobile.value ? "container-mobile" : "container-web";
  });
</script>

<template>
  <!-- Mobile -->
  <div v-if="isMobile" class="text-2xl">
    <div class="m-0 flex flex-wrap place-content-center">
      <div class="border-l border-b border-border-black">
        <Kevin />
      </div>

      <div class="border-l border-b border-border-black">
        <Kevin />
      </div>
    </div>
  </div>

  <!-- Web -->
  <div v-else class="text-2xl">
    <div class="m-0 flex flex-wrap place-content-center">
      <div class="border-l border-r border-border-black">
        <Kevin />
      </div>

      <div class="border-r border-border-black">
        <Kevin />
      </div>
    </div>
  </div>
</template>
