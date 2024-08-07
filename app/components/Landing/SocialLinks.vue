<template>
  <nav class="flex gap-4 items-center my-auto">
    <a
      v-for="link in socialLinks"
      :key="link.icon"
      :href="link.href"
      class="flex gap-2.5 justify-center items-center self-stretch px-1 my-auto w-8 h-8 bg-white rounded min-h-[32px]"
    >
      <img
        :src="link.icon"
        alt=""
        class="object-contain self-stretch my-auto w-5 aspect-square"
      >
    </a>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SocialLink {
  icon: string
  href: string
}

const socialLinks = ref<SocialLink[]>([
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eacdc90cb135edd8acbdf1897923e2f7bb9d1e4b4467d9356cb46177479281d3?apiKey=20497529553648aab918fa2d322ece87&&apiKey=20497529553648aab918fa2d322ece87',
    href: '#',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e91ca96547688324d9ab6f5c55ec8779b11160c9c847cc8b90b0d4a08b3e8e49?apiKey=20497529553648aab918fa2d322ece87&&apiKey=20497529553648aab918fa2d322ece87',
    href: '#',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5ec62e539ed568d0dafc57a9d9bedb08a575a62ad0f586def24800e43fab38aa?apiKey=20497529553648aab918fa2d322ece87&&apiKey=20497529553648aab918fa2d322ece87',
    href: '#',
  },
])
</script>
