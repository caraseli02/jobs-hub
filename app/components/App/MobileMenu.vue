<script setup lang="ts">
import { Menu } from 'lucide-vue-next'

const isOpen = ref(false)
const route = useRoute()

watch(
  () => route.path,
  () => {
    isOpen.value = false // Close the sheet on route change
  },
  { deep: true },
)
</script>

<template>
  <Sheet v-model:open="isOpen">
    <SheetTrigger as-child>
      <Button
        variant="ghost"
        size="icon"
        class="shrink-0 md:hidden"
      >
        <Menu class="h-5 w-5" />
        <span class="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent
      class="flex flex-col gap-6 !px-0"
      side="left"
    >
      <div class="flex gap-2">
        <AppLangToggle />
        <AppThemeToggle />
      </div>
      <AppMenu orientation="vertical" />
    </SheetContent>
  </Sheet>
</template>
