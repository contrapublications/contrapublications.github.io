<script setup>
  import Monoculture from "../Monoculture.vue";
  import Menu from "../Menu.vue";
  import MenuInfoBlock from "../MenuInfoBlock/MenuInfoBlock.vue";
</script>

<template>
  <header class="flex h-[120px] flex-row  border-r-2 border-border-black">

    <img class="w-60 self-end object-fill pl-2 pr-2" src="../../assets/contra_logo_black.svg" />

    <Monoculture class="w-30 border-l-2 border-border-black pl-2" />

    <div class="w-full place-self-end">
      <Menu class="" />
    </div>

    <MenuInfoBlock class="border-l-2 border-border-black pl-2 " />
  </header>

  <div class="h-2 flex w-full border-border-black place-content-center bg-black" />

</template>
