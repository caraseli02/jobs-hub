<script setup>
import { MoreVertical, Code2Icon } from 'lucide-vue-next'

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
        responsibilities: [
          'Develops prospect lists and performs email outreach to prospective customers.',
          'Follow up with prospects to foster positive relationships & convert them to customers.',
          'Assists customer service with creating quotes & orders for significant leads.',
          'Creates spec samples for high potential prospects & customers.',
          'Tracks the progress of customers through our sales funnel & follows up appropriately.',
          'Assists high-value customers via phone & email as needed.',
          'Educates customers on our products and services using phone, webinars & screen sharing if necessary.',
          'Identifies opportunities to improve our service based on customer interactions.',
          'Performs other tasks as assigned by management.',
        ],
        qualities: [
          'Outstanding written and verbal communication skills',
          'Excellent phone etiquette',
          'Willing to learn and adaptable',
          'Interest in aviation and sales',
          'High attention to detail',
          'Confident individual',
          'Resilient',
          'Open to travel',
        ],
        skills: ['Sales', 'Marketing', 'Retail', 'Commerce'],
      })
    }, 100) // Simulate a 1 second API call delay
  })
}

const job = ref(null)

onMounted(async () => {
  job.value = await fetchJobDetails()
})
</script>

<template>
  <section
    class="md:container "
  >
    <div class="mb-16 w-full h-52 md:rounded-xl shadow bg-gradient-to-t from-indigo-500 via-purple-600 to-amber-200 relative">
      <div class="w-24 h-24 rounded-full bg-white dark:bg-black border flex items-center justify-center absolute -bottom-12 left-9">
        <Code2Icon class="h-10 w-10 " />
      </div>
    </div>
    <div
      v-if="job"
    >
      <section class="overflow-hidden border-none mx-6 md:mx-10">
        <div class="flex flex-row items-start mb-10">
          <div class="grid gap-0.5">
            <div class="flex items-center gap-4">
              <!-- <Avatar class="hidden h-10 w-10 sm:flex">
              <AvatarImage
                src="/avatars/01.png"
                alt="Avatar"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar> -->
              <div class="grid gap-1">
                <p class="text-3xl font-bold leading-none">
                  Front-end Developer
                </p>
                <p class="text-lg flex gap-2">
                  Facebook
                </p>
                <p class="text-muted-foreground">
                  Austin, TX / USA / Remote
                </p>
              </div>
            </div>
          </div>
          <div class="ml-auto flex flex-col justify-between items-end gap-1">
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
        </div>
        <section class="grid grid-cols-2 xl:grid-cols-3 gap-32">
          <div class="text-sm col-span-2">
            <div class="mb-6">
              <div class="text-lg font-semibold mb-2">
                Overview
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
            <div class="grid gap-3">
              <div class="font-semibold text-lg">
                Responsibilities
              </div>
              <ul class="list-disc pl-5 space-y-2">
                <li
                  v-for="(requirement, index) in job?.responsibilities"
                  :key="index"
                >
                  {{ requirement }}
                </li>
              </ul>
            </div>
            <Separator class="my-4" />
            <div class="grid gap-3">
              <div class="font-semibold text-lg">
                Qualities
              </div>
              <ul class="list-disc pl-5 space-y-2">
                <li
                  v-for="(requirement, index) in job?.qualities"
                  :key="index"
                >
                  {{ requirement }}
                </li>
              </ul>
            </div>
            <Separator class="my-4" />
            <div class="grid gap-3">
              <div class="font-semibold text-lg">
                Skills
              </div>
              <div class="flex gap-2">
                <Badge
                  v-for="(requirement, index) in job?.skills"
                  :key="index"
                  variant="secondary"
                  class="bg-slate-200 px-3 py-1.5"
                >
                  {{ requirement }}
                </Badge>
              </div>
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
          </div>
          <JobApplyCard />
        </section>
        <div class="flex flex-row items-center py-3">
          <div class="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">November 23, 2023</time>
          </div>
        </div>
      </section>
    </div>
    <div
      v-else
      class="mx-auto my-8 p-4 shadow-lg rounded-lg text-center flex gap-16 justify-between w-full"
    >
      <Skeleton class="w-[95vw] xl:w-[60vw] h-screen" />
      <Skeleton class="w-[30vw] h-screen hidden xl:block" />
    </div>
  </section>
</template>

<style>
/* Additional custom styles if needed */
</style>
