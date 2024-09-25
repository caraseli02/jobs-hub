export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { values } = await readBody(event)

  // Extract only the fields that are provided in the request body
  const updateData: Partial<typeof tables.companies> = {
    name: values.name,
    website: values.website,
    organizationType: values.organizationType,
    industryType: values.industryType,
    aboutUs: values.aboutUs,
    location: values.location,
    email: values.email,
    phone: values.phone,
    urls: JSON.stringify(values.urls) as any,
  }

  // Remove undefined fields from the updateData object
  const cleanUpdateData = Object.fromEntries(
    Object.entries(updateData).filter(([_, v]) => v !== undefined),
  )
  console.log({ ...cleanUpdateData })

  const todo = await useDrizzle().update(tables.companies).set({
    ...cleanUpdateData,
  }).where(eq(tables.companies.id, String(id))).returning().get()

  return todo
})
