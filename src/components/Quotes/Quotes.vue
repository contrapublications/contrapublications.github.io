<script setup>
  import Quotes from "../../Data/quotes";

  import { ref, onMounted } from "vue";

  const rndInt = ref();
  const key = ref();
  const quote = ref();
  const by = ref();

  onMounted(() => {
    rndInt.value = Math.floor(Math.random() * Object.keys(Quotes.Quotes).length) + 1;
    console.log(`${rndInt.value}`);

    key.value = Object.keys(Quotes.Quotes)[rndInt.value - 1];
    console.log(`${key.value}`);

    quote.value = Object.values(Quotes.Quotes)[key.value - 1].quote;
    console.log(`${quote.value}`);

    by.value = Object.values(Quotes.Quotes)[key.value - 1].by;
    console.log(`${by.value}`);
  });
</script>

<template>
  <div class="flex h-full w-full items-end text-xl ">{{ quote }}</div>
  <div class="flex h-full w-full items-end text-lg">--{{ by }}</div>
</template>
console.log(object);