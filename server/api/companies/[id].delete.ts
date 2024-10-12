export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const deletedCompanie = await useDrizzle().delete(tables.companies).where(and(
    eq(tables.jobs.id, String(id))
  )).returning().get()

  if (!deletedCompanie) {
    throw createError({
      statusCode: 404,
      message: 'Todo not found'
    })
  }
  return deletedCompanie
})
