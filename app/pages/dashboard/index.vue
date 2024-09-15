<script setup lang="ts">
import {
  File,
  ListFilter,
  UsersIcon,
  TrendingDown,
  TrendingUp,
} from 'lucide-vue-next'

// Mock job posting data
const jobs = [
  {
    id: 1,
    title: 'UI/UX Designer',
    type: 'Full Time',
    status: 'Active',
    daysRemaining: 6,
    applications: 798,
  },
  {
    id: 2,
    title: 'Senior UX Designer',
    type: 'Internship',
    status: 'Active',
    daysRemaining: 8,
    applications: 185,
  },
  {
    id: 3,
    title: 'Junior Graphic Designer',
    type: 'Full Time',
    status: 'Active',
    daysRemaining: 24,
    applications: 583,
  },
  {
    id: 4,
    title: 'Front End Developer',
    type: 'Full Time',
    status: 'Expire',
    daysRemaining: 0,
    applications: 740,
  },
  {
    id: 5,
    title: 'Technical Support Specialist',
    type: 'Part Time',
    status: 'Active',
    daysRemaining: 4,
    applications: 556,
  },
  {
    id: 6,
    title: 'Interaction Designer',
    type: 'Contract Base',
    status: 'Expire',
    daysRemaining: 0,
    applications: 426,
  },
  {
    id: 7,
    title: 'Software Engineer',
    type: 'Temporary',
    status: 'Active',
    daysRemaining: 9,
    applications: 922,
  },
  {
    id: 8,
    title: 'Product Designer',
    type: 'Full Time',
    status: 'Active',
    daysRemaining: 7,
    applications: 994,
  },
  {
    id: 9,
    title: 'Project Manager',
    type: 'Full Time',
    status: 'Expire',
    daysRemaining: 0,
    applications: 196,
  },
  {
    id: 10,
    title: 'Marketing Manager',
    type: 'Full Time',
    status: 'Active',
    daysRemaining: 4,
    applications: 492,
  },
]

const router = useRouter()
</script>

<template>
  <div class="flex min-h-screen w-full flex-col mt-8 container">
    <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
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
                      {{ job.type }} • {{ job.daysRemaining }} days remaining
                    </div>
                  </TableCell>
                  <TableCell class="hidden sm:table-cell min-w-[150px]">
                    <Badge
                      :variant="job.status === 'Active' ? 'outline' : 'destructive'"
                      class="text-xs"
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
                        <DropdownMenuItem>View Detail</DropdownMenuItem>
                        <DropdownMenuItem>Make It Expire</DropdownMenuItem>
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
