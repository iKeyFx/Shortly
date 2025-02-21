<script setup>
import FacebookLogo from '@/assets/images/icon-facebook.svg'
import TwitterLogo from '@/assets/images/icon-twitter.svg'
import PinterestLogo from '@/assets/images/icon-pinterest.svg'
import InstagramLogo from '@/assets/images/icon-instagram.svg'
import Logo from '@/assets/images/logo.svg'
import FooterList from './FooterList.vue'

const socialMedia = [
  { name: 'Facebook', icon: FacebookLogo, href: '#' },
  { name: 'Twitter', icon: TwitterLogo, href: '#' },
  { name: 'Pinterest', icon: PinterestLogo, href: '#' },
  { name: 'Instagram', icon: InstagramLogo, href: '#' },
]
</script>

<template>
  <footer class="bg-neutral-very-dark-violet">
    <div class="container mx-auto px-4 py-8 sm:px-10 sm:py-10 md:px-16 md:py-16">
      <div class="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-8">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img :src="Logo" alt="Logo" class="h-8 filter brightness-0 invert" />
        </div>

        <!-- Navigation Links -->
        <FooterList />
        <!-- Social Media Links -->
        <div class="flex-shrink-0">
          <ul class="flex gap-5">
            <li v-for="social in socialMedia" :key="social.name">
              <a :href="social.href" class="block transition-colors group">
                <img
                  :src="social.icon"
                  :alt="`${social.name} icon`"
                  class="h-6 w-6 group-hover:[filter:brightness(0)_saturate(100%)_invert(59%)_sepia(98%)_saturate(437%)_hue-rotate(130deg)_brightness(97%)_contrast(101%)]"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
