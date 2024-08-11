<template>
  <nav class="flex gap-4 items-center justify-end w-full md:w-fit my-auto">
    <a
      v-for="(link, index) in socialLinks"
      :key="index"
      :href="link.href"
      class="flex gap-2.5 justify-center items-center self-stretch px-1 my-auto w-8 h-8 rounded min-h-[32px]"
    >
      <component
        :is="link.icon"
        class=" h-5 w-5 aspect-square"
      /></a>
    <Settings class=" h-5 w-5 aspect-square" />
  </nav>
</template>

<script setup lang="ts">
import { Facebook, Instagram, Globe, Settings } from 'lucide-vue-next'

interface SocialLink {
  icon: unknown
  href: string
}

const socialLinks = ref<SocialLink[]>([
  {
    icon: Globe,
    href: '#',
  },
  {
    icon: Facebook,
    href: '#',
  },
  {
    icon: Instagram,
    href: '#',
  },
])
</script>
