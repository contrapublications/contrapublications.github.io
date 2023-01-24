<script setup>
  import $ from 'jquery';
  import { onMounted } from '@vue/runtime-core';
  import { ref } from "vue";
  import { useDarkMode } from "../../Stores/darkMode";

  const darkMode = ref(useDarkMode());  

  onMounted(() => {
    $('.openbtn').on('click', function () {
      $(this).toggleClass('active');
    });
  });
</script>

<template>
  <div v-if="darkMode.mode" class="openbtn">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div v-else class="openbtn white">
    <span></span>
    <span></span>
    <span></span>
  </div>

</template>


<style scoped>
  
  .white{
    background: white;
    
  }
  .openbtn {
    position: relative;
    cursor: pointer;
    width: 80px;
    height: 80px;
  }

  .openbtn span {
    display: inline-block;
    transition: all 0.4s;
    position: absolute;
    left: 14px;
    height: 3px;
    background: rgb(0, 0, 0);
    width: 50%;
  }
  .openbtn span:nth-of-type(1) {
    top: 15px;
  }
  .openbtn span:nth-of-type(2) {
    top: 23px;
  }
  .openbtn span:nth-of-type(3) {
    top: 31px;
  }

  .openbtn.active span:nth-of-type(1) {
    top: 18px;
    left: 18px;
    transform: translateY(6px) rotate(-45deg);
    width: 30%;
  }
  .openbtn.active span:nth-of-type(2) {
    opacity: 0;
  }
  .openbtn.active span:nth-of-type(3) {
    top: 30px;
    left: 18px;
    transform: translateY(-6px) rotate(45deg);
    width: 30%;
  }
</style>
