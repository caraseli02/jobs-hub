<script setup lang="ts">
import { UserRound, AtSign } from 'lucide-vue-next'

const activeTab = ref('companyInfo')

const tabs = [
  { value: 'companyInfo', label: 'Company Info', icon: UserRound },
  { value: 'contactInfo', label: 'Contact Info', icon: AtSign },
]
</script>

<template>
  <div class="min-h-screen container">
    <Tabs
      v-model="activeTab"
      activation-mode="manual"
      class="w-full"
    >
      <TabsList class="justify-center w-full">
        <TabsTrigger
          v-for="tab in tabs"
          :key="tab.value"
          :value="tab.value"
        >
          <component
            :is="tab.icon"
            class="w-4 h-4 mr-1"
          />
          {{ tab.label }}
        </TabsTrigger>
      </TabsList>
      <TabsContent
        class="w-full"
        value="companyInfo"
      >
        <SettingsCompanyInfo @show-next-tab="activeTab = 'contactInfo'" />
      </TabsContent>
      <TabsContent
        class="w-full"
        value="contactInfo"
      >
        <SettingsContactInfo />
      </TabsContent>
    </Tabs>
  </div>
</template>

<style scoped>

</style>
