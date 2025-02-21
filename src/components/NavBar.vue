<script setup>
import logo from '@/assets/images/logo.svg'
import { defineProps, defineEmits } from 'vue'

defineProps({
  isMenuOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['toggle-menu'])

const handleToggle = () => {
  emit('toggle-menu')
}
</script>

<template>
  <!-- Desktop Navigation -->
  <nav class="flex px-8 sm:px-20 items-center justify-between py-8 text-neutral-grayish-violet">
    <div class="flex gap-8">
      <a href="/" aria-label="Home">
        <img :src="logo" alt="Logo" class="h-8 w-auto" />
      </a>
      <!-- Desktop Menu -->
      <ul class="hidden sm:flex items-center gap-5">
        <li v-for="item in ['Features', 'Pricing', 'Resources']" :key="item">
          <a
            :href="`#${item.toLowerCase()}`"
            class="transition-colors duration-200 hover:text-neutral-very-dark-violet"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Desktop Buttons -->
    <div class="hidden sm:flex gap-5">
      <button class="transition-colors duration-200 hover:text-neutral-very-dark-violet">
        Login
      </button>
      <button
        class="rounded-full bg-primary-cyan px-5 py-2 text-white transition-opacity duration-300 hover:opacity-50"
      >
        Sign Up
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <button
      @click="handleToggle"
      class="sm:hidden"
      aria-label="Toggle menu"
      :aria-expanded="isMenuOpen"
    >
      <i class="pi pi-align-justify text-4xl"></i>
    </button>
  </nav>

  <!-- Mobile Navigation -->
  <nav
    v-show="isMenuOpen"
    class="sm:hidden mx-8 bg-primary-dark-violet p-10 text-center rounded-xl text-white"
  >
    <ul class="space-y-7">
      <li v-for="item in ['Features', 'Pricing', 'Resources']" :key="item">
        <a
          :href="`#${item.toLowerCase()}`"
          class="transition-colors duration-200 hover:text-neutral-very-dark-violet"
        >
          {{ item }}
        </a>
      </li>
    </ul>

    <hr class="my-5 border-neutral-grayish-violet" />

    <div class="space-y-7">
      <button class="w-full transition-colors duration-200 hover:text-neutral-very-dark-violet">
        Login
      </button>
      <button
        class="w-full rounded-full bg-primary-cyan px-5 py-3 text-white transition-opacity duration-300 hover:opacity-50"
      >
        Sign Up
      </button>
    </div>
  </nav>
</template>
