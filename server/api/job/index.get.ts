export default eventHandler(async () => {
  const selectObj = {
    id: tables.jobs.id,
    title: tables.jobs.title,
    created_at: tables.jobs.createdAt,
    expirationDate: tables.jobs.expirationDate,
    applications: tables.jobs.applications,
    status: tables.jobs.status,
    jobType: tables.jobs.jobType,
  }
  const jobs = await useDrizzle().select(selectObj).from(tables.jobs).all()

  return jobs
})
