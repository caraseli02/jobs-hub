<script setup lang="ts">
import * as z from 'zod'
import { h } from 'vue'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'
import { AutoForm, AutoFormField } from '@/components/ui/auto-form'

// definePageMeta({
//   middleware: 'auth',
// })

const schema = z.object({
  title: z
    .string({
      required_error: 'Job title is required.',
    })
    .min(2, {
      message: 'Job title must be at least 2 characters.',
    }),

  tags: z
    .string({
      required_error: 'Job title is required.',
    })
    .min(2, {
      message: 'Job title must be at least 2 characters.',
    }),

  minSalary: z.coerce
    .number({
      invalid_type_error: 'Favourite number must be a number.',
    })
    .min(1, {
      message: 'Favourite number must be at least 1.',
    })
    .max(10, {
      message: 'Favourite number must be at most 10.',
    })
    .default(1)
    .optional(),

  maxSalary: z.coerce
    .number({
      invalid_type_error: 'Favourite number must be a number.',
    })
    .min(1, {
      message: 'Favourite number must be at least 1.',
    })
    .max(10, {
      message: 'Favourite number must be at most 10.',
    })
    .default(1)
    .optional(),

  education: z.enum(['high_school', 'associate', 'bachelor', 'master', 'doctorate']).optional(),
  experience: z.enum(['internship', 'entry_level', 'mid_level', 'senior_level', 'executive']).optional(),
  jobType: z.enum(['full_time', 'part_time', 'contract', 'temporary', 'internship']).optional(),
  vacancies: z.enum(['open', 'closed', 'paused']).optional(),
  expirationDate: z.coerce.date().optional(),
  jobLevel: z.enum(['junior', 'mid', 'senior', 'lead', 'director']).optional(),

})

function onSubmit(values: Record<string, any>) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <section class="min-h-screen">
    <AutoForm
      class="container mx-auto md:grid md:grid-cols-3 gap-2 "
      :schema="schema"
      :field-config="{
        title: {
          label: 'Job title',
        },
        minSalary: {
          label: 'Minimum salary',
        },
        maxSalary: {
          label: 'Maximum salary',
        },
        jobType: {
          label: 'Job Type',
        },
        jobLevel: {
          label: 'Job Level',
        },
      }"
      @submit="onSubmit"
    >
      <template #title="slotProps">
        <AutoFormField
          v-bind="slotProps"
        />
      </template>
      <template #tags="slotProps">
        <AutoFormField
          class="md:col-span-2 lg:col-span-1"
          v-bind="slotProps"
        />
      </template>
      <template #minSalary="slotProps">
        <h4 class="md:col-span-3 my-4 text-lg font-bold">
          Salary
        </h4>
        <AutoFormField v-bind="slotProps" />
      </template>
      <template #maxSalary="slotProps">
        <AutoFormField v-bind="slotProps" />
      </template>

      <template #education="slotProps">
        <h4 class="md:col-span-3 my-4 text-lg font-bold">
          Advance Information
        </h4>
        <AutoFormField v-bind="slotProps" />
      </template>

      <JobLocationSelect />
      <!-- <JobBenefitsSelect /> -->
      <div class="md:col-span-3 mt-4">
        <h4 class="md:col-span-3 my-4 text-lg font-bold">
          Job Description
        </h4>
        <TipTapEditor />
      </div>

      <div class="md:col-span-3 flex justify-end mt-8">
        <Button type="submit">
          Post Job
        </Button>
      </div>
    </AutoForm>
  </section>
</template>
