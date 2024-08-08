<script setup lang="ts">
import { Search, XIcon } from 'lucide-vue-next'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const smallerThanMD = breakpoints.smaller('md')

const showSearch = ref(false)
</script>

<template>
  <form
    class="ml-auto mr-2 w-full flex gap-2"
    :class="{
      'absolute top-4 left-0 w-full px-2 bg-slate-950':
        showSearch && smallerThanMD,
    }"
  >
    <div
      v-if="showSearch"
      :class="{ 'w-full': showSearch && smallerThanMD }"
      class="relative"
    >
      <Search class="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        class="pl-8 w-full"
        :class="{ 'w-full': showSearch && smallerThanMD }"
      />
    </div>
    <Button
      v-if="showSearch"
      size="icon"
      variant="ghost"
      @click="showSearch = !showSearch"
    >
      <XIcon class="w-5 h-5" />
    </Button>
    <Button
      v-else
      size="icon"
      variant="ghost"
      @click="showSearch = !showSearch"
    >
      <Search class="w-5 h-5" />
    </Button>
  </form>
</template>

<style scoped></style>
