<script setup lang="ts">
import { CircleUser, LogInIcon, ChevronDown } from "lucide-vue-next";

const isAuthenticated = ref(false);
const { t } = useI18n();
</script>

<template>
  <DropdownMenu v-if="isAuthenticated">
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="rounded-md">
        <CircleUser class="h-5 w-5" />
        <span class="sr-only">{{ t("profile.toggleUserMenu") }}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>{{ t("profile.myAccount") }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>{{ t("profile.settings") }}</DropdownMenuItem>
      <DropdownMenuItem>{{ t("profile.support") }}</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="isAuthenticated = !isAuthenticated">
        {{ t("profile.logout") }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <section v-else class="flex gap-2">
    <Button
      variant="ghost"
      class="rounded-md"
      @click="isAuthenticated = !isAuthenticated"
    >
      <LogInIcon class="h-5 w-5" />
      <span class="sr-only">{{ t("profile.toggleUserMenu") }}</span>
    </Button>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" size="icon" class="rounded-md">
          <ChevronDown class="h-5 w-5" />
          <span class="sr-only">{{ t("profile.toggleUserMenu") }}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{{ t("profile.createAccount") }}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="isAuthenticated = !isAuthenticated">
          {{ t("profile.logIn") }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </section>
</template>

<style scoped></style>
