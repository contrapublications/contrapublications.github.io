// .item.item${$}*3 // .item*3

<script setup>
  import Header from "./components/Header/Header.vue";
  import Articles from "./components/Articles/Articles.vue";
  import Campaigns from "./components/Campaigns/Campaigns.vue";
  import Footer from "./components/Footer.vue";

</script>

<template>

  <div class="sticky top-0 z-30 w-full">
    <Header />
  </div>

  <Articles />
  <div class="h-2 w-full bg-black" />
  <Campaigns />
  <Footer />
</template>
