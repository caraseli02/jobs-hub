<template>
  <BubbleMenu
    :editor="editor"
    :tippy-options="{ duration: 100 }"
    class="flex border divide-x rounded shadow-xl w-fit divide-stone-200 border-stone-200 bg-white dark:bg-slate-950"
  >
    <div class="flex items-center gap-x-2 p-2">
      <NodeSelector :editor="editor" />
      <LinkSelector :editor="editor" />
      <Button
        v-for="(item, index) in items"
        :key="index"
        size="sm"
        variant="ghost"
        type="button"
        @click="item.command()"
      >
        <component
          :is="item.icon"
          class="w-4 h-4"
          :class="{
            'text-blue-500': item.isActive(),
          }"
        />
      </Button>
      <!-- <ColorSelector :editor="editor" /> -->
    </div>
  </BubbleMenu>
</template>

<script setup lang="ts">
import { BubbleMenu } from '@tiptap/vue-3'
import type { Editor } from '@tiptap/core'
import { BoldIcon, ItalicIcon, UnderlineIcon, StrikethroughIcon, CodeIcon } from 'lucide-vue-next'

import NodeSelector from './NodeSelector.vue'
import LinkSelector from './LinkSelector.vue'

const props = defineProps<{
  editor: Editor
}>()

const items = [
  {
    name: 'bold',
    isActive: () => props.editor.isActive('bold'),
    command: () => props.editor.chain().focus().toggleBold().run(),
    icon: BoldIcon,
  },
  {
    name: 'italic',
    isActive: () => props.editor.isActive('italic'),
    command: () => props.editor.chain().focus().toggleItalic().run(),
    icon: ItalicIcon,
  },
  {
    name: 'underline',
    isActive: () => props.editor.isActive('underline'),
    command: () => props.editor.chain().focus().toggleUnderline().run(),
    icon: UnderlineIcon,
  },
  {
    name: 'strike',
    isActive: () => props.editor.isActive('strike'),
    command: () => props.editor.chain().focus().toggleStrike().run(),
    icon: StrikethroughIcon,
  },
  {
    name: 'code',
    isActive: () => props.editor.isActive('code'),
    command: () => props.editor.chain().focus().toggleCode().run(),
    icon: CodeIcon,
  },
]
</script>

<style scoped></style>
