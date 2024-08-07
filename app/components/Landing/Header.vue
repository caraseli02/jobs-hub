<template>
  <div class="container">
    <article class="flex flex-col rounded-none w-full mx-auto relative">
      <header class="flex flex-col px-px w-full text-4xl font-bold text-right text-white rounded-lg max-md:max-w-full">
        <div class="flex relative flex-col px-16 py-12 rounded-lg min-h-[191px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/17da095ce674339eedf2cd22fde68aef6001f755f00a5be92a73d9d52daf3cac?apiKey=20497529553648aab918fa2d322ece87&&apiKey=20497529553648aab918fa2d322ece87"
            alt=""
            class="object-cover absolute inset-0 size-full rounded-t-lg"
          >
          <h3>
            We Connect Top Talents With Top Companies
          </h3>
        </div>
      </header>
      <div
        class="flex flex-wrap gap-10 items-start pb-6 px-4 w-full bg-white rounded-none max-md:pr-5 max-md:max-w-full rounded-b-lg"
      >
        <section class="flex-auto self-end max-md:max-w-full ml-32 mt-2">
          <div class="flex flex-col justify-center">
            <div class="flex flex-col self-start text-gray-800">
              <div class="flex gap-2 items-center self-start text-base font-bold">
                <h2 class="self-stretch my-auto">
                  Deall Job
                </h2>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b3e6da218ec68dbd0a1b6373309154eb22cf54e0d6b72641b7d0b5a19bc3876?apiKey=20497529553648aab918fa2d322ece87&&apiKey=20497529553648aab918fa2d322ece87"
                  alt=""
                  class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                >
              </div>
              <p class="mt-1 text-xs font-medium leading-none">
                We connect top talents with top companies
              </p>
            </div>
            <div class="flex gap-3 items-start mt-2 text-xs font-medium leading-relaxed text-zinc-500">
              <InfoItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d0ef4307b5b492e9fbf7545b2f980ec49679cbdeed5fb412309baaa2302d8df2?apiKey=20497529553648aab918fa2d322ece87&&apiKey=20497529553648aab918fa2d322ece87"
                text="Tech"
              />
              <InfoItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/620c70047875f37582703fcb7154404d3f887b742a9df1989f20f4384d6655c0?apiKey=20497529553648aab918fa2d322ece87&&apiKey=20497529553648aab918fa2d322ece87"
                text="Jakarta Selatan, Indonesia"
              />
              <InfoItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d0db426e26c7ab7d28052c868520e74318a04e26f83adacc04e9fba248ee3e48?apiKey=20497529553648aab918fa2d322ece87&&apiKey=20497529553648aab918fa2d322ece87"
                text="On-Site"
              />
              <InfoItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8ab545d2d5e13c53081db5919d1ab2cb877dbac3ce34d0328cc06b702ea60689?apiKey=20497529553648aab918fa2d322ece87&&apiKey=20497529553648aab918fa2d322ece87"
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
          Deall<span class="text-amber-200">!</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import InfoItem from './InfoItem.vue'
import SocialLinks from './SocialLinks.vue'
</script>
