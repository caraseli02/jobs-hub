<script setup lang="ts">
import { FieldArray, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Cross1Icon } from '@radix-icons/vue'
import { cn } from '@/lib/utils'
import { toast } from '@/components/ui/toast'

const profileFormSchema = toTypedSchema(z.object({
  location: z
    .string()
    .optional(),

  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1)
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'),

  mobile: z
    .string({
      required_error: 'Mobile is required',
    })
    .min(1)
    .regex(/^\+?\d{1,4}[\s-]?\(?\d{1,3}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/, 'Invalid mobile number'),

  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      }),
    )
    .optional(),
}))

const { handleSubmit, resetForm } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    urls: [
      { value: 'https://shadcn.com' },
      { value: 'http://twitter.com/shadcn' },
    ],
  },
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
</script>

<template>
  <form
    class="space-y-8 md:grid md:grid-cols-2 gap-2"
    @submit="onSubmit"
  >
    <div
      class="md:col-span-2"
    >
      <FormField
        v-slot="{ componentField }"
        name="Company Address"
      >
        <FormItem>
          <FormLabel>Company Address</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="Enter your location"
              v-bind="componentField"
            />
          </FormControl>
          <FormDescription>
            This is your public display location.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>
    <FormField
      v-slot="{ componentField }"
      name="email"
    >
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="Enter your email"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription>
          You can manage verified email addresses in your email settings.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      name="mobile"
    >
      <FormItem>
        <FormLabel>Phone</FormLabel>
        <FormControl>
          <Input
            placeholder="+1 123 456 7890"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription>
          Add your phone number here.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <div class="md:col-span-2">
      <FieldArray
        v-slot="{ fields, push, remove }"
        name="urls"
      >
        <div
          v-for="(field, index) in fields"
          :key="`urls-${field.key}`"
        >
          <FormField
            v-slot="{ componentField }"
            :name="`urls[${index}].value`"
          >
            <FormItem>
              <FormLabel :class="cn(index !== 0 && 'sr-only')">
                URLs
              </FormLabel>
              <FormDescription :class="cn(index !== 0 && 'sr-only')">
                Add links to your website, blog, or social media profiles.
              </FormDescription>
              <div class="relative flex items-center">
                <FormControl>
                  <Input
                    type="url"
                    v-bind="componentField"
                  />
                </FormControl>
                <button
                  type="button"
                  class="absolute py-2 pe-3 end-0 text-muted-foreground"
                  @click="remove(index)"
                >
                  <Cross1Icon class="w-3" />
                </button>
              </div>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          class="text-xs w-20 mt-2"
          @click="push({ value: '' })"
        >
          Add URL
        </Button>
      </FieldArray>
    </div>

    <div class="flex gap-2 justify-end md:col-span-2">
      <Button type="submit">
        Save
      </Button>
    </div>
  </form>
</template>
