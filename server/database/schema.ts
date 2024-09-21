import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const jobs = sqliteTable('jobs', {
  id: text('id').primaryKey(), // Using text to match the UUID
  title: text('title').notNull(),
  skills: text('skills'),
  minSalary: integer('min_salary'),
  maxSalary: integer('max_salary'),
  description: text('description'),
  education: text('education'),
  experience: text('experience'),
  jobType: text('jobType'),
  country: text('country'),
  city: text('city'),
  status: text('status').default('active'),
  applications: integer('applications', { mode: 'number' }),
  expirationDate: integer('expirationDate', { mode: 'timestamp' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})

export const companies = sqliteTable('companies', {
  id: text('id').primaryKey(), // Using text to match the UUID
  name: text('name').notNull(),
  website: text('website'),
  organizationType: text('organizationType'),
  industryType: text('industryType'),
  aboutUs: text('aboutUs'),

  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
})
