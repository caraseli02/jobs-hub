<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

defineProps<{ orientation?: 'vertical' | 'horizontal' }>()

const user = useSupabaseUser()
</script>

<template>
  <NavigationMenu
    class="items-start max-h-20"
    :orientation="orientation ? orientation : 'horizontal'"
  >
    <NavigationMenuList class="flex items-start flex-col md:flex-row overflow-hidden">
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/"
          :class="navigationMenuTriggerStyle()"
        >
          {{ $t("menu.home") }}
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem v-if="user">
        <NavigationMenuLink
          href="/dashboard"
          :class="navigationMenuTriggerStyle()"
        >
          {{ $t("menu.dashboard") }}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<style scoped></style>
