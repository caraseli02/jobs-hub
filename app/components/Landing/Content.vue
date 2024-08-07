<script setup lang="ts">
import {
  File,
  ListFilter,
  MapPinIcon,
} from 'lucide-vue-next'
import { cn } from '../../lib/utils'

const jobPostings = [
  {
    id: '1a2b3c',
    created_at: '2024-08-01T12:00:00Z',
    company: {
      id: 'comp123',
      name: 'Tech Corp',
      description: 'A leading tech company specializing in innovative solutions.',
      logo: 'https://picsum.photos/seed/techcorp/50/50', // Logo placeholder
      cover: 'https://picsum.photos/seed/techcorp-cover/800/200', // Cover placeholder
      admin_id: 'admin123',
    },
    title: 'Front-end Developer',
    description: 'We are looking for a talented front-end developer with experience in Vue.js and Nuxt.js.',
    work_type: 'Full-time',
    status: 'Open',
    locations: 'Remote',
    industry: 'Technology',
    tags: ['JavaScript', 'Vue.js', 'Nuxt.js', 'Front-end'],
  },
  {
    id: '4d5e6f',
    created_at: '2024-07-28T09:30:00Z',
    company: {
      id: 'comp456',
      name: 'Health Solutions',
      description: 'Pioneers in healthcare technology and solutions.',
      logo: 'https://picsum.photos/seed/healthsolutions/50/50', // Logo placeholder
      cover: 'https://picsum.photos/seed/healthsolutions-cover/800/200', // Cover placeholder
      admin_id: 'admin456',
    },
    title: 'Back-end Developer',
    description: 'Join our team to build scalable and robust back-end systems.',
    work_type: 'Part-time',
    status: 'Open',
    locations: 'New York, NY',
    industry: 'Healthcare',
    tags: ['Node.js', 'Express', 'Backend'],
  },
  {
    id: '7g8h9i',
    created_at: '2024-08-03T15:45:00Z',
    company: {
      id: 'comp789',
      name: 'Finance Innovations',
      description: 'Revolutionizing financial services with cutting-edge technology.',
      logo: 'https://picsum.photos/seed/financeinnovations/50/50', // Logo placeholder
      cover: 'https://picsum.photos/seed/financeinnovations-cover/800/200', // Cover placeholder
      admin_id: 'admin789',
    },
    title: 'Data Scientist',
    description: 'Analyze and interpret complex data to help drive business decisions.',
    work_type: 'Contract',
    status: 'Open',
    locations: 'San Francisco, CA',
    industry: 'Finance',
    tags: ['Python', 'Data Analysis', 'Machine Learning'],
  },
]
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40 container">
    <div class="flex flex-col sm:gap-4 sm:py-4">
      <div class="flex items-center shadow border bg-white rounded-lg px-1 py-2">
        <div class="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button
                variant="outline"
                size="sm"
                class="h-7 gap-1 rounded-md px-3"
              >
                <ListFilter class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div class="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <label
                    for="terms2"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Fulfilled
                  </label>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div class="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <label
                    for="terms2"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Declined
                  </label>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div class="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <label
                    for="terms2"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Refunded
                  </label>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            size="sm"
            class="h-7 gap-1 rounded-md px-3"
          >
            <File class="h-3.5 w-3.5" />
            <span class="sr-only sm:not-sr-only">Export</span>
          </Button>
        </div>
      </div>
      <section class="grid flex-1 items-start gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <!-- <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card class="sm:col-span-2 bg-white">
              <CardHeader class="pb-3">
                <CardTitle>Your Jobs</CardTitle>
                <CardDescription class="max-w-lg text-balance leading-relaxed">
                  Introducing Our Dynamic Jobs Dashboard for Seamless
                  Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="destructive">
                  Create New Job
                </Button>
              </CardFooter>
            </Card>
            <Card class="bg-white">
              <CardHeader class="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle class="text-4xl">
                  $1329
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-xs text-muted-foreground">
                  +25% from last week
                </div>
              </CardContent>
              <CardFooter>
                <Progress
                  :model-value="25"
                  aria-label="25% increase"
                />
              </CardFooter>
            </Card>
            <Card class="bg-white">
              <CardHeader class="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle class="text-3xl">
                  $5,329
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-xs text-muted-foreground">
                  +10% from last month
                </div>
              </CardContent>
              <CardFooter>
                <Progress
                  :model-value="12"
                  aria-label="12% increase"
                />
              </CardFooter>
            </Card>
          </div> -->

          <section class="flex flex-col gap-4">
            <h4>Recent Jobs</h4>
            <Card
              v-for="job of jobPostings"
              :key="job.id"
              class="bg-white px-4 py-2"
            >
              <section class="flex gap-2">
                <img
                  :src="job.company.logo"
                  alt="Company Logo"
                  class="w-14 h-14 rounded mt-3"
                >
                <div
                  :class="cn(
                    'flex flex-col items-start gap-2 w-full border-none text-left text-sm transition-all hover:bg-accent',
                  )"
                >
                  <div class="flex w-full flex-col gap-1 mt-2">
                    <div class="flex items-center">
                      <div class="flex items-center gap-2">
                        <div class="font-semibold">
                          {{ job.title }}
                        </div>
                      </div>
                      <div
                        :class="cn(
                          'ml-auto text-xs flex items-center gap-2',
                        )"
                      >
                      <Badge class="rounded">5 applicants</Badge>
                        {{ useTimeAgo(new Date(job.created_at)) }}
                      </div>
                    </div>

                    <div class="text-xs font-medium">
                      {{ job.company.name }}
                    </div>
                  </div>
                  <div class="line-clamp-2 text-xs text-muted-foreground">
                    {{ job.description.substring(0, 300) }}
                  </div>
                  <div class="flex items-center justify-between gap-2 w-full">
                    <div class="flex gap-2">
                      <p class="flex gap-1">
                        <MapPinIcon class="w-4 h-4" />
                        {{ job.locations }}
                      </p>
                      <Badge variant="outline">
                        {{ job.industry }}
                      </Badge>
                    </div>
                    <div>
                      <Badge
                        v-for="tag of job.tags"
                        :key="tag"
                        variant="secondary"
                      >
                        {{ tag }}
                      </Badge>
                    </div>
                  </div>
                </div>
              </section>
            </Card>
          </section>
        </div>
        <div>
          <Card class="overflow-hidden min-w-[400px] min-h-[800px] bg-white" />
        </div>
      </section>
    </div>
  </div>
</template>
