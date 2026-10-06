<script setup lang="ts">
import { articles } from '../../../data/products'
</script>

<template>
  <section class="articles py-16 px-4 md:px-8 lg:px-16 xl:px-24">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Read more</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a v-for="a in articles" :key="a.url" :href="a.url" rel="noopener" class="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ a.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-1">{{ a.summary }}</p>
        </a>
      </div>
    </div>
  </section>
</template>
