<script setup lang="ts">
import { CircleUser, LogInIcon, LogOutIcon } from 'lucide-vue-next'

const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error(error)
    return
  }

  await navigateTo('/login')
}

const email = computed(
  () => user.value?.app_metadata.email,
)
const { t } = useI18n()

const router = useRouter()
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
      <template v-if="user">
        <DropdownMenuItem>{{ email }}</DropdownMenuItem>
        <DropdownMenuItem @click="router.push('/dashboard')">
          {{ t("profile.dashboard") }}
        </DropdownMenuItem>
        <DropdownMenuItem>{{ t("profile.settings") }}</DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          class="dark:text-slate-50"
          @click="logout"
        >
          <LogOutIcon class="w-5 h-5 mr-1" />
          {{ t("profile.logout") }}
        </DropdownMenuItem>
      </template>
      <DropdownMenuItem
        v-if="!user"
        class="dark:text-slate-50"
        @click="router.push('/login')"
      >
        <div
          class="flex gap-1"
        >
          <LogInIcon class="w-5 h-5" />
          {{ t("profile.logIn") }}
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
