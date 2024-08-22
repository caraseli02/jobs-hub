<script setup lang="ts">
import * as z from 'zod'
import { ref, h } from 'vue'
import { Sparkles, Loader } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'

enum EducationLevel {
  HighSchool = 'High School',
  Associate = 'Associate',
  Bachelor = 'Bachelor',
  Master = 'Master',
  Doctorate = 'Doctorate',
}

enum ExperienceLevel {
  Internship = 'Internship',
  EntryLevel = 'Entry Level',
  MidLevel = 'Mid Level',
  SeniorLevel = 'Senior Level',
  Executive = 'Executive',
}

enum JobType {
  FullTime = 'Full Time',
  PartTime = 'Part Time',
  Contract = 'Contract',
  Temporary = 'Temporary',
  Internship = 'Internship',
}

// Schema using native enums
const schema = toTypedSchema(
  z.object({
    title: z
      .string({
        required_error: 'Job title is required.',
      })
      .min(2, {
        message: 'Job title must be at least 2 characters.',
      })
      .default('Front-end Developer'),

    skills: z
      .string({
        required_error: 'Skills are required.',
      })
      .min(2, {
        message: 'Skills must be at least 2 characters.',
      })
      .default('JavaScript, Vue, TypeScript'),

    minSalary: z.coerce
      .number({
        invalid_type_error: 'Minimum salary must be a number.',
      })
      .default(25000),

    maxSalary: z.coerce
      .number({
        invalid_type_error: 'Maximum salary must be a number.',
      })
      .default(35000),

    education: z.nativeEnum(EducationLevel).optional(),
    experience: z.nativeEnum(ExperienceLevel).optional(),
    jobType: z.nativeEnum(JobType).optional(),
    expirationDate: z.coerce.date().optional(),

    countrie: z.string().optional(),
    city: z.string().optional(),
  }),
)

const { handleSubmit, resetForm, values, setFieldValue } = useForm({
  validationSchema: schema,
})

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
      body: JSON.stringify({
        msg: `
        ${JSON.stringify(values)}
        generate job description using bellow object that can be inserted in tip tap editor using below information,
        I need this sections: Overview, Requirements, Responsibilities, Qualities, Skills, Desirable, Benefits.
        Do not add any additional information, start directly with the description.
        `,
      }),
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
</script>

<template>
  <section class="min-h-screen">
    <form
      class="container mx-auto md:grid md:grid-cols-3 gap-2"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <FormField
        v-slot="{ componentField }"
        name="title"
      >
        <FormItem>
          <FormLabel>Job title</FormLabel>
          <FormControl>
            <Input
              type="text"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="skills"
      >
        <FormItem>
          <FormLabel>Skills</FormLabel>
          <FormControl>
            <Input
              type="text"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="md:col-span-3">
        <h4 class="my-4 text-lg font-bold">
          Salary
        </h4>
      </div>

      <FormField
        v-slot="{ componentField }"
        name="minSalary"
      >
        <FormItem>
          <FormLabel>Minimum salary</FormLabel>
          <FormControl>
            <Input
              type="number"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="maxSalary"
      >
        <FormItem>
          <FormLabel>Maximum salary</FormLabel>
          <FormControl>
            <Input
              type="number"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="md:col-span-3">
        <h4 class="my-4 text-lg font-bold">
          Advance Information
        </h4>
      </div>

      <FormField
        v-slot="{ componentField }"
        name="education"
      >
        <FormItem>
          <FormLabel>Education Level</FormLabel>
          <FormControl>
            <Select
              v-bind="componentField"
              class="w-full mt-1"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a Education" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="level in Object.values(EducationLevel)"
                    :key="level"
                    :value="level"
                  >
                    {{ level }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="experience"
      >
        <FormItem>
          <FormLabel>Experience Level</FormLabel>
          <FormControl>
            <Select
              v-bind="componentField"
              class="w-full mt-1"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="level in Object.values(ExperienceLevel)"
                    :key="level"
                    :value="level"
                  >
                    {{ level }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="jobType"
      >
        <FormItem>
          <FormLabel>Job Type</FormLabel>
          <FormControl>
            <Select
              v-bind="componentField"
              class="w-full mt-1"
            >
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="level in Object.values(JobType)"
                    :key="level"
                    :value="level"
                  >
                    {{ level }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Job Location Select Component -->
      <JobLocationSelect
        @change-country="setFieldValue('countrie', $event)"
        @change-city="setFieldValue('city', $event)"
      />

      <div class="md:col-span-3 mt-4">
        <section class="flex items-center gap-4">
          <h4 class="my-4 text-lg font-bold">
            Job Description
          </h4>
          <Button
            variant="outline"
            @click.prevent.stop="generateDescription"
          >
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
        </section>
        <TipTapEditor ref="editor" />
      </div>

      <div class="md:col-span-3 flex justify-end mt-8">
        <Button type="submit">
          Post Job
        </Button>
      </div>
    </form>
  </section>
</template>
