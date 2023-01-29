// .item.item${$}*3 // .item*3

<script setup>
  import Header from "./components/Header/Header.vue";
  import Articles from "./components/Articles/Articles.vue";
  import Campaigns from "./components/Campaigns/Campaigns.vue";
  import Footer from "./components/Footer.vue";
  import { useDarkMode } from "./stores/darkMode";
  import { ref, onMounted, onBeforeUnmount } from "vue";

  const darkMode = ref(useDarkMode());
  const animClass = ref("wtf");

  onMounted(() => {
    setTimeout(function () {
      animClass.value = "hide";``
      console.log("WELCOME: Carolingian Royalty Registery");
    }, 3000);
  });

  onBeforeUnmount(() => {
    window.localStorage.clear()
  });
  

</script>

<template>
  <div class="sticky top-0 z-30 w-full">
    <Header />
  </div>

  <Articles />

  <div class="h-2 w-full bg-black dark:bg-white" />

  <Campaigns />

  <div class="bg-white dark:bg-black">
    <div :class="animClass">
      <div>
        <div class="logo_container">
          <img alt="flag" class="logo" src="./assets/contra_logo_white.svg" />
        </div>
      </div>
    </div>
    <Footer class="fixed bottom-0 z-30 w-full" />
  </div>
</template>

<style scoped>
  .logo {
    width: 30%;
  }
  .logo_container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .wtf {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
  }

  .wtf div {
    width: 100%;
    height: 100%;
    background: black;
    animation: up 3s ease-in forwards;
    transform: scaleY(0);
    /* background: rgb(211, 34, 3); */
  }

  @keyframes up {
    100% {
      transform-origin: top;
      /* transform: scaleY(0);*/
      transform: translateY(100%);
    }

    0% {
      transform-origin: bottom;
      /* transform: scaleY(1); */
      transform: translateY(-0%);
    }
  }

  .hide {
    visibility: hidden;
  }
</style>
