<script setup>
import Card from '@/components/Card.vue'
import BrandIcon from '@/assets/images/icon-brand-recognition.svg'
import iconFully from '@/assets/images/icon-detailed-records.svg'
import iconDetail from '@/assets/images/icon-fully-customizable.svg'
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios'
import UrlShotenerForm from '@/components/UrlShotenerForm.vue'

const featureCards = [
  {
    title: 'Brand Recognition',
    description:
      'Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content.',
    icon: BrandIcon,
  },
  {
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    icon: iconDetail,
  },
  {
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: iconFully,
  },
]

const API_KEY = import.meta.env.VITE_TINY_API_KEY

const isEmpty = ref(false)
const isInvalidUrl = ref(false)
const errorMessage = ref('')
const form = reactive({
  inputLink: '',
  shortenURL: '',
  dataURL: '',
})

const urlResultsRef = ref(null)

const isValidUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch (error) {
    return false
  }
}

const handleLinkSubmit = async () => {
  // Reset error states
  isEmpty.value = false
  isInvalidUrl.value = false
  errorMessage.value = ''

  // Check if input is empty
  if (!form.inputLink || form.inputLink.trim() === '') {
    isEmpty.value = true
    errorMessage.value = 'Please add a link'
    return
  }

  // Validate URL format
  if (!isValidUrl(form.inputLink)) {
    isInvalidUrl.value = true
    errorMessage.value = 'Please enter a valid URL'
    return
  }

  try {
    const response = await axios.post(
      'https://api.tinyurl.com/create',
      {
        url: form.inputLink,
        domain: 'tinyurl.com',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    )

    urlResultsRef.value.addNewResult(response.data.data.url, response.data.data.tiny_url)

    // Clear form and errors after success
    form.inputLink = ''
    form.shortenURL = ''
    form.dataURL = ''
  } catch (error) {
    isInvalidUrl.value = true
    errorMessage.value = error.response?.data?.message || 'Failed to shorten URL. Please try again.'
    console.error('Error shortening URL:', error)
  }
}
// onMounted(async () => )
// const handleLinkSubmit = async () => {
//   if (!form.inputLink || form.inputLink === '') {
//     isEmpty.value = true
//   } else {
//     isEmpty.value = false

//     // try {
//     //   const response = await axios.post('https://cleanuri.com/api/v1/shorten', {
//     //     url: form.inputLink,
//     //   })
//     //   console.log(response.data)
//     // } catch (error) {
//     //   console.error('Error shortening Url', error)
//     // }

// }
</script>

<template>
  <section class="relative bg-neutral-gray px-8 py-10 sm:px-20 sm:pb-36">
    <!-- URL Shortener Form  -->
    <div
      class="bg-primary-dark-violet bg-url-mobile bg-cover bg-center bg-no-repeat sm:bg-url-desktop rounded-xl transform -translate-y-3/4"
    >
      <div class="p-8">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="w-full sm:w-4/5">
            <div class="h-full flex flex-col justify-start">
              <input
                v-model="form.inputLink"
                type="text"
                placeholder="Shorten a link here..."
                :class="[
                  isEmpty || isInvalidUrl ? 'border-2 border-red-500' : '',
                  'w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500',
                ]"
              />
              <p v-if="errorMessage" class="text-red-500 mt-1">{{ errorMessage }}</p>
            </div>
          </div>
          <button
            @click="handleLinkSubmit"
            class="w-full sm:w-1/5 bg-cyan-500 text-white font-bold py-3 rounded-lg transition-opacity duration-300 hover:opacity-50 h-[46px]"
          >
            Shorten It!
          </button>
        </div>
      </div>
    </div>

    <!-- URL Response -->
    <UrlShotenerForm :form="form" ref="urlResultsRef" />

    <div class="flex flex-col space-y-20 sm:space-y-16">
      <!-- Statistics Heading  -->
      <div class="space-y-3 flex flex-col items-center">
        <h3 class="text-neutral-very-dark-violet text-2xl font-bold sm:text-3xl">
          Advanced Statistics
        </h3>
        <p class="text-neutral-grayish-violet text-center sm:w-2/4">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>

      <!-- Statistics Box  -->
      <div class="relative">
        <div
          class="absolute top-0 left-1/2 h-full w-2 bg-primary-cyan -translate-x-1/2 lg:w-full lg:h-2 lg:top-1/2"
        />

        <div
          class="relative grid gap-4 sm:gap-8 text-center sm:text-left lg:grid-cols-3 space-y-20 sm:space-y-0"
        >
          <div>
            <Card v-bind="featureCards[0]" />
          </div>
          <div class="sm:translate-y-8">
            <Card v-bind="featureCards[1]" class="sm:mt-8" />
          </div>
          <div class="sm:translate-y-8">
            <Card v-bind="featureCards[0]" class="sm:mt-16" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
