<script setup lang="ts">
import * as z from 'zod'
import { h } from 'vue'
import { useToast } from '../../components/ui/toast'

const schema = z.object({
  name: z
    .string({
      required_error: 'Company name is required.',
    })
    .min(2, {
      message: 'Company name must be at least 2 characters.',
    }),

  email: z
    .string()
    .email({
      message: 'Invalid email address.',
    }),

  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: 'Invalid phone number.',
    })
    .optional(),

  cover: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .optional(),

  resume: z.string(),
})

const { toast } = useToast()
function onSubmit(values: Record<string, unknown>) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <Card class="border-none">
    <CardHeader>
      <CardTitle>
        Apply Job: Frontend Developer
      </CardTitle>
      <CardDescription>
        Please add the required information.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <AutoForm
        class="space-y-6"
        :schema="schema"
        :field-config="{
          name: {
            label: 'Name',
          },

          email: {
            label: 'Email',
          },

          phone: {
            label: 'Phone Number',
          },

          cover: {
            component: 'textarea',
            label: 'Cover Letter',
          },

          resume: {
            label: 'Resume',
            component: 'file',
          },
        }"
        @submit="onSubmit"
      >
        <Button type="submit">
          Submit
        </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
