<script setup lang="ts" generic="T">
import { GraduationCap, CalendarRange, MapIcon, FileDown, GlobeIcon, MapPin, PhoneIcon, MailIcon } from 'lucide-vue-next'

const isOpen = defineModel()

interface Candidate {
  name: string
  role: string
  experience: string
  education: string
  applied: string
  cvLink: string
}

defineProps<{
  candidate: Candidate
}>()
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogContent
      v-if="candidate"
      class="lg:max-w-[80vw] overflow-y-auto h-[100vh] md:h-fit"
    >
      <DialogHeader>
        <DialogTitle class="text-2xl font-bold">
          {{ candidate.name }}
        </DialogTitle>
        <DialogDescription class="text-lg text-start">
          {{ candidate.role }}
        </DialogDescription>
      </DialogHeader>
      <div class="flex flex-col md:flex-row gap-8 overflow-y-auto ">
        <section class="flex flex-col justify-between gap-4">
          <div class="flex flex-col gap-4">
            <h4 class="text-xl font-semibold">
              Biography
            </h4>
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quibusdam. Consequuntur dignissimos aut fugit ullam quae, doloremque minima quam sequi quo voluptas sint sit consectetur perferendis magni fuga excepturi suscipit reiciendis nemo.
            </p>
            <Separator />
            <h4 class="text-xl font-semibold">
              Cover letter
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis nemo, deleniti laboriosam ea explicabo corporis saepe eum laborum ipsam suscipit dicta eius sequi nam sit, quaerat nesciunt? Itaque explicabo et ratione.</p>
            <Separator />
          </div>
          <div class="flex justify-between flex-wrap gap-2">
            <Button
              size="lg"
              class="gap-2 w-fit"
            >
              <MailIcon class="w-5 h-5 stroke-1" />
              Send Mail
            </Button>
            <Button
              variant="outline"
              size="lg"
              class="gap-2 w-fit"
              @click.stop="console.log('Download CV clicked')"
            >
              <FileDown class="w-5 h-5 stroke-1" />
              Download CV
            </Button>
          </div>
        </section>
        <section class="flex flex-col gap-4 md:min-w-96">
          <Card>
            <CardContent class="grid gap-4 pt-6">
              <div class="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <GraduationCap class="mt-px h-5 w-5" />
                <div class="space-y-1">
                  <p class="text-sm font-medium leading-none">
                    Education
                  </p>
                  <p class="text-sm text-muted-foreground">
                    Master's degree in Computer Science
                  </p>
                </div>
              </div>
              <div class="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <CalendarRange class="mt-px h-5 w-5" />
                <div class="space-y-1">
                  <p class="text-sm font-medium leading-none">
                    Experience
                  </p>
                  <p class="text-sm text-muted-foreground">
                    7 Years
                  </p>
                </div>
              </div>
              <div class="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <MapIcon class="mt-px h-5 w-5" />
                <div class="space-y-1">
                  <p class="text-sm font-medium leading-none">
                    Nationality
                  </p>
                  <p class="text-sm text-muted-foreground">
                    Dacian Republic
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <!-- <Card>
            <CardHeader>
              <CardTitle>Download Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                class="p-3 h-14 gap-2"
                variant="secondary"
              >
                <FileDownIcon class="w-10 h-10 stroke-1" />
                <ul class="flex flex-col gap-1">
                  <li>{{ candidate.name }}</li>
                  <li>PDF</li>
                </ul>
              </Button>
            </CardContent>
          </Card> -->
          <Card>
            <CardHeader class="pb-0">
              <CardTitle class="text-lg">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent class="grid gap-4 pt-6">
              <div class="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <GlobeIcon class="mt-px h-5 w-5" />
                <div class="space-y-1">
                  <p class="text-sm font-medium leading-none">
                    Website
                  </p>
                  <p class="text-sm text-muted-foreground">
                    www.example.com
                  </p>
                </div>
              </div>
              <div class="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <MapPin class="mt-px h-5 w-5" />
                <div class="space-y-1">
                  <p class="text-sm font-medium leading-none">
                    Location
                  </p>
                  <p class="text-sm text-muted-foreground">
                    Dacia, Romania
                  </p>
                </div>
              </div>
              <div class="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <PhoneIcon class="mt-px h-5 w-5" />
                <div class="space-y-1">
                  <p class="text-sm font-medium leading-none">
                    Phone number
                  </p>
                  <p class="text-sm text-muted-foreground">
                    +40 723 456 7890
                  </p>
                </div>
              </div>
              <div class="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <MailIcon class="mt-px h-5 w-5" />
                <div class="space-y-1">
                  <p class="text-sm font-medium leading-none">
                    Email address
                  </p>
                  <p class="text-sm text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </DialogContent>
  </Dialog>
</template>

<style scoped>

</style>
