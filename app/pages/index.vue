<template>
  <main class="flex flex-col gap-6">
    <LandingHeader />
    <LandingJobs />
  </main>
</template>

<script setup lang="ts">
onMounted(async () => {
  const images = await $fetch('/api/images')
  console.log(images)
})
</script>

<style scoped>

</style>
