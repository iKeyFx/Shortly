<script setup>
import HeroImage from '@/assets/images/illustration-working.svg'
import { defineProps } from 'vue'

defineProps({
  isMenuOpen: {
    type: Boolean,
    required: true,
  },
})
</script>
<!-- 
<template>
  <section class="relative text-center flex flex-col sm:grid sm:grid-cols-2 items-center gap-2">
    Hero Text 
    <div class="">
      <h1 class="sm:text-7xl font-bold text-neutral-very-dark-violet">
        More than just shorter links
      </h1>
      <p>
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
      <button>Get Started</button>
    </div>

    <div class=""></div>
    Hero Image 
    <div :class="[' order-first sm:order-last -mr-40', { 'sm:block hidden': isMenuOpen }]">
      <img :src="HeroImage" alt="Hero Image" />
    </div>
  </section>
</template> -->

<template>
  <section
    class="container pb-36 mx-auto overflow-hidden relative text-center flex flex-col sm:grid sm:grid-cols-2 items-center gap-6"
  >
    <!-- Hero Text -->
    <div class="sm:text-left space-y-6">
      <h1 class="text-4xl sm:text-6xl font-bold text-neutral-very-dark-violet">
        More than just shorter links
      </h1>
      <p class="text-neutral-grayish-violet text-lg sm:text-xl leading-relaxed">
        Build your brand's recognition and get detailed insights on how your links are performing.
      </p>
      <button
        class="rounded-full bg-primary-cyan text-white px-8 py-3 font-bold transition-opacity duration-300 hover:opacity-50"
      >
        Get Started
      </button>
    </div>

    <!-- Hero Image -->
    <div :class="['order-first sm:order-last -mr-40', { 'sm:block hidden': isMenuOpen }]">
      <img :src="HeroImage" alt="Hero Image" class="w-full h-auto" />
    </div>
  </section>
</template>
