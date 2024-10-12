<template>
  <section class="flex flex-col py-24 dark:bg-opacity-60">
    <div class="self-center w-full max-w-[1320px] max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div class="flex flex-col max-w-full w-[652px]">
              <h1 class="text-6xl font-medium leading-[64px] text-zinc-900 dark:text-zinc-100 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                Find a job that suits your interest & skills.
              </h1>
              <p class="mt-6 text-lg leading-7 text-gray-500 dark:text-gray-400 max-md:max-w-full">
                Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
              </p>
            </div>
            <SearchForm class="mt-8 max-md:max-w-full" />
          </div>
        </div>
        <Statistics class="mt-24 max-md:mt-10" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SearchForm from './SearchForm.vue'
import Statistics from './Statistics.vue'
</script>
