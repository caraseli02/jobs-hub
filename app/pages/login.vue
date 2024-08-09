<script setup lang="ts">

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
            <Input
              id="password"
              type="password"
              required
            />
          </div>
          <Button
            type="submit"
            class="w-full"
          >
            Login
          </Button>
          <Button
            variant="outline"
            class="w-full"
          >
            Login with Google
          </Button>
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
