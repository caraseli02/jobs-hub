<script setup lang="ts">
import {
  BookOpenIcon,
  CalendarIcon,
  MusicIcon,
  RefreshCcwIcon,
  UsersIcon,
} from 'lucide-vue-next'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

defineProps<{ orientation?: 'vertical' | 'horizontal' }>()

const components: {
  translateKey: string
  href: string
  icon?: unknown
}[] = [
  {
    translateKey: 'scriptures',
    href: '/scriptures',
    icon: BookOpenIcon,
  },
  {
    translateKey: 'kirtans',
    href: '/docs/primitives/hover-card',
    icon: CalendarIcon,
  },
  {
    translateKey: 'readingPlans',
    href: '/docs/primitives/progress',
    icon: MusicIcon,
  },
  {
    translateKey: 'dictionary',
    href: '/docs/primitives/scroll-area',
    icon: RefreshCcwIcon,
  },
  {
    translateKey: 'biographies',
    href: '/docs/primitives/tabs',
    icon: UsersIcon,
  },
]
</script>

<template>
  <NavigationMenu
    class="items-start max-h-20"
    :orientation="orientation ? orientation : 'horizontal'"
  >
    <NavigationMenuList class="flex flex-col md:flex-row overflow-hidden">
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/"
          :class="navigationMenuTriggerStyle()"
        >
          {{ $t("menu.home") }}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<style scoped></style>
