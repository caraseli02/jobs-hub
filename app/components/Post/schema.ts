import * as z from 'zod'

enum EducationLevel {
  HighSchool = 'High School',
  Associate = 'Associate',
  Bachelor = 'Bachelor',
  Master = 'Master',
  Doctorate = 'Doctorate',
}

enum ExperienceLevel {
  Internship = 'Internship',
  EntryLevel = 'Entry Level',
  MidLevel = 'Mid Level',
  SeniorLevel = 'Senior Level',
  Executive = 'Executive',
}

enum JobType {
  FullTime = 'Full Time',
  PartTime = 'Part Time',
  Contract = 'Contract',
  Temporary = 'Temporary',
  Internship = 'Internship',
}

export const formSchema = {
  title: z
    .string({
      required_error: 'Job title is required.',
    })
    .min(2, {
      message: 'Job title must be at least 2 characters.',
    })
    .default('Front-end Developer'),

  skills: z
    .string({
      required_error: 'Skills are required.',
    })
    .min(2, {
      message: 'Skills must be at least 2 characters.',
    })
    .default('JavaScript, Vue, TypeScript'),

  minSalary: z.coerce
    .number({
      invalid_type_error: 'Minimum salary must be a number.',
    })
    .default(25000),

  maxSalary: z.coerce
    .number({
      invalid_type_error: 'Maximum salary must be a number.',
    })
    .default(35000),

  education: z.nativeEnum(EducationLevel).optional(),
  experience: z.nativeEnum(ExperienceLevel).optional(),
  jobType: z.nativeEnum(JobType).optional(),
  expirationDate: z.coerce.date().optional(),

  countrie: z.string().optional(),
  city: z.string().optional(),
}
