<template>
  <div class="p-2.5 px-6 prose-sm border-2 border-gray-400 rounded-lg mx-auto w-full min-h-32">
    <BubbleMenu
      v-if="editor"
      :editor="editor"
    />
    <TiptapEditorContent
      class=""
      :editor="editor"
    />
  </div>
</template>

<script setup>
import { defaultExtensions } from '@/utils/tiptapExt'

const editor = useEditor({
  content: `
    <div>
  <div class="text-lg font-semibold mb-2">Overview</div>
  <p>Vestar is a Shopify Plus agency, and we partner with brands to help them grow...</p>
  
  <div class="font-semibold text-lg">Requirements</div>
  <ul class="list-disc pl-5">
    <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
  </ul>
  
  <div class="font-semibold text-lg">Responsibilities</div>
  <ul class="list-disc pl-5">
    <li>Develops prospect lists and performs email outreach to prospective customers.</li>
  </ul>

  <div class="font-semibold text-lg">Qualities</div>
  <ul class="list-disc pl-5">
    <li>Outstanding written and verbal communication skills</li>
  </ul>

  <div class="font-semibold text-lg">Skills</div>
  <div class="flex gap-2">
    <div class="inline-flex items-center rounded-full border text-xs font-semibold bg-slate-200 px-3 py-1.5">Sales</div>
  </div>

  <div class="text-xl font-semibold mb-2">Desirable</div>
  <ul class="list-disc pl-5">
    <li>Working knowledge of eCommerce platforms, ideally Shopify but also others...</li>
  </ul>

  <div class="text-xl font-semibold mb-2">Benefits</div>
  <ul class="list-disc pl-5">
    <li>Early finish on Fridays for our end of week catch up...</li>
  </ul>
</div>
`,
  extensions: [...defaultExtensions],
  editorProps: {
    attributes: {
      class: 'focus-visible:outline-none',
    },
  },
})

onBeforeUnmount(() => {
  unref(editor).destroy()
})
</script>
