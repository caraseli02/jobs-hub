export default defineEventHandler(async (event) => {
  const { values, selectedJobSections } = await readBody(event)
  const ai = hubAI() // access AI bindings

  const prompt = `
    ${JSON.stringify(values)}
    - generate job description using below object 
    - should have this sections: ${selectedJobSections}
    - each title should be wrapped in with h3 tag
    - each option should be in span tag
    - the description should be in p tag
    - the response should be possible to inserted in tip tap editor as html and each part to be editable
    - Do not add any additional information, start directly with the description
    `
  return await ai.run('@cf/meta/llama-3.1-8b-instruct', {
    prompt,
  })
})
