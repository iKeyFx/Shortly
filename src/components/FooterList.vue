<script setup>
const features = [
  { text: 'Link Shortening', href: '#' },
  { text: 'Branded Links', href: '#' },
  { text: 'Analytics', href: '#' },
]

const resources = [
  { text: 'Blog', href: '#' },
  { text: 'Developers', href: '#' },
  { text: 'Support', href: '#' },
]

const company = [
  { text: 'About', href: '#' },
  { text: 'Our Team', href: '#' },
  { text: 'Careers', href: '#' },
  { text: 'Contact', href: '#' },
]
</script>
<template>
  <div class="flex flex-col sm:flex-row gap-8 md:gap-12 text-center sm:text-left">
    <!-- Features Section -->
    <div>
      <h3 class="text-white font-bold mb-3">Features</h3>
      <ul class="space-y-3">
        <li v-for="item in features" :key="item.text">
          <a :href="item.href" class="text-neutral-gray hover:text-primary-cyan transition-colors">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Resources Section -->
    <div>
      <h3 class="text-white font-bold mb-3">Resources</h3>
      <ul class="space-y-3">
        <li v-for="item in resources" :key="item.text">
          <a :href="item.href" class="text-neutral-gray hover:text-primary-cyan transition-colors">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Company Section -->
    <div>
      <h3 class="text-white font-bold mb-3">Company</h3>
      <ul class="space-y-3">
        <li v-for="item in company" :key="item.text">
          <a :href="item.href" class="text-neutral-gray hover:text-primary-cyan transition-colors">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
