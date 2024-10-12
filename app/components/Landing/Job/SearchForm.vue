<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col">
    <div class="flex flex-wrap gap-3 items-center p-3 text-base bg-white dark:bg-gray-700 rounded-lg border border-solid shadow-2xl border-zinc-200 dark:border-zinc-600 max-md:max-w-full">
      <div class="flex flex-wrap justify-center items-center self-stretch my-auto text-gray-400 dark:text-gray-300 min-w-[240px] max-md:max-w-full">
        <div class="flex gap-3 self-stretch px-5 py-4 my-auto w-72 bg-white dark:bg-gray-700 rounded-md min-w-[240px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fe6c3227367930b00234f44b10bc46e439bdaa4ecc43e264223ce0bfdb28eac?placeholderIfAbsent=true&apiKey=20497529553648aab918fa2d322ece87" alt="" class="object-contain shrink-0 w-6 aspect-square" />
          <input
            type="text"
            id="jobTitle"
            v-model="jobTitle"
            placeholder="Job tittle, Keyword..."
            class="basis-auto bg-transparent dark:text-white"
            aria-label="Job title or keyword"
          />
        </div>
        <div class="shrink-0 self-stretch my-auto w-0 h-8 border border-solid bg-zinc-200 dark:bg-zinc-600 border-zinc-200 dark:border-zinc-600"></div>
        <div class="flex gap-3 self-stretch px-5 py-4 my-auto w-56 bg-white dark:bg-gray-700 rounded-md">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c65ae5431bedc84c3b190008148325aa0ea3c58d04f3c1ae210df2666845f20d?placeholderIfAbsent=true&apiKey=20497529553648aab918fa2d322ece87" alt="" class="object-contain shrink-0 w-6 aspect-square" />
          <input
            type="text"
            id="location"
            v-model="location"
            placeholder="Your Location"
            class="basis-auto bg-transparent dark:text-white"
            aria-label="Your location"
          />
        </div>
      </div>
      <button type="submit" class="gap-3 self-stretch px-8 py-4 my-auto font-semibold text-white capitalize bg-blue-700 rounded max-md:px-5">
        Find Job
      </button>
    </div>
    <div class="flex items-start self-start mt-6 text-sm leading-none text-center text-neutral-600 dark:text-neutral-400 max-md:max-w-full">
      <span class="text-gray-400 dark:text-gray-500">Suggestion:</span>
      <span>Designer,</span>
      <span>Programing,</span>
      <span class="font-medium text-blue-700 dark:text-blue-500">Digital Marketing,</span>
      <span>Video,</span>
      <span>Animation.</span>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const jobTitle = ref('');
const location = ref('');

const handleSubmit = () => {
  console.log('Form submitted', { jobTitle: jobTitle.value, location: location.value });
};
</script>
