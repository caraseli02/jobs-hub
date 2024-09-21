<script setup lang="ts">
import {
  File,
  ListFilter,
  UsersIcon,
} from 'lucide-vue-next'

const { data: jobs, refresh } = await useFetch('/api/job')

const makeTheJobExpired = async (id: string) => {
  await $fetch(`/api/job/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: { status: 'expired' },
  })
  refresh()
}

const deleteJob = async (id: string) => {
  await $fetch(`/api/job/${id}`, { method: 'DELETE' })
  refresh()
}
</script>

<template>
  <div class="flex min-h-screen w-full flex-col mt-8 container">
    <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <DashboardJobStatistics />
      <Tabs default-value="all">
        <div class="flex items-center">
          <TabsList>
            <TabsTrigger value="all">
              All Jobs
            </TabsTrigger>
            <TabsTrigger value="active">
              Active
            </TabsTrigger>
            <TabsTrigger value="expired">
              Expired
            </TabsTrigger>
          </TabsList>
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
                <DropdownMenuItem>Active</DropdownMenuItem>
                <DropdownMenuItem>Expired</DropdownMenuItem>
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
        <TabsContent value="all">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead class="hidden sm:table-cell">
                  Status
                </TableHead>
                <TableHead class="hidden sm:table-cell">
                  Applications
                </TableHead>
                <TableHead class="text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <template
                v-for="job in jobs"
                :key="job.id"
              >
                <TableRow>
                  <TableCell class="w-full">
                    <div class="font-semibold">
                      {{ job.title }}
                    </div>
                    <div class="text-sm text-muted-foreground">
                      {{ job.jobType }} • ends {{ useTimeAgo(job.expirationDate) }}
                    </div>
                  </TableCell>
                  <TableCell class="hidden sm:table-cell min-w-[150px]">
                    <Badge
                      :variant="job.status === 'active' ? 'outline' : 'destructive'"
                      class="text-xs capitalize"
                    >
                      {{ job.status }}
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden sm:table-cell min-w-[200px]">
                    <div class="flex">
                      <UsersIcon class="w-4 h-4 stroke-1 mr-1" />
                      {{ job.applications }} Applications
                    </div>
                  </TableCell>
                  <TableCell class="text-right min-w-[200px]">
                    <NuxtLink :to="`/dashboard/${job.id}`">
                      <Button
                        class="mr-4 "
                        variant="outline"
                        size="sm"
                      >
                        View Applications
                      </Button>
                    </NuxtLink>
                    <DropdownMenu>
                      <DropdownMenuTrigger as-child>
                        <Button
                          variant="ghost"
                          size="sm"
                          class="px-1 text-lg"
                        >
                          ⋮
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <NuxtLink :to="`/dashboard/${job.id}`">
                            View Applications
                          </NuxtLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="makeTheJobExpired(job.id)">
                          Make It Expire
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="deleteJob(job.id)">
                         Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </template>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>
