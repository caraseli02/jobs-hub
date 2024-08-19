<script setup lang="ts">
import { CaretSortIcon, CheckIcon } from '@radix-icons/vue'
import { countries } from '@/data/countries'
import { cn } from '@/lib/utils.js'

const open = ref(false)
const openCity = ref(false)
const selectedCountrie = ref('')
const selectedCity = ref('')

const citesOptions = computed(() => {
  if (selectedCountrie.value) {
    return countries.find(item => item.value === selectedCountrie.value)?.regions
  }
  return []
})
</script>

<template>
  <h4 class="col-span-3 my-4 text-lg font-bold">
    Location
  </h4>
  <div class="flex flex-col gap-2">
    <Label class="col-span-3">Country</Label>
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-full justify-between h-10"
        >
          {{ selectedCountrie
            ? countries.find((countrie) => countrie.value === selectedCountrie)?.label
            : "Select Countrie..." }}
          <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-full p-0">
        <Command>
          <CommandInput
            class="h-9"
            placeholder="Search framework..."
          />
          <CommandEmpty>No Countrie found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              <CommandItem
                v-for="countrie in countries"
                :key="countrie.value"
                :value="countrie.value"
                @select="(ev) => {
                  if (typeof ev.detail.value === 'string') {
                    selectedCountrie = ev.detail.value
                  }
                  open = false
                }"
              >
                {{ countrie.label }}
                <CheckIcon
                  :class="cn(
                    'ml-auto h-4 w-4',
                    selectedCountrie === countrie.value ? 'opacity-100' : 'opacity-0',
                  )"
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
  <div
    v-if="selectedCountrie"
    class="flex flex-col gap-2"
  >
    <Label class="col-span-3">City</Label>
    <Popover v-model:open="openCity">
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          role="combobox"
          :aria-expanded="openCity"
          class="w-full justify-between h-10"
        >
          {{ selectedCity
            ? citesOptions?.find((city) => city.name === selectedCity)?.name
            : "Select City..." }}
          <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-full p-0">
        <Command>
          <CommandInput
            class="h-9"
            placeholder="Search city..."
          />
          <CommandEmpty>No City found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              <CommandItem
                v-for="city in citesOptions"
                :key="city.name"
                :value="city.name"
                @select="(ev) => {
                  if (typeof ev.detail.value === 'string') {
                    selectedCity = ev.detail.value
                  }
                  openCity = false
                }"
              >
                {{ city.name }}
                <CheckIcon
                  :class="cn(
                    'ml-auto h-4 w-4',
                    selectedCity === city.name ? 'opacity-100' : 'opacity-0',
                  )"
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
  <div class="flex items-center space-x-2 col-span-3 mt-4">
    <Checkbox id="terms" />
    <label
      for="terms"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Fully remote position - <b>Worldwide</b>
    </label>
  </div>
</template>

<style scoped>

</style>
