export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const deletedTodo = await useDrizzle().delete(tables.jobs).where(and(
    eq(tables.jobs.id, String(id))
  )).returning().get()

  if (!deletedTodo) {
    throw createError({
      statusCode: 404,
      message: 'Todo not found'
    })
  }
  return deletedTodo
})
