<script setup lang="ts">
import { CircleUser, LogInIcon, LogOutIcon } from 'lucide-vue-next'

const isAuthenticated = ref(false)
const { t } = useI18n()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="rounded-md"
      >
        <CircleUser class="h-5 w-5" />
        <span class="sr-only">{{ t("profile.toggleUserMenu") }}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>{{ t("profile.myAccount") }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <template v-if="isAuthenticated">
        <DropdownMenuItem>{{ t("profile.settings") }}</DropdownMenuItem>
        <DropdownMenuItem>{{ t("profile.support") }}</DropdownMenuItem>
        <DropdownMenuSeparator />
      </template>
      <DropdownMenuItem
        v-if="isAuthenticated"
        class="dark:text-slate-50"
        @click="isAuthenticated = !isAuthenticated"
      >
        <LogOutIcon class="w-5 h-5 mr-1" />
        {{ t("profile.logout") }}
      </DropdownMenuItem>
      <DropdownMenuItem
        v-if="!isAuthenticated"
        class="dark:text-slate-50"
      >
        <NuxtLink
          class="flex gap-1"
          to="/login"
        >
          <LogInIcon class="w-5 h-5" />
          {{ t("profile.logIn") }}
        </NuxtLink>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
