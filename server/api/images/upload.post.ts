export default eventHandler(async (event) => {
  const form = await readFormData(event)
  const file = form.get('file') as File
  console.log(file, form);
  
  if (!file || !file.size) {
    throw createError({ statusCode: 400, message: 'No file provided' })
  }

  ensureBlob(file, {
    maxSize: '1MB',
    types: ['image']
  })

  return hubBlob().put(file.name, file, {
    addRandomSuffix: false,
    prefix: 'images'
  })
})
