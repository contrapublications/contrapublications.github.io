<script setup>
  const props = defineProps({
    title: String,
    imageLink: String,
    titleLink: String,
    subTitle: String,
    date: String
  });
</script>

<template>
  <div class="ml-10 mr-10 mt-10 flex w-80 flex-col dark:text-white hover-article">
    <img src=  "../../assets/kevin.png" />

    <div class="font-favorit-bold text-5xl tracking-tight">{{ title }}</div>
    <div class="">{{ subTitle }}</div>
    <div class="">{{ date }}</div>
  </div>
  
</template>
