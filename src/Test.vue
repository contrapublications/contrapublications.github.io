<script setup>
  import { useDarkMode } from "./stores/darkMode";
  import HamburgerButton from "./components/Header/HamburgerButton.vue";
  //   import { useFontStore } from "./stores/font";

  import { ref} from "vue";
import Footer from "./components/Footer.vue";
  const darkMode = useDarkMode();
  //   const darkMode = useFontStore();

const goo = ref('')

function foo() {
  goo.value = "pp"
}

</script>

<template>
  <HamburgerButton  @click="foo"/>
  {{ goo  }}
  
</template>

