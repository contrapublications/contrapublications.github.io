// .item.item${$}*3 
// .item*3

<script setup></script>

<template>
  <!-- <div class="w-full">
    <div class="container">
      <div class="b">test</div>
      <div class="b">1</div>
      <div class="b">1</div>

      <div class="b">test</div>
      <div class="b">1</div>
      <div class="b">1</div>

      <div class="b">test</div>
      <div class="b">1</div>
      <div class="b">1</div>

      <div class="b">test</div>
      <div class="b">1</div>
      <div class="b">1</div>
    </div>
  </div> -->

  <div class="w-full">
    <div class="grid grid-cols-10 grid-rows-10">
      <span class="bg-">1</span>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
      <div class="item">10</div>
      <div class="item">11</div>
      <div class="item">12</div>
      <div class="item">13</div>
      <div class="item">14</div>
      <div class="item">15</div>
      <div class="item">16</div>
      <div class="item">17</div>
      <div class="item">18</div>
      <div class="item">19</div>
      <div class="item">20</div>
    </div>
  </div>
</template>

<style>
  .b {
    border: solid 1px black;
    height: 100%;
  }
  .container {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 0.3fr 1fr 0.6fr;
    grid-template-rows: 0.1fr 0.01fr 1fr 0.02fr;
    font-size: cals(15px - 0.2rem);
    /* grid-template-rows: .4fr .1fr .6fr ; */
    /* max-width: 1vw; */
    height: 100vh;
  }

  .item {
    height: 100%;
  }
  /* .item {
    @apply  border-blue-gray-500 border-b-1 border-l-1 w-full ;
  } */
</style>
