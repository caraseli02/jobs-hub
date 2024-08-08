<script setup lang="ts">
import { BadgeCheck, Building2, MapPin, BriefcaseBusiness, UsersRoundIcon } from 'lucide-vue-next'
import InfoItem from './InfoItem.vue'
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <div class="container">
    <Card class="flex flex-col w-full mx-auto relative rounded-lg">
      <header class="flex flex-col px-px w-full text-4xl font-bold text-right rounded-lg max-md:max-w-full">
        <div class="flex relative flex-col px-16 py-12 rounded-lg min-h-[191px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://picsum.photos/1800/200"
            alt=""
            class="object-cover absolute inset-0 size-full rounded-t-lg"
          >
          <h3>
            We Connect Top Talents With Top Companies
          </h3>
        </div>
      </header>
      <div
        class="flex dark:bg-slate-900 flex-wrap gap-10 items-start pb-6 px-4 w-full rounded-none max-md:pr-5 max-md:max-w-full rounded-b-lg"
      >
        <section class="flex-auto self-end max-md:max-w-full ml-32 mt-2">
          <div class="flex flex-col justify-center">
            <div class="flex flex-col self-start">
              <div class="flex gap-2 items-center self-start text-base font-bold">
                <h2 class="self-stretch my-auto">
                  Company Name
                </h2>
                <BadgeCheck
                  class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square text-blue-600"
                />
              </div>
              <p class="mt-1 text-xs font-medium leading-none">
                We connect top talents with top companies
              </p>
            </div>
            <div class="flex gap-3 items-start mt-2 text-xs font-medium leading-relaxed text-zinc-500">
              <InfoItem
                :icon="Building2"
                text="Tech"
              />
              <InfoItem
                :icon="MapPin"
                text="Jakarta Selatan, Indonesia"
              />
              <InfoItem
                :icon="BriefcaseBusiness"
                text="On-Site"
              />
              <InfoItem
                :icon="UsersRoundIcon"
                text="1 – 50 employees"
              />
            </div>
          </div>
        </section>
        <SocialLinks />
      </div>
      <div class="flex flex-col max-md:ml-0 max-md:w-full absolute bottom-4 left-4">
        <div
          class="px-7 mx-auto w-28 h-28 text-xl font-semibold text-amber-200 bg-violet-700 rounded max-md:px-5 max-md:mt-2.5"
        >
          <img
            loading="lazy"
            src="https://picsum.photos/112"
            alt=""
            class="object-cover absolute inset-0 size-full rounded-lg ring-2 ring-white"
          >
          Name<span class="text-amber-200">!</span>
        </div>
      </div>
    </Card>
  </div>
</template>
