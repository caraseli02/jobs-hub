<template>
  <div class="container min-h-[calc(100vh-120px)]">
    <div class="items-start justify-between sm:flex">
      <div>
        <h4 class="text-xl font-semibold mt-8">
          Job Applications
        </h4>
      </div>
    </div>
    <ul class="mt-12 flex flex-wrap gap-8 w-full">
      <Card
        v-for="(item, idx) in Candidates"
        :key="idx"
        class="w-full md:w-72 cursor-pointer"
        @click="onCardClick(item)"
      >
        <CardHeader class="flex gap-4">
          <div class="flex flex-col">
            <span class="text-lg font-semibold">{{ item.name }}</span>
            <span>{{ item.role }}</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul class="text-sm text-muted-foreground space-y-1">
            <li>{{ item.experience }}</li>
            <li>{{ item.education }}</li>
            <li>{{ item.applied }}</li>
          </ul>
        </CardContent>
        <CardFooter>
          <NuxtLink
            :href="item.cvLink"
          >
            <Button
              variant="outline"
              class="gap-2"
              @click.stop="console.log('Download CV clicked')"
            >
              <FileDown class="w-4 h-4" />
              Download CV
            </Button>
          </NuxtLink>
        </CardFooter>
      </Card>
    </ul>
    <ApplicationDialog
      v-model="showModal"
      :candidate="(selectedCandidate as Candidate)"
    />
  </div>
</template>

<script setup lang="ts">
import { FileDown } from 'lucide-vue-next'

interface Candidate {
  name: string
  role: string
  experience: string
  education: string
  applied: string
  cvLink: string
}

const Candidates: Candidate[] = [
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    experience: '7 Years Experience',
    education: 'Education: Master Degree',
    applied: 'Applied: Jan 23, 2022',
    cvLink: '#',
  },
  {
    name: 'Theresa Webb',
    role: 'Product Designer',
    experience: '7 Years Experience',
    education: 'Education: High School Degree',
    applied: 'Applied: Jan 23, 2022',
    cvLink: '#',
  },
  {
    name: 'Devon Lane',
    role: 'User Experience Designer',
    experience: '7 Years Experience',
    education: 'Education: Master Degree',
    applied: 'Applied: Jan 23, 2022',
    cvLink: '#',
  },
]

const selectedCandidate = ref<null | Candidate>(null)
const showModal = ref(false)

const onCardClick = (candidate: Candidate) => {
  showModal.value = true
  selectedCandidate.value = candidate
}
</script>
