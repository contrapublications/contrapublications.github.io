<script setup>
  import Monoculture from "../Monoculture.vue";
  import Menu from "../Menu.vue";
  import MenuInfoBlock from "../MenuInfoBlock/MenuInfoBlock.vue";
  import HamburgerButton from "../Header/HamburgerButton.vue";

  import { useMedia } from "../../composables/useMedia";
  import { ref, computed } from "vue";
  import { useDarkMode } from "../../Stores/darkMode";

  const darkMode = ref(useDarkMode());
  const isMobile = useMedia("(max-width: 800px)");

  const layout = computed(() => {
    return isMobile.value ? "container-mobile" : "container-web";
  });

  const goo = ref('')

</script>

<template>

  <!-- Mobile -->
  <div v-if="isMobile" class="text-2xl" >
    <div  class="h-30 flex w-full flex-row border-b border-r border-border-black bg-white dark:bg-black">
      <HamburgerButton  />
      <img v-if="darkMode.mode" class="w-80 self-end justify-self-end" src="../../assets/contra_logo_black.svg" alt="" />
      <img v-else class="w-80 self-end justify-self-end" src="../../assets/contra_logo_white.svg" alt="" />

      <div>
        {{ goo }}    
      </div>

    </div>
  </div>

  <!-- Web -->
  <div v-else class="y text-2xl">
    <div class="flex h-[120px] flex-row border-r-2 border-border-black bg-white dark:bg-black dark:text-white">

      <img v-if="darkMode.mode" class="w-60 self-end object-fill pl-2 pr-2" src="../../assets/contra_logo_black.svg" />
      <img v-else class="w-60 self-end object-fill pl-2 pr-2" src="../../assets/contra_logo_white.svg" />

      <Monoculture class="w-30 border-l-2 border-border-black pl-2" />

      <div class="w-full place-self-end">
        <Menu class="" />
      </div>

      <MenuInfoBlock class="border-l-2 border-border-black pl-2" />
    </div>

    <div class="flex h-2 w-full place-content-center border-border-black bg-black dark:bg-white" />
  </div>
</template>
