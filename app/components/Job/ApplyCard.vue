<script setup>
import { MapPin, MailIcon, ClockIcon, ShoppingBagIcon, Calendar } from 'lucide-vue-next'

const items = [
  { title: 'career@workze.xyz', subtitle: 'Contact email', icon: MailIcon },
  { title: 'Remote', subtitle: 'Job Type', icon: ClockIcon },
  { title: 'Retails sales', subtitle: 'Job Category', icon: ShoppingBagIcon },
  { title: 'Aug 30, 2023', subtitle: 'Posted', icon: Calendar },
]
</script>

<template>
  <Card class="p-4 bg-transparent rounded-lg h-fit col-span-2 xl:col-span-1 w-full max-w-none">
    <CardHeader>
      <CardTitle>
        <div class="flex items-center space-x-2">
          <MapPin class="w-5 h-5" />
          <span class="text-sm font-semibold">Austin, TX</span>
        </div>
      </CardTitle>
      <CardDescription class="mt-2 text-xs text-muted-foreground">
        Please send us your detailed CV to apply for this job post
      </CardDescription>
    </CardHeader>
    <CardContent class="gap-6">
      <div class="mt-4 text-2xl font-bold">
        $118,000
      </div>
      <p class="mb-8 text-sm text-muted-foreground">
        Avg. salary
      </p>
      <section class="mt-4 flex flex-col gap-4">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex items-center space-x-4"
        >
          <Button
            size="icon"
            variant="secondary"
            class="rounded-full bg-slate-200"
          >
            <component
              :is="item.icon"
              class="w-4 h-4"
            />
          </Button>
          <div class="flex flex-col gap-1">
            <p class="text-sm font-medium leading-none">
              {{ item.title }}
            </p>
            <p class="text-xs text-muted-foreground">
              {{ item.subtitle }}
            </p>
          </div>
        </div>
      </section>
    </CardContent>
    <CardFooter>
      <Dialog>
        <DialogTrigger class="w-full">
          <Button class="w-full py-2 mt-4 text-white bg-black rounded-lg">
            Apply for this job
          </Button>
        </DialogTrigger>
        <DialogContent>
          <JobApplyForm />
        </DialogContent>
      </Dialog>
    </CardFooter>
  </Card>
</template>

<style scoped>
/* Add any additional styles if necessary */
</style>
