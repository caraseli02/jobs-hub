export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { status, expirationDate } = await readBody(event)
  const defaultExpirationDate = new Date()
  console.log(id, status, defaultExpirationDate)

  const todo = await useDrizzle().update(tables.jobs).set({
    status,
    expirationDate: expirationDate || defaultExpirationDate,
  }).where(eq(tables.jobs.id, String(id))).returning().get()

  return todo
})
