<script setup>
  import CampaignItem from "./CampaignItem.vue";

  import Campaigns from "../../Data/campaigns";
  
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
  <div v-if="isMobile" class="text-2xl bg-white dark:bg-black">


    <div v-for="campaign in Campaigns.Campaigns">
      <CampaignItem 
      :title="campaign.title"
      :imageLink="imageLink"
      :titleLink="campaign.titleLink"
      :subTitle="campaign.subTitle"
      :date="campaign.date"
      />
    </div>
    
    <!-- <div class="m-0 flex flex-wrap place-content-center">
      <div class="border-l border-b border-black dark:border-white">
        <Kevin />
      </div>

      <div class="border-l border-b border-black dark:border-white">
        <Kevin />
      </div>
    </div> -->

  </div>

  <!-- Web -->
  <div v-else class="text-2xl  bg-white dark:bg-black">
    <div class="m-0 flex flex-wrap place-content-center">

      <div v-for="campaign in Campaigns.Campaigns">
      <CampaignItem 
      :title="campaign.title"
      :imageLink="imageLink"
      :titleLink="campaign.titleLink"
      :subTitle="campaign.subTitle"
      :date="campaign.date"
      />
      </div>

      <!-- <div class="border-l border-r border-black dark:border-white">
        <Kevin />
      </div> -->

      <!-- <div class="border-r border-black dark:border-white">
        <Kevin />
      </div> -->

    </div>
  </div>
</template>
