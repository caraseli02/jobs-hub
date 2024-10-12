# 1. Core Feature Breakdown for MVP

## User Roles

### Applicants

- **Job Search and Application:**
  - Browse and search job listings.
  - Apply for jobs by filling out a simple application form and uploading a resume.
  - Create a basic profile with essential information (optional).

- **Notifications:**
  - Receive email confirmations upon application submission.

### Job Creators (Companies)

- **Job Posting and Management:**
  - Register as a company.
  - Create, edit, and deactivate job postings.
  - View a list of applicants for each job.

- **Basic Analytics:**
  - View simple metrics such as the number of views and applications per job posting.

### Admins

- **Platform Management:**
  - Manage company accounts and job postings.
  - Monitor platform activity to ensure compliance with terms of service.

### Authentication System

- Use **Supabase** for basic authentication and user management.

- **Applicants:**
  - Option to create an account with email and password.
  - Ability to apply for jobs without creating an account (guest application).

- **Job Creators (Companies):**
  - Register and log in with email and password.
  - Simple role-based access control for company users.
