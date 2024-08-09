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

  description: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    })
    .optional(),

  logo: z.string().optional(),

  password: z
    .string({
      required_error: 'Password is required.',
    })
    .min(8, {
      message: 'Password must be at least 8 characters.',
    }),

  confirmPassword: z
    .string({
      required_error: 'Password is required.',
    })
    .min(8, {
      message: 'Password must be at least 8 characters.',
    }),

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
  <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
    <div class="mx-auto grid w-full max-w-6xl gap-2">
      <h1 class="text-3xl font-semibold">
        Settings
      </h1>
    </div>
    <div class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
      <nav class="flex overflow-y-auto md:grid gap-4 text-sm text-muted-foreground">
        <Button
          class="w-fit"
          variant="link"
        >
          General
        </Button>
        <Button
          class="w-fit"
          variant="link"
          disabled
        >
          Security
        </Button>
        <Button
          class="w-fit"
          variant="link"
          disabled
        >
          Integrations
        </Button>
        <Button
          class="w-fit"
          variant="link"
          disabled
        >
          Support
        </Button>
        <Button
          class="w-fit"
          variant="link"
          disabled
        >
          Organizations
        </Button>
        <Button
          class="w-fit"
          variant="link"
          disabled
        >
          Advanced
        </Button>
      </nav>
      <div class="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>First Login</CardTitle>
            <CardDescription>
              Pleas add required information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AutoForm
              class="space-y-6"
              :schema="schema"
              :field-config="{
                name: {
                  label: 'Company Name',
                },
                password: {
                  label: 'Your secure password',
                },
                confirmPassword: {
                  label: 'Password Confirm',
                },

                description: {
                  component: 'textarea',
                },

                logo: {
                  label: 'Logo',
                  component: 'file',
                },
              }"
              @submit="onSubmit"
            >
              <template #acceptTerms="slotProps">
                <AutoFormField v-bind="slotProps" />
                <div class="!mt-2 text-sm">
                  I agree to the <button class="text-primary underline">
                    terms and conditions
                  </button>.
                </div>
              </template>

              <template #customParent="slotProps">
                <div class="flex items-end space-x-2">
                  <AutoFormField
                    v-bind="slotProps"
                    class="w-full"
                  />
                  <Button type="button">
                    Check
                  </Button>
                </div>
              </template>

              <Button type="submit">
                Submit
              </Button>
            </AutoForm>
          </CardContent>
        </Card>
      </div>
    </div>
  </main>
</template>
