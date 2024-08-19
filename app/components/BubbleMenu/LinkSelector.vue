<template>
  <div class="relative">
    <Button
      size="sm"
      class="gap-2"
      variant="ghost"
      @click="isOpen = !isOpen"
    >
      <Link class="w-4 h-4" /> Link
    </Button>
    <form
      v-if="isOpen"
      class="fixed top-full z-[99999] mt-1 flex w-60 overflow-hidden rounded border border-stone-200 bg-white dark:bg-slate-950 p-1 shadow-xl animate-in fade-in slide-in-from-top-1"
      @submit.prevent="submit"
    >
      <input
        ref="inputRef"
        type="text"
        placeholder="Paste a link"
        class="flex-1 p-1 text-sm bg-white outline-none"
        :defaultValue="editor.getAttributes('link').href || ''"
      >

      <button
        v-if="editor.getAttributes('link').href"
        type="button"
        class="flex items-center p-1 text-red-600 transition-all rounded-sm hover:bg-red-100 dark:hover:bg-red-800"
        @click="
          () => {
            editor.chain().focus().unsetLink().run();
            isOpen = false;
          }
        "
      >
        <Trash class="w-4 h-4" />
      </button>
      <button
        v-else
        class="flex items-center p-1 transition-all rounded-sm text-stone-600 hover:bg-stone-100"
      >
        <Check class="w-4 h-4" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import { Check, Trash, Link } from 'lucide-vue-next'

defineProps<{
  editor: Editor
}>()

const isOpen = ref(false)

const inputRef = ref<HTMLInputElement | null>(null)

function submit(e: any) {
  console.log(e)

  // const input = e.target[0] as HTMLInputElement;
  // const url = getUrlFromString(input.value);
  // url && editor.chain().focus().setLink({ href: url }).run();
  // setIsOpen(false);
}
</script>

<style scoped></style>
