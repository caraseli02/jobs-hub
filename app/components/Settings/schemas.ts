import * as z from 'zod'

export const companySchema = {
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
  industryType: z.enum(['technology', 'healthcare', 'finance', 'manufacturing', 'education']).optional(),
  aboutUs: z.string().optional(),
}

export const cantactSchema = {
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
}
