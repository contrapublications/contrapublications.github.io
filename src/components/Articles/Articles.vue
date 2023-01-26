<script setup>
  import CoverImage from "./CoverImage.vue";
  import AtricleItem from "./AtricleItem.vue";
  
  import Columns from "../../Data/columns";

  import { useMedia } from "../../composables/useMedia";
  import { ref, computed } from "vue";

  import { useDarkMode } from "../../Stores/darkMode";

  const darkMode = ref(useDarkMode());
  const isMobile = useMedia("(max-width: 800px)");

  const layout = computed(() => {
    return isMobile.value ? "container-mobile" : "container-web";
  });

</script>

<template>
  <!-- Mobile -->
  <div v-if="isMobile" class="text-2xl">
    <div class="border-b border-black dark:border-white dark:bg-black">
      <CoverImage />
    </div>

    <div class="w-full pl-8 dark:bg-black dark:text-white">

      <div class="w-full border-r border-black pl-8 dark:border-white dark:bg-black dark:text-white">
        <div v-for="columns in Columns.Columns">
          <!-- top pad -->
          <div class="h-[25px]" />

          <AtricleItem :column="columns.column" :columnLink="columns.columnLink" :title="columns.title" :author="columns.author" :authorLink="columns.authorLink" :twitterHandle="columns.twitterHandle" :twitterHandleLink="columns.twitterHandleLink" />

          <!-- bottom pad -->
          <div class="h-[20px]" />
        </div>

      </div>

    </div>
  </div>

  <!-- Web -->
  <div v-else class="text-2xl">
    <div class="flex w-full border-t border-b border-r border-black dark:border-white">
      <div class="w-[242px] border-r border-black pl-8 dark:border-white dark:bg-black"></div>

      <div class="w-full border-r border-black pl-8 dark:border-white dark:bg-black dark:text-white">
        <div v-for="columns in Columns.Columns">
          <!-- top pad -->
          <div class="h-[25px]" />

          <AtricleItem :column="columns.column" :columnLink="columns.columnLink" :title="columns.title" :author="columns.author" :authorLink="columns.authorLink" :twitterHandle="columns.twitterHandle" :twitterHandleLink="columns.twitterHandleLink" />

          <!-- bottom pad -->
          <div class="h-[20px]" />
        </div>

      </div>

      <!-- imgae -->
      <div class="flex w-2/3 border-r border-black bg-black pl-8 dark:border-white dark:bg-white">
        <CoverImage />
      </div>
    </div>
  </div>
</template>
