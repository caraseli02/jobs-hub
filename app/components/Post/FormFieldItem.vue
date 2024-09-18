<template>
  <FormField :name="field.name" v-slot="{ componentField }">
    <FormItem>
      <FormLabel>{{ field.label }}</FormLabel>
      <FormControl>
        <Input v-if="!field.options" :type="field.type" v-bind="componentField" />
        <Select v-else v-bind="componentField" class="w-full mt-1">
          <SelectTrigger>
            <SelectValue :placeholder="`Select a ${field.label}`" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem v-for="option in field.options" :key="option" :value="option">
                {{ option }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<script setup lang="ts"> 
defineProps({
  field: Object,
  options: Array,
});
</script>
