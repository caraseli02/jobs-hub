<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);

const mdAndLarger = breakpoints.greaterOrEqual("md"); // sm and larger
</script>

<template>
  <section class="flex items-center justify-between min-h-14 relative z-50 container">
    <AppMenu class="hidden md:block" />
    <AppMobileMenu />
    <div class="flex gap-2">
      <AppLangToggle v-if="mdAndLarger" />
      <AppThemeToggle v-if="mdAndLarger" />
      <AppProfile />
    </div>
  </section>
</template>

<style scoped></style>
