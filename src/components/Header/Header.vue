<script setup>
  import Monoculture from "../Monoculture.vue";
  import Menu from "../Menu.vue";
  import MenuInfoBlock from "../MenuInfoBlock/MenuInfoBlock.vue";
  import HamburgerButton from '../Header/HamburgerButton.vue'

  import { useMedia } from "../../composables/useMedia";
  import { ref, computed } from "vue";

  import { useDarkMode } from "../../Stores/darkMode";

  
  const darkMode = ref(useDarkMode())
  const isMobile = useMedia("(max-width: 800px)");

  const layout = computed(() => {
    return isMobile.value ? "container-mobile" : "container-web";
  });
</script>

<template>

  <!-- Mobile -->
  <div v-if="isMobile" class="text-2xl">

    <div class="flex flex-row h-30 w-full bg-white border-b border-r border-border-black">
      <HamburgerButton />
      <img class="w-80 justify-self-end self-end" src="../../assets/contra_logo_black.svg" alt=""/>
    </div>

  </div>

  <!-- Web -->
  <div v-else class="text-2xl y">
    <div class="flex h-[120px] flex-row border-r-2 border-border-black bg-white">
      <img class="w-60 self-end object-fill pl-2 pr-2" src="../../assets/contra_logo_black.svg" />

      <Monoculture class="w-30 border-l-2 border-border-black pl-2" />

      <div class="w-full place-self-end">
        <Menu class="" />
      </div>

      <MenuInfoBlock class="border-l-2 border-border-black pl-2" />
    </div>

    <div class="flex h-2 w-full place-content-center border-border-black bg-black" />
  </div>
</template>



