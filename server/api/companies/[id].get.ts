export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const selectObj = {
    name: tables.companies.name,
    website: tables.companies.website,
    organizationType: tables.companies.organizationType,
    industryType: tables.companies.industryType,
    aboutUs: tables.companies.aboutUs,
    id: tables.companies.id,
  }

  const companyInfo = await useDrizzle().select(selectObj).from(tables.companies).where(and(
    eq(tables.companies.id, String(id))))

  return companyInfo[0]
})
