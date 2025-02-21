<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroView from './views/HeroView.vue'
import ShotenView from './views/ShotenView.vue'
import BoastView from './views/BoastView.vue'
import Footer from './components/Footer.vue'

const isMenuOpen = ref(false)

// Method to toggle menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
  <div class="w-full h-screen">
    <NavBar :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />
    <main class="px-8 sm:px-20">
      <HeroView :isMenuOpen="isMenuOpen" />
    </main>
    <ShotenView />
    <BoastView />
    <Footer />
  </div>
</template>
