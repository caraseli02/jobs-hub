<script setup lang="ts">
import * as z from 'zod'
import { useRoute } from 'vue-router'
import { randomStr } from '@vue/devtools-shared'
import { useToast } from '~/components/ui/toast'
import type { Database } from '~~/utils/database.types'

const supabase = useSupabaseClient<Database>()
const { toast } = useToast()
const route = useRoute()
const id = route.params.id as string
const isValid = ref(false)
const targetEmail = ref('')
const loading = ref(false)

onMounted(async () => {
  /**
   * Validate if provided ID is valid and not used.
   */
  isValid.value = await validateID()
})

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

  password: z.string(),
  confirm: z.string(),

}).refine(data => data.password === data.confirm, {
  message: 'Passwords must match.',
  path: ['confirm'],
})

async function validateID() {
  const { data, error } = await supabase
    .rpc('validate_invite_id', {
      p_id: id,
    })

  if (error) {
    toast({
      title: 'Error',
      description: error.message,
      variant: 'destructive',
    })

    return false
  }

  if (!data || data.length === 0 || !data[0]?.valid) {
    toast({
      title: 'Invalid ID',
      description: 'The ID you provided is invalid. Please check the link and try again.',
      variant: 'destructive',
    })

    return false
  }

  targetEmail.value = data[0].target_email
  return true
}

async function onSubmit(values: Record<string, unknown>) {
  if (!isValid.value) {
    toast({
      title: 'Invalid ID',
      description: 'The ID you provided is invalid. Please check the link and try again.',
      variant: 'destructive',
    })
    return
  }

  loading.value = true
  try {
    const signUpResult = await supabase.auth.signUp({
      email: targetEmail.value,
      password: values.password as string,
    })

    if (signUpResult.error) {
      toast({
        title: 'Error',
        description: 'Error trying to sign-up user. Please try again.',
        variant: 'destructive',
      })
      return
    }

    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      toast({
        title: 'Error',
        description: 'Invalid session. Please try again.',
        variant: 'destructive',
      })
      return
    }

    const userRoleResult = await supabase.rpc('insert_user_role', {
      p_role: 'admin',
      p_user_id: signUpResult.data.user?.id || '',
    })

    if (userRoleResult.error) {
      toast({
        title: 'Error',
        description: 'Error trying to assign role to user. Please try again.',
        variant: 'destructive',
      })
      return
    }

    const logoPathName = `${values.name as string}/logo-${randomStr()}.png`
    const insertCompanyResult = await supabase.rpc('insert_company', {
      p_admin_id: signUpResult.data.user?.id || '',
      p_cover_path: '',
      p_logo_path: logoPathName,
      p_description: values.description as string,
      p_name: values.name as string,
    })

    if (insertCompanyResult.error) {
      toast({
        title: 'Error',
        description: 'Error trying to insert company. Please try again.',
        variant: 'destructive',
      })
      return
    }

    const uploadImageResult = await supabase.storage
      .from('nezohub')
      .upload(logoPathName, values.logo as string, {
        cacheControl: '3600',
        upsert: false,
      })

    if (uploadImageResult.error) {
      toast({
        title: 'Error',
        description: 'Error trying to upload image. Please try again.',
        variant: 'destructive',
      })
      return
    }

    const updateInviteResult = await supabase.rpc('update_invite_used', {
      p_invite_id: id,
    })

    if (updateInviteResult.error) {
      toast({
        title: 'Error',
        description: 'Error trying to update invite. Please try again.',
        variant: 'destructive',
      })
      return
    }
  }
  catch (error) {
    toast({
      title: 'Error',
      description: 'An unexpected error occurred during the submission.',
      variant: 'destructive',
    })
  }
  finally {
    loading.value = false
  }
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
              <Button
                :disabled="!isValid"
                type="submit"
              >
                Submit
              </Button>
            </AutoForm>
          </CardContent>
        </Card>
      </div>
    </div>
  </main>
</template>
