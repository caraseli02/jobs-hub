<template>
  <div
    class="flex gap-5 items-center self-stretch p-5 my-auto bg-white dark:bg-gray-700 rounded-lg min-w-[240px]"
    :class="{ 'shadow-2xl': statistic.title === 'Companies' }"
  >
    <div
      class="flex gap-2.5 items-center self-stretch p-4 my-auto rounded h-[72px] w-[72px]"
      :class="statistic.bgColor"
    >
      <img
        loading="lazy"
        :src="statistic.icon"
        :alt="`${statistic.title} icon`"
        class="object-contain w-10 aspect-square"
      >
    </div>
    <div class="flex flex-col self-stretch my-auto w-[180px]">
      <div class="text-2xl font-medium leading-none text-zinc-900 dark:text-zinc-100">
        {{ statistic.value }}
      </div>
      <div class="mt-1.5 text-base text-gray-500 dark:text-gray-400">
        {{ statistic.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Statistic } from '@/types'

defineProps<{
  statistic: Statistic
}>()
</script>
