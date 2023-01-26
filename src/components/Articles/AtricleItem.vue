<script setup>
  const props = defineProps({
    column: String,
    title: String,
    author: String,
    twitterHandle: String,
    columnLink: String,
    authorLink: String,
    twitterHandleLink: String,
  });
</script>

<template>
  <a :href="columnLink">
    <div class="hover-article font-favorit-bold text-3xl underline underline-offset-4">{{ props.column }}</div>
  </a>

  <a :href="columnLink">
    <div class="hover-article font-favorit-bold text-5xl ">{{ title }}</div>
  </a>

  <div class="flex font-favorit-bold text-2xl">
    <a href="authorLink">
      <div class="hover-article pr-5">{{ author }}</div>
    </a>

    <a href="twitterHandleLink">
      <div class="hover-article">{{ twitterHandle }}</div>
    </a>
  </div>
</template>
