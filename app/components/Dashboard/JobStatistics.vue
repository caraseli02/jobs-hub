<script setup lang="ts">
import {
  TrendingDown,
  TrendingUp,
} from 'lucide-vue-next'

const router = useRouter()
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
    <Card class="sm:col-span-2">
      <CardHeader class="pb-3">
        <CardTitle>Jobs</CardTitle>
        <CardDescription class="max-w-lg text-balance leading-relaxed">
          Consult, edit and manage the Jobs you posted.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button @click="router.push('/dashboard/post')">
          Create New Job
        </Button>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader class="pb-2">
        <CardDescription>This Week Applications</CardDescription>
        <CardTitle class="text-3xl">
          +29
        </CardTitle>
      </CardHeader>
      <CardContent class="flex justify-between">
        <div class="text-sm text-muted-foreground">
          +25% from last week
        </div>
        <TrendingUp
          class="w-5 h-5"
        />
      </CardContent>
    </Card>
    <Card>
      <CardHeader class="pb-2">
        <CardDescription>This Month Applications</CardDescription>
        <CardTitle class="text-3xl">
          +129
        </CardTitle>
      </CardHeader>
      <CardContent class="flex justify-between">
        <div class="text-sm text-muted-foreground">
          -10% from last month
        </div>
        <TrendingDown
          class="w-5 h-5"
        />
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>

</style>
