export default defineEventHandler(async (event) => {
  const { values } = await readBody(event)
  console.log(values);
  
  const id = crypto.randomUUID()
  await hubKV().set(id, { ...values, id })
})
