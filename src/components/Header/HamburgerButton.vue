<script setup>
  import { onMounted } from '@vue/runtime-core';
  import $ from 'jquery';

  onMounted(() => {
    $('.openbtn').on('click', function () {
      $(this).toggleClass('active');
    });
  });
</script>

<template>
  <div class="openbtn">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>


<style scoped>
  /* ボタンの外側 */
  .openbtn {
    /* ボタン内側の基点となるためrelativeを指定 */
    position: relative;
    /* background: #57a2c7; */
    cursor: pointer;
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }

  /* ボタン内側 */
  .openbtn span {
    display: inline-block;
    transition: all 0.4s;
    /* アニメーションの設定 */
    position: absolute;
    left: 14px;
    height: 3px;
    border-radius: 2px;
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

  /* activeクラスが付与されると線が回転して×に */
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
