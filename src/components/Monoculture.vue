<script setup>
import { ref} from "vue";
import { useDarkMode } from "../Stores/darkMode";

const darkMode = ref(useDarkMode());

</script>

<template>

    <div class="flex h-full">
      <img v-if="darkMode.mode" class="w-80 " src="../assets/monoculture_black.svg" alt="" />
      <img v-else class="w-80 " src="../assets/monoculture_white.svg" alt="" />
    </div>
    

</template>


