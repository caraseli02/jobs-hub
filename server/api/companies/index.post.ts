export default eventHandler(async (event) => {
  const { values } = await readBody(event)
  const id = crypto.randomUUID()
  const oneMonthFromNow = new Date()
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1)

  const company = await useDrizzle().insert(tables.companies).values({
    name: values.companyName,
    website: values.companyWebsite,
    organizationType: values.organizationType,
    industryType: values.industryType,
    aboutUs: values.aboutUs,
    id,
    createdAt: new Date(),
  }).returning().get()

  return company
})
