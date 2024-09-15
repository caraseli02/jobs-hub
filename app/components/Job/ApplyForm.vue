<script setup lang="ts">
import * as z from 'zod'
import { h } from 'vue'
import { useToast } from '../../components/ui/toast'
import { formSchema } from './schema';

// Define the schema based on the new requirements
const schema = z.object(formSchema)

const { toast } = useToast()
function onSubmit(values: Record<string, unknown>) {
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    ),
  })
}
</script>

<template>
  <Card class="border-none">
    <CardHeader>
      <CardTitle>Apply Job: Frontend Developer</CardTitle>
      <CardDescription>Please add the required information.</CardDescription>
    </CardHeader>
    <CardContent>
      <AutoForm
        class="grid md:grid-cols-3 gap-2"
        :schema="schema"
        :field-config="{
          name: { label: 'Name' },
          education: { label: 'Education' },
          experience: { label: 'Experience' },
          resume: { label: 'Resume', component: 'file' },
          email: { label: 'Email' },
          location: { label: 'Location (Country, City)' },
          nationality: { label: 'Nationality' },
          phone: { label: 'Phone Number' },
          skills: { label: 'Skills' },
          socials: { label: 'Social Media Profiles' },
          website: { label: 'Website' },
          dob: { label: 'Date of Birth' },
          current_position: { label: 'Current Position' },
          biography: { component: 'textarea', label: 'Biography' },
          message: { component: 'textarea', label: 'Cover Letter' },
        }"
        @submit="onSubmit"
      >
        <template #email="slotProps">
          <AutoFormField v-bind="slotProps" />
          <Separator class="md:col-span-3 my-4" />
        </template>
        <template #biography="slotProps">
          <AutoFormField
            class="md:col-span-3"
            v-bind="slotProps"
          />
        </template>
        <template #message="slotProps">
          <AutoFormField
            class="md:col-span-3"
            v-bind="slotProps"
          />
        </template>
        <template #resume="slotProps">
          <AutoFormField
            class="md:col-span-3"
            v-bind="slotProps"
          />
          <Separator class="md:col-span-3 my-4" />
        </template>
        <Button type="submit">
          Submit
        </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
