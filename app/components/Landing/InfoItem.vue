<template>
  <div class="flex gap-1 items-center">
    <component
      :is="icon"
      class="h-4 w-4"
    >
  </component>
  <span class="self-stretch my-auto">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: unknown
  text: string
}

defineProps<Props>()
</script>
