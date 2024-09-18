export default eventHandler(async (event) => {
  const { values } = await readBody(event)
  const id = crypto.randomUUID()
  const oneMonthFromNow = new Date()
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1)
  console.log(values)

  const todo = await useDrizzle().insert(tables.jobs).values({
    title: values.title,
    skills: values.skills,
    minSalary: values.minSalary,
    maxSalary: values.maxSalary,
    description: values.description,
    jobType: values.jobType,
    education: values.education,
    experience: values.experience,
    createdAt: new Date(),
    expirationDate: new Date(values.expirationDate || oneMonthFromNow),
    id,
  }).returning().get()

  return todo
})
