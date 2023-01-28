<script setup>
  import MenuItems from "../Data/menuItems";
</script>

<template>
  <!-- <div class="flex flex-col text-base  text-black dark:text-white">
        <ul class=" flex">
            <li>
                <a class="dark:text-white border-r-2 border-black dark:border-white pr-5 pl-5"  href="http://contra.com"> Missions </a>
            </li>
            <li>
                <a class="dark:text-white border-r-2 border-black dark:border-white pr-5 pl-5" href="http://contra.com"> Columns </a>
            </li>
            <li>
                <a class="dark:text-white border-r-2 border-black dark:border-white pr-5 pl-5" href="http://contra.com"> About Us </a>
            </li>
            <li>
                <a class="dark:text-white border-r-2 border-black dark:border-white pr-5 pl-5" href="http://contra.com"> Contact </a>
            </li>
        </ul>
    </div> -->

  <div class="flex flex-col text-base text-black dark:text-white">
    <ul class="flex">
      <div v-for="menuItem in MenuItems.MenuItems">
        <li>
          <a class="border-r-2 border-black pr-5 pl-5 dark:border-white dark:text-white" :href="menuItem.titleLink"> {{ menuItem.title }} </a>
        </li>
      </div>
    </ul>
  </div>
</template>
