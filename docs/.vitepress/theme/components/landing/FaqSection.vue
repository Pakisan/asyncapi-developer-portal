<script setup lang="ts">
import { faq } from '../../../data/products'
</script>

<template>
  <section class="faq py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Frequently asked questions</h2>
      <div v-for="item in faq" :key="item.q" class="mb-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">{{ item.q }}</h3>
        <p class="text-gray-600 dark:text-gray-400">{{ item.a }}</p>
      </div>
    </div>
  </section>
</template>
