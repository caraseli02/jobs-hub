<script setup lang="ts">
import * as z from 'zod'
import { ref, h } from 'vue'
import { Sparkles, Loader } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { toDate } from 'radix-vue/date'
import { type DateValue } from '@internationalized/date'
import { formSchema, EducationLevel, ExperienceLevel, JobType } from './schema'
import FormFieldItem from './FormFieldItem.vue'
import { toast } from '@/components/ui/toast'
import { cn } from '@/lib/utils.js'

// Schema using native enums
const schema = toTypedSchema(
  z.object(formSchema),
)

const { handleSubmit, resetForm, values, setFieldValue } = useForm({
  validationSchema: schema,
})
const jobSections = ['Overview', 'Requirements', 'Responsibilities', 'Qualities', 'Skills', 'Desirable', 'Benefits']
const selectedJobSections = ref<string[]>([])
const isLoading = ref(false)
const responseText = ref('')
const editor = ref()
const generateDescription = async () => {
  isLoading.value = true
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    responseText.value = await $fetch('/api/ai/test', {
      method: 'POST',
      body: {
        values,
        selectedJobSections: selectedJobSections.value,
      }
    })
    editor.value.insertNew(responseText.value.response)
  }
  catch (error) {
    console.error('Failed to generate description:', error)
  }
  finally {
    isLoading.value = false
  }
}

function onSubmit() {
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    ),
  })
  resetForm()
}

const toggleJobSections = (section: string) => {
  const index = selectedJobSections.value.indexOf(section)
  if (index === -1) {
    selectedJobSections.value.push(section)
  }
  else {
    selectedJobSections.value.splice(index, 1)
  }
}

// Define reusable field configuration arrays
const textFields = [
  { name: 'title', label: 'Job title', type: 'text' },
  { name: 'skills', label: 'Skills', type: 'text' },
]

const salaryFields = [
  { name: 'minSalary', label: 'Minimum salary', type: 'number' },
  { name: 'maxSalary', label: 'Maximum salary', type: 'number' },
]

const selectFields = [
  { name: 'education', label: 'Education Level', options: Object.values(EducationLevel) },
  { name: 'experience', label: 'Experience Level', options: Object.values(ExperienceLevel) },
  { name: 'jobType', label: 'Job Type', options: Object.values(JobType) },
]

const router = useRouter()
const makePost = async () => {
  const description = await editor.value.getEditorContent()
  await $fetch('/api/job/', {
    method: 'POST',
    body: { values: { ...values, description } },
  })
  router.push('/dashboard')
}

const setExpirationDate = (date: DateValue) => {
  setFieldValue('expirationDate', toDate(date))
}
</script>

<template>
  <form
    class="container mx-auto md:grid md:grid-cols-3 gap-2"
    @submit.prevent="handleSubmit(onSubmit)"
  >
    <!-- Reusable FormFieldItem for text inputs -->
    <FormFieldItem
      v-for="(field, index) in textFields"
      :key="index"
      :field="field"
    />

    <FormField name="doe">
      <FormItem class="flex flex-col gap-2">
        <FormLabel>Date of expiration</FormLabel>
        <Popover>
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              :class="cn(
                'w-full h-12 justify-start text-left font-normal',
              )"
            >
              <CalendarIcon class="mr-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar
              initial-focus
              @update:model-value="setExpirationDate($event)"
            />
          </PopoverContent>
        </Popover>
        <FormMessage />
      </FormItem>
    </FormField>

    <div class="md:col-span-3">
      <h4 class="my-4 text-lg font-bold">
        Salary
      </h4>
    </div>

    <!-- Salary Fields -->
    <FormFieldItem
      v-for="(field, index) in salaryFields"
      :key="index"
      :field="field"
    />

    <div class="md:col-span-3">
      <h4 class="my-4 text-lg font-bold">
        Advance Information
      </h4>
    </div>

    <!-- Dynamic Education, Experience, Job Type Select Fields -->
    <FormFieldItem
      v-for="(field, index) in selectFields"
      :key="index"
      :field="field"
      :options="field.options"
    />

    <!-- Job Location Select Component -->
    <JobLocationSelect
      @change-country="setFieldValue('country', $event)"
      @change-city="setFieldValue('city', $event)"
    />

    <!-- Job Description Section -->
    <div class="md:col-span-3 mt-4">
      <section class="flex items-center gap-4">
        <h4 class="my-4 text-lg font-bold">
          Job Description
        </h4>
        <Popover>
          <PopoverTrigger>
            <Button variant="outline">
              <Loader
                v-if="isLoading"
                class="w-4 h-4 mr-2 animate-spin"
              />
              <Sparkles
                v-else
                class="w-4 h-4 mr-2"
              />
              Generate
            </Button>
          </PopoverTrigger>
          <PopoverContent class="flex flex-col gap-3">
            <div
              v-for="item in jobSections"
              :key="item"
              class="flex items-center space-x-2"
              @click="toggleJobSections(item)"
            >
              <Checkbox :checked="selectedJobSections.includes(item)" />
              <label
                :for="item"
                class="text-sm font-medium"
              >{{ item }}</label>
            </div>
            <Button
              size="xs"
              @click.prevent.stop="generateDescription"
            >
              Start
            </Button>
          </PopoverContent>
        </Popover>
      </section>
      <TipTapEditor ref="editor" />
    </div>

    <div class="md:col-span-3 flex justify-end mt-8">
      <Button
        type="submit"
        @click="makePost"
      >
        Post Job
      </Button>
    </div>
  </form>
</template>
