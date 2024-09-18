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
  content: ``,
  extensions: [...defaultExtensions],
  editorProps: {
    attributes: {
      class: 'focus-visible:outline-none',
    },
  },
})

const insertNew = (text) => {
  // Insert the generated content into the editor
  editor.value
    .chain()
    .focus()
    .insertContentAt(editor.value.state.selection.$anchor.pos, text)
    .run()
  editor.value.commands.focus()
}

const getEditorContent = () => {
  return editor.value.getHTML()
}

defineExpose({ insertNew, getEditorContent })

onBeforeUnmount(() => {
  unref(editor).destroy()
})
</script>
