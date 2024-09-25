export default eventHandler(async (event) => {
  const { values, userId } = await readBody(event)
  const oneMonthFromNow = new Date()
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1)

  const company = await useDrizzle().insert(tables.companies).values({
    name: values.companyName,
    website: values.companyWebsite,
    organizationType: values.organizationType,
    industryType: values.industryType,
    aboutUs: values.aboutUs,
    id: userId,
    createdAt: new Date(),
  }).returning().get()

  return company
})
