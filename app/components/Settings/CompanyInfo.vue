<script setup lang="ts">
import * as z from 'zod'
import { h } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'
import { AutoForm, AutoFormField } from '@/components/ui/auto-form'

// definePageMeta({
//   middleware: 'auth',
// })

const emit = defineEmits(['showNextTab'])

const schema = z.object({
  logo: z.string().optional(),
  banner: z.string().optional(),
  companyName: z
    .string({
      required_error: 'Job title is required.',
    })
    .min(2, {
      message: 'Job title must be at least 2 characters.',
    }),
  companyWebsite: z
    .string({
      required_error: 'Job title is required.',
    })
    .min(2, {
      message: 'Job title must be at least 2 characters.',
    }).url(),
  organizationType: z.enum(['corporation', 'non profit', 'government', 'startup', 'educational']).optional(),
  industryTypes: z.enum(['technology', 'healthcare', 'finance', 'manufacturing', 'education']).optional(),
  aboutUs: z.string().optional(),
})

function onSubmit(values: Record<string, any>) {
  emit('showNextTab')
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <section class="min-h-screen">
    <AutoForm
      class="mx-auto md:grid md:grid-cols-3 gap-2 "
      :schema="schema"
      :field-config="{
        logo: {
          label: 'Upload Logo',
          component: 'file',
        },
        companyName: {
          label: 'Company Name',
        },
        companyWebsite: {
          label: 'Company Website',
        },
        banner: {
          label: 'Banner Image',
          component: 'file',
        },
        aboutUs: {
          label: 'About Us',
          component: 'textarea',
        },
        organizationType: {
          label: 'Organization Type',
        },
        industryTypes: {
          label: 'Industry Types',
        },
      }"
      @submit="onSubmit"
    >
      <template #logo="slotProps">
        <h4 class="md:col-span-3 my-4 text-lg font-bold">
          Logo and Banner
        </h4>
        <AutoFormField
          v-bind="slotProps"
        />
      </template>
      <template #banner="slotProps">
        <AutoFormField
          class="md:col-span-2"
          v-bind="slotProps"
        />
        <div />
        <h4 class="md:col-span-3 w-full my-4">
          <Separator />
        </h4>
      </template>
      <template #companyName="slotProps">
        <AutoFormField
          v-bind="slotProps"
        />
      </template>
      <template #companyWebsite="slotProps">
        <AutoFormField
          class="md:col-span-2"
          v-bind="slotProps"
        />
      </template>
      <template #aboutUs="slotProps">
        <AutoFormField
          class="md:col-span-3"
          v-bind="slotProps"
        />
      </template>
      <div class="md:col-span-3 flex justify-end mt-8">
        <Button type="submit">
          Save & Next <ArrowRight class="w-4 h-4 ml-1" />
        </Button>
      </div>
    </AutoForm>
  </section>
</template>
