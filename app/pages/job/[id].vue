<template>
  <div
    v-if="job"
    class="max-w-[50vw] container"
  >
    <Card class="overflow-hidden">
      <CardHeader class="flex flex-row items-start bg-muted/50">
        <div class="grid gap-0.5">
          <div class="flex items-center gap-4">
            <Avatar class="hidden h-10 w-10 sm:flex">
              <AvatarImage
                src="/avatars/01.png"
                alt="Avatar"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div class="grid gap-1">
              <p class="text-sm font-medium leading-none">
                Front-end Developer
              </p>
              <p class="text-sm text-muted-foreground flex gap-2">
                at Facebook
                <Badge>Full-time</Badge>
                <Badge variant="destructive">TOP</Badge>
              </p>
            </div>
          </div>

          <CardDescription class="mt-4">
            November 23, 2023
          </CardDescription>
        </div>
        <div class="ml-auto flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button
                size="icon"
                variant="outline"
                class="h-8 w-8"
              >
                <MoreVertical class="h-3.5 w-3.5" />
                <span class="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent class="p-6 text-sm">
        <div class="mb-6">
          <div class="text-lg font-semibold mb-2">
            Job Description
          </div>
          <p>{{ job.description }}</p>
        </div>
        <Separator class="my-2" />
        <div class="grid gap-3">
          <div class="font-semibold text-lg">
            Requirements
          </div>
          <ul class="list-disc pl-5 space-y-2">
            <li
              v-for="(requirement, index) in job?.requirements"
              :key="index"
            >
              {{ requirement }}
            </li>
          </ul>
        </div>
        <Separator class="my-4" />
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">
            Desirable
          </h2>
          <ul class="list-disc pl-5 space-y-2">
            <li
              v-for="(desirable, index) in job.desirables"
              :key="index"
            >
              {{ desirable }}
            </li>
          </ul>
        </div>
        <Separator class="my-4" />
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">
            Benefits
          </h2>
          <ul class="list-disc pl-5 space-y-2">
            <li
              v-for="(benefit, index) in job.benefits"
              :key="index"
            >
              {{ benefit }}
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter class="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div class="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
        </div>
        <Pagination class="ml-auto mr-0 w-auto">
          <PaginationList class="gap-1">
            <PaginationPrev
              variant="outline"
              class="h-6 w-6"
            />
            <PaginationNext
              variant="outline"
              class="h-6 w-6"
            />
          </PaginationList>
        </Pagination>
      </CardFooter>
    </Card>
  </div>
  <div
    v-else
    class="max-w-4xl mx-auto my-8 p-4 bg-white shadow-lg rounded-lg text-center"
  >
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { MoreVertical } from 'lucide-vue-next'

// Mock API call
const fetchJobDetails = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        description: 'Vestar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people! Here at Vestar, we don’t just make websites, we create exceptional digital experiences that customers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level...',
        requirements: [
          'Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on',
          '3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications',
          'Experience with HTML, JavaScript, CSS, PHP, Symfony and/or Laravel',
          'Working regularly with APIs and Web Services (REST, GraphQL, SOAP, etc.)',
          'Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.',
          'Familiarity with version control and project management systems (e.g., Github, Jira)',
          'Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on',
          'Ambitious and hungry to grow your career in a fast-growing agency',
        ],
        desirables: [
          'Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations.',
          'Working knowledge of payment gateways',
          'API platform experience / Building restful APIs',
        ],
        benefits: [
          'Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your choice from the bar)',
          '28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional day off on your birthday',
          'Generous annual bonus',
          'Healthcare package',
          'Paid community days to volunteer for a charity of your choice',
          '£100 contribution for your own personal learning and development',
          'Free Breakfast on Mondays and free snacks in the office',
          'Access to Perkbox with numerous discounts plus free points from the company to spend as you wish',
          'Cycle 2 Work Scheme',
          'Brand new MacBook Pro',
          'Joining an agency on the cusp of exponential growth and being part of this exciting story.',
        ],
      })
    }, 1000) // Simulate a 1 second API call delay
  })
}

const job = ref(null)

onMounted(async () => {
  job.value = await fetchJobDetails()
})
</script>

<style>
/* Additional custom styles if needed */
</style>
