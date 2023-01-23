<script setup>
  import { ref } from "vue";

  const foo = ref(true);

  function toggle() {
    foo.value = !foo.value;
  }
</script>

<template>
    
  <div class="m-0 grid h-11 grid-rows-3 p-0">
    <div class="m-0 flex w-20 place-content-center p-0">
      <div>
        <label class="switch">
          <input type="checkbox" @click="toggle" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  </div>

  <div class="m-0 flex w-20 place-content-center p-1 text-left font-favorit-bold text-base text-slate-700">
    <div v-if="foo">Light</div>
    <div v-else>Dark</div>
  </div>

</template>

<style scoped>
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: calc(60px / 2);
    height: calc(34px / 2);
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
    background-color: rgb(117, 117, 117);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: calc(26px / 2);
    width: calc(26px / 2);
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #000000;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(calc(26px / 2));
    -ms-transform: translateX(calc(26px / 2));
    transform: translateX(calc(26px / 2));
  }
</style>
