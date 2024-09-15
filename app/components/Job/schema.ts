import * as z from 'zod'

export const formSchema = {
  name: z
    .string({
      required_error: 'Name is required.',
    })
    .min(2, {
      message: 'Name must be at least 2 characters.',
    }),

  education: z
    .string({
      required_error: 'Education is required.',
    })
    .min(2, {
      message: 'Education must be at least 2 characters.',
    }),

  experience: z
    .string({
      required_error: 'Experience is required.',
    })
    .min(2, {
      message: 'Experience must be at least 2 characters.',
    }),

  email: z
    .string()
    .email({
      message: 'Invalid email address.',
    }),

  location: z
    .string()
    .optional(),

  nationality: z
    .string()
    .optional(),

  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: 'Invalid phone number.',
    })
    .optional(),

  skills: z
    .string()
    .optional(),

  socials: z
    .string()
    .url({
      message: 'Invalid URL.',
    })
    .optional(),

  website: z
    .string()
    .url({
      message: 'Invalid website URL.',
    })
    .optional(),

  dob: z
    .string()
    .optional(),

  current_position: z
    .string()
    .optional(),

  biography: z
    .string()
    .min(10, {
      message: 'Biography must be at least 10 characters.',
    })
    .optional(),

  message: z
    .string()
    .min(10, {
      message: 'Cover letter must be at least 10 characters.',
    })
    .optional(),

  resume: z.string({
    required_error: 'CV/Resume is required.',
  }),
}

export const formSchemaEasy = {
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
}
