<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  icon: {
    type: String,
  },
})
</script>
<template>
  <div class="bg-white space-y-6 rounded-lg px-5 pb-10">
    <div class="grid justify-center">
      <div
        class="bg-primary-dark-violet grid items-center justify-center rounded-full w-20 h-20 -mt-10"
      >
        <img :src="icon" alt="Brand Icon" />
      </div>
    </div>
    <div class="space-y-4">
      <h3 class="text-xl text-neutral-very-dark-violet font-bold">{{ title }}</h3>
      <p class="text-neutral-grayish-violet">
        {{ description }}
      </p>
    </div>
  </div>
</template>
