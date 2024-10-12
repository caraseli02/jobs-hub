# 3. Simplified Data Model

## Job Posting Model

- **Fields:**
  - Job ID (unique identifier)
  - Company ID (foreign key)
  - Title
  - Description
  - Requirements
  - Location
  - Created At
  - Status (Active/Inactive)
  - View Count

## Application Model

- **Fields:**
  - Application ID (unique identifier)
  - Job ID (foreign key)
  - Applicant Name
  - Applicant Email
  - Resume (file upload)
  - Submitted At

## Company Model

- **Fields:**
  - Company ID (unique identifier)
  - Company Name
  - Email
  - Password (hashed)
  - Created At

## Applicant Model (Optional for MVP)

- **Fields:**
  - Applicant ID (unique identifier)
  - Name
  - Email
  - Password (hashed, if account created)
  - Created At
