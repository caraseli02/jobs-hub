<script setup lang="ts">
import { Eye, EyeOff, LoaderIcon } from 'lucide-vue-next'
import type { Database } from '~~/utils/database.types'
import { useToast } from '~/components/ui/toast'

const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const { query } = useRoute()
watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    })
  }
})

const { toast } = useToast()
const login = async () => {
  isLoading.value = true
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    toast({
      title: 'Error',
      description: '' + error,
      variant: 'destructive',
    })
  }
  isLoading.value = false
}

const showPassword = ref(false)
</script>

<template>
  <div class="w-full lg:grid lg:grid-cols-2 container min-h-[calc(100vh-150px)]">
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">
            Login
          </h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              v-model="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a
                href="/forgot-password"
                class="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </a>
            </div>
            <div class="relative">
              <Input
                id="password"
                v-model="password"

                :type="showPassword ? 'text' : 'password'"
                required
              />
              <component
                :is="showPassword? EyeOff : Eye"
                v-if="password"
                class="w-5 h-5 absolute right-3 top-3 cursor-pointer"
                @click="showPassword =!showPassword"
              />
            </div>
          </div>
          <Button
            type="submit"
            class="w-full"
            :disabled="isLoading"
            @click="login"
          >
            {{ isLoading ? 'Loading...': 'Login' }}
            <LoaderIcon
              v-if="isLoading"
              class=" animate-spin ml-2"
            />
          </Button>
          <!-- <Button
            variant="outline"
            class="w-full"
          >
            Login with Google
          </Button> -->
        </div>
      </div>
    </div>
    <div class="hidden bg-muted lg:block clip">
      <img
        src="https://picsum.photos/1920/1080"
        alt="Image"
        width="1920"
        height="1080"
        class="rounded-lg h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      >
    </div>
  </div>
</template>

<style scoped>
.clip {
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
}
</style>
