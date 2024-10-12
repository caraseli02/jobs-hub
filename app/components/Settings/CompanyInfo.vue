<script setup lang="ts">
import * as z from 'zod'
import { h } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { companySchema } from './schemas'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'
import { AutoForm, AutoFormField } from '@/components/ui/auto-form'

const emit = defineEmits(['showNextTab'])

const schema = z.object(companySchema)

const user = useSupabaseUser()

async function uploadImage(file: File) {
  // transfer string image to file
  const form = new FormData()
  form.append('file', file)

  await $fetch('/api/images/upload', {
    method: 'POST',
    body: form,
  }).catch(err => alert('Failed to upload image:\n' + err.data?.message))
}

async function saveToDb(values: Record<string, unknown>) {
  try {
    await $fetch('/api/companies', {
      method: 'POST',
      body: { values, userId: user.value.id },

    })
    toast({
      title: 'Company saved successfully!',
    })
  }
  catch (error) {
    console.error('Failed to save to database:', error)
    toast({
      title: 'Failed to save company',
    })
  }
}

async function onSubmit(values: Record<string, unknown>) {
  if (values.logo) {
    await uploadImage(parseStringToFile(values.logo as string, 'logo.png'))
  }
  if (values.banner) {
    await uploadImage(parseStringToFile(values.banner as string, 'banner.png'))
  }
  saveToDb(values)
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
        industryType: {
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
