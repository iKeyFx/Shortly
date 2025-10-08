<script setup>
import { ref, onMounted } from 'vue'

const urlResults = ref([])

onMounted(() => {
  const savedResults = localStorage.getItem('shortenedUrls')
  if (savedResults) {
    urlResults.value = JSON.parse(savedResults)
  }
})

const addNewResult = (dataURL, shortenURL) => {
  urlResults.value.unshift({
    dataURL,
    shortenURL,
    copied: false,
  })

  localStorage.setItem('shortenedUrls', JSON.stringify(urlResults.value))
}

const copyToClipboard = (index) => {
  const result = urlResults.value[index]
  navigator.clipboard.writeText(result.shortenURL)
  result.copied = true

  setTimeout(() => {
    result.copied = false
  }, 2000)
}
defineProps({
  form: {
    type: Object,
    required: true,
  },
})

defineExpose({
  addNewResult,
})
</script>

<template>
  <div class="url-results">
    <div
      v-for="(result, index) in urlResults"
      :key="index"
      class="bg-white rounded-lg mb-8"
      :class="{ '-mt-28 sm:-mt-16': index === 0 }"
    >
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 space-y-3 sm:space-y-0"
      >
        <div class="text-neutral-very-dark-violet truncate border-b sm:border-0 pb-3 sm:pb-0">
          {{ result.dataURL }}
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <span class="text-primary-cyan">{{ result.shortenURL }}</span>
          <button
            @click="copyToClipboard(index)"
            :class="[
              'text-white px-6 py-2 rounded-lg transition-opacity duration-300',
              result.copied ? 'bg-primary-dark-violet' : 'bg-primary-cyan hover:opacity-50',
            ]"
          >
            {{ result.copied ? 'Copied!' : 'Copy' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
