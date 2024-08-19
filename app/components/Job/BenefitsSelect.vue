<template>
  <h4 class="col-span-3 my-4 text-lg font-bold">
    Job Benefits
  </h4>
  <div class="flex flex-wrap gap-2 col-span-3">
    <Button
      v-for="(benefit, index) in benefits"
      :key="index"
      size="sm"
      class="cursor-pointer hover:border-slate-500"
      :variant="selectedBenefits.includes(index) ? '' : 'outline'"
      @click.prevent="toggleSelection(index)"
    >
      {{ benefit.label }}
    </Button>
  </div>

  <!-- Input field and Add button for new benefits -->
  <div class="flex gap-2 mt-4 col-span-3">
    <Input
      v-model="newBenefit"
      type="text"
      placeholder="Create new benefit"
      class="w-56 h-10"
    />
    <Button
      class="h-10"
      @click.prevent.stop="addBenefit"
    >
      Add
    </Button>
  </div>
  <!-- Display validation message -->
  <p
    v-if="validationMessage"
    class="text-red-500 mt-2"
  >
    {{ validationMessage }}
  </p>
</template>

<script setup>
import { ref } from 'vue'

// Benefits array
const benefits = ref([
  { label: '401k Salary' },
  { label: 'Distributed Team' },
  { label: 'Async' },
  { label: 'Vision Insurance' },
  { label: 'Dental Insurance' },
  { label: 'Medical Insurance' },
  { label: 'Unlimited vacation' },
  { label: '4 day workweek' },
  { label: '401k matching' },
  { label: 'Company retreats' },
  { label: 'Learning budget' },
  { label: 'Free gym membership', class: 'bg-gray-300 text-gray-700' },
  { label: 'Pay in crypto' },
  { label: 'Profit Sharing' },
  { label: 'Equity Compensation' },
  { label: 'No whiteboard interview' },
  { label: 'No politics at work' },
  { label: 'We hire old (and young)' },
])

// Reactive state to track selected benefits
const selectedBenefits = ref([])

// Reactive state for new benefit input
const newBenefit = ref('')

// Reactive state for validation message
const validationMessage = ref('')

// Toggle selection logic
const toggleSelection = (index) => {
  if (selectedBenefits.value.includes(index)) {
    // Remove from selected if already selected
    selectedBenefits.value = selectedBenefits.value.filter(i => i !== index)
  }
  else {
    // Add to selected if not selected
    selectedBenefits.value.push(index)
  }
}

// Add new benefit logic with validation
const addBenefit = () => {
  const trimmedBenefit = newBenefit.value.trim()

  // Check if the input is empty
  if (!trimmedBenefit) {
    validationMessage.value = 'Benefit name cannot be empty.'
    return
  }

  // Check if the benefit already exists
  const benefitExists = benefits.value.some(benefit => benefit.label.toLowerCase() === trimmedBenefit.toLowerCase())

  if (benefitExists) {
    validationMessage.value = 'This benefit already exists.'
    return
  }

  // Add the new benefit as the first item
  benefits.value.unshift({ label: trimmedBenefit })

  // Adjust selected benefits indices and add the new one
  selectedBenefits.value = selectedBenefits.value.map(index => index + 1)
  selectedBenefits.value.unshift(0) // Select the newly added benefit (first item)

  newBenefit.value = '' // Clear input field after adding
  validationMessage.value = '' // Clear validation message
}
</script>

<style scoped>
/* Customize styles here if needed */
</style>
