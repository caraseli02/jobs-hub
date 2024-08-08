<script setup lang="ts">
import {
  MapPinIcon,
} from 'lucide-vue-next'
import { jobPostings } from '../data'
import { cn } from '../../../lib/utils'

// Define pagination variables
const itemsPerPage = 5
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(jobPostings.length / itemsPerPage))

// Compute the displayed jobs based on current page
const displayedJobs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return jobPostings.slice(start, end)
})

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<template>
  <div class="flex min-h-screen w-fit md:w-full flex-col container">
    <div class="flex flex-col sm:gap-6 sm:py-4">
      <section class="grid flex-1 items-start gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-3">
        <div class="grid auto-rows-max items-start gap-4 md:gap-6 lg:col-span-2">
          <section class="flex flex-col gap-4">
            <div class="min-h-[747px] flex flex-col gap-6">
              <Card
                v-for="job in displayedJobs"
                :key="job.id"
                class="bg-white px-4 py-2 w-[350px] md:w-full"
              >
                <section class="flex gap-2">
                  <img
                    :src="job.company.logo"
                    alt="Company Logo"
                    class="w-10 h-10 md:w-14 md:h-14 rounded mt-3"
                  >
                  <div
                    :class="cn(
                      'max-w-[250px] sm:max-w-none flex flex-col items-start gap-2 w-full border-none text-left text-sm transition-all hover:bg-accent',
                    )"
                  >
                    <div class="flex w-full flex-col gap-1 mt-2">
                      <div class="flex flex-col md:flex-row md:items-center">
                        <div class="flex md:items-center gap-2">
                          <div class="font-semibold">
                            {{ job.title }}
                          </div>
                        </div>
                        <div
                          :class="cn(
                            'hidden md:flex md:ml-auto text-xs md:items-center gap-2',
                          )"
                        >
                          <Badge class="rounded">
                            5 applicants
                          </Badge>
                          {{ useTimeAgo(new Date(job.created_at)) }}
                        </div>
                      </div>

                      <div class="text-xs font-medium">
                        {{ job.company.name }}
                      </div>
                    </div>
                    <div class="line-clamp-2 text-xs w-fit ">
                      {{ job.description.substring(0, 300) }}
                    </div>
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 w-full">
                      <div class="flex gap-2">
                        <p class="flex gap-1">
                          <MapPinIcon class="w-4 h-4" />
                          {{ job.locations }}
                        </p>
                        <Badge variant="outline">
                          {{ job.industry }}
                        </Badge>
                      </div>
                      <div class="flex flex-wrap gap-1.5 mt-2 md:mt-0">
                        <Badge
                          v-for="tag in job.tags"
                          :key="tag"
                          variant="secondary"
                        >
                          {{ tag }}
                        </Badge>
                      </div>
                    </div>
                    <div
                      :class="cn(
                        'flex justify-between w-full md:hidden md:ml-auto text-xs items-center gap-2 my-2',
                      )"
                    >
                      <Badge class="rounded">
                        5 applicants
                      </Badge>
                      {{ useTimeAgo(new Date(job.created_at)) }}
                    </div>
                  </div>
                </section>
              </Card>
            </div>
            <section class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-xl font-medium">
                {{ jobPostings.length }} offers
              </p>
              <Pagination
                v-slot="{ page }"
                :total="jobPostings.length"
                :items-per-page="itemsPerPage"
                :sibling-count="1"
                show-edges
                :default-page="1"
              >
                <PaginationList
                  v-slot="{ items }"
                  class="flex items-center gap-1"
                >
                  <PaginationFirst @click="changePage(currentPage = 1)" />
                  <PaginationPrev @click="changePage(currentPage - 1)" />

                  <template v-for="(item, index) in items">
                    <PaginationListItem
                      v-if="item.type === 'page'"
                      :key="index"
                      :value="item.value"
                      as-child
                    >
                      <Button
                        class="w-9 h-9 p-0"
                        :variant="item.value === currentPage ? 'default' : 'outline'"
                        @click="changePage(item.value)"
                      >
                        {{ item.value }}
                      </Button>
                    </PaginationListItem>
                    <PaginationEllipsis
                      v-else
                      :key="item.type"
                      :index="index"
                    />
                  </template>

                  <PaginationNext @click="changePage(currentPage + 1)" />
                  <PaginationLast @click="changePage(currentPage = items.length)" />
                </PaginationList>
              </Pagination>
            </section>
          </section>
        </div>
        <div>
          <Card class="overflow-hidden min-w-[400px] min-h-[800px] bg-white" />
        </div>
      </section>
    </div>
  </div>
</template>
