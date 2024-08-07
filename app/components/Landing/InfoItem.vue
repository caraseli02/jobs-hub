<template>
  <div class="flex gap-1 items-center">
    <img
      :src="icon"
      :alt="text"
      class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
    >
    <span class="self-stretch my-auto">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  text: string
}

defineProps<Props>()
</script>
