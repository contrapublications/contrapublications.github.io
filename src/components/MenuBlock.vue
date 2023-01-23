<script setup>
  import Menu from "./Menu.vue";
</script>

<template>


  <div class="m-0 grid w-full grid-cols-10 grid-rows-3 p-0">
    <div class="col-span-1 row-span-3">
      <pre class="h-full w-full self-baseline border-2 border-gray-600 text-left font-favorit-bold text-base leading-tight">
Monocultrue 
is 
Dead</pre
      >
    </div>

    <div class="col-span-7 row-span-3 h-full w-full border-2 border-gray-600 bg-slate-300">Menu</div>

    <div class="col-span-2 row-span-3 max-h-max self-end border-2 border-gray-600">
      <div class="m-0 grid w-full grid-cols-3 grid-rows-3 p-0">
        <div class="m-0 w-full self-end justify-self-end bg-slate-100 p-0 text-base">a test</div>
        <div class="row-span-2 m-0 w-full self-end justify-self-end bg-slate-200 p-0 text-base">a test</div>
        <div class="row-span-3 m-0 w-full self-end justify-self-end bg-slate-300 p-0 text-base">a test</div>
      </div>
    </div>
  </div>



</template>

<style scoped>
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
