<template>
  <div class="flex flex-wrap gap-6 justify-between items-center w-full max-md:px-5 max-md:max-w-full">
    <StatisticCard
      v-for="stat in statistics"
      :key="stat.title"
      :statistic="stat"
    />
  </div>
</template>

<script setup lang="ts">
import StatisticCard from './StatisticCard.vue'
import type { Statistic } from '@/types'

const statistics: Statistic[] = [
  {
    title: 'Live Job',
    value: '1,75,324',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d699aee846a340e32e4d9e013f6135e46c6bf29071762d01f1d66b68e85d63c4?placeholderIfAbsent=true&apiKey=20497529553648aab918fa2d322ece87',
    bgColor: 'bg-sky-100 dark:bg-sky-800',
  },
  {
    title: 'Companies',
    value: '97,354',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/04332493a0bf38070c4840638031e1a5abf79306712202dc0930a6698af66abf?placeholderIfAbsent=true&apiKey=20497529553648aab918fa2d322ece87',
    bgColor: 'bg-blue-700 dark:bg-blue-900',
  },
  {
    title: 'Candidates',
    value: '38,47,154',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fbd6465c6097de26072ab8f49be16fa4f81b38194755e67dab093efce402b7c5?placeholderIfAbsent=true&apiKey=20497529553648aab918fa2d322ece87',
    bgColor: 'bg-sky-100 dark:bg-sky-800',
  },
  {
    title: 'New Jobs',
    value: '7,532',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/11d181e128ce0ab2f226829d828d873ab78e5f1d400ffc6d3e24c5fbd5cd94bb?placeholderIfAbsent=true&apiKey=20497529553648aab918fa2d322ece87',
    bgColor: 'bg-sky-100 dark:bg-sky-800',
  },
]
</script>
