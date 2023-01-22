<script setup>
  import Monoculture from "./components/Monoculture.vue";
  import Menu from "./components/Menu.vue";
//   import Slider from './components/MenuInfoBlock/slider.vue'
  import MenuInfoBlock from './components/MenuInfoBlock/MenuInfoBlock.vue'
</script>

<template>
  <!-- <div class="m-0 grid h-screen grid-cols-10 grid-rows-3 p-0"> -->
  <div class="m-0 grid h-80 grid-cols-10 grid-rows-3 p-0">

    <div class="col-span-1 row-span-3 flex border-2 border-gray-600 bg-slate-400">
      <div class="flex self-center">
        <Monoculture />
      </div>
    </div>

    <div class="col-span-6 row-span-3 flex border-2 border-gray-600 bg-slate-400">
      <div class="flex self-end">
      Two
      <Menu />
      </div>
    </div>

    <div class="col-span-3 row-span-3 flex border-2 border-gray-600 bg-slate-600">

      <div class="flex self-center w-full">
      <MenuInfoBlock />
      </div>
    </div>

  </div>
</template>
