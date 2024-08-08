<script setup lang="ts">
import { MoonIcon, SunIcon, MonitorIcon } from 'lucide-vue-next'

const colorMode = useColorMode()

const setSelectedColorMode = (mode: string) => {
  colorMode.preference = mode
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        class="py-2 px-3"
        variant="ghost"
      >
        <component
          :is="
            {
              dark: MoonIcon,
              light: SunIcon,
              system: MonitorIcon,
            }[colorMode.preference]
          "
          class="h-5 w-5"
        />
        <!-- <span class="ml-2 capitalize hidden lg:inline">
          {{ $t(`color_mode_switcher.${colorMode.preference}`) }}
        </span> -->
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem @click="setSelectedColorMode('light')">
        <SunIcon class="h-[1.2rem] w-[1.2rem] mr-2" />
        {{ $t("color_mode_switcher.light") }}
      </DropdownMenuItem>
      <DropdownMenuItem @click="setSelectedColorMode('dark')">
        <MoonIcon class="h-[1.2rem] w-[1.2rem] mr-2" />
        {{ $t("color_mode_switcher.dark") }}
      </DropdownMenuItem>
      <DropdownMenuItem @click="setSelectedColorMode('system')">
        <MonitorIcon class="h-[1.2rem] w-[1.2rem] mr-2" />
        {{ $t("color_mode_switcher.system") }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style lang="postcss">
/* Tailwind classes for body are assumed to be defined in your Tailwind config */
body {
  @apply bg-white text-slate-800; /* Default */
}
.dark body {
  @apply bg-slate-950 text-slate-100; /* Dark mode using slate colors */
}
.sepia body {
  @apply bg-yellow-100 text-yellow-800; /* Sepia mode, adjust as necessary */
}
</style>
