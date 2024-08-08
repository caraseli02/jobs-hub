<script setup lang="ts"></script>

<template>
  <div
    class="scrollbar-thumb-rounded-full scrollbar-corner-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300"
  >
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style lang="postcss">
body {
@apply bg-slate-100 dark:bg-slate-900
}
</style>
