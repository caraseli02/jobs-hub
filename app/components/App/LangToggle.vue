<script setup lang="ts">
import { CheckIcon, LanguagesIcon } from 'lucide-vue-next'

const { locale, setLocale } = useI18n()

const languages = [
  { shortCode: 'en', name: 'English' },
  { shortCode: 'ro', name: 'Română' },
]
</script>

<template>
  <DropdownMenu v-if="languages">
    <DropdownMenuTrigger as-child>
      <Button
        class="py-2 px-3 uppercase"
        variant="ghost"
      >
        <LanguagesIcon class="w-5 h-5 lg:ml-2" />
        <span class="hidden lg:inline ml-2">{{ locale }}</span>
        <span class="sr-only">Toggle Locale</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      :collision-padding="{ top: 10, right: 20 }"
      align="start"
    >
      <DropdownMenuItem
        v-for="item in languages"
        :key="item.shortCode"
        :disabled="item.shortCode === locale"
        class="uppercase text-center flex justify-between cursor-pointer mx-1"
        @click="setLocale(item.shortCode)"
      >
        {{ item.name }}
        <CheckIcon
          v-if="item.shortCode === locale"
          class="w-4 h-4"
        />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
