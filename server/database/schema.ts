import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const jobs = sqliteTable('jobs', {
  id: text('id').primaryKey(),  // Using text to match the UUID
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
  expirationDate: integer('expirationDate', { mode: 'timestamp' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})
