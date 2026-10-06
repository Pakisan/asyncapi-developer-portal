<script setup lang="ts">
import { products, type ProductStatus } from '../../../data/products'

const groups = ['IDE & editors', 'Code & automation', 'Reference'] as const

const badge: Record<ProductStatus, string> = {
  available: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  freemium: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300',
  announced: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
}
</script>

<template>
  <section id="tools" class="products-list py-16 px-4 md:px-8 lg:px-16 xl:px-24">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Tools for every step of AsyncAPI work</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
        Write, validate, document and generate AsyncAPI for Kafka, AMQP, MQTT, SNS, SQS and more, in the IDE you already use.
      </p>
      <div v-for="group in groups" :key="group" class="mb-12">
        <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{{ group }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article
            v-for="p in products.filter((x) => x.group === group)"
            :key="p.id"
            class="product-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
          >
            <div class="flex justify-between items-start gap-3 mb-2">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white">{{ p.name }}</h4>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap" :class="badge[p.status]">{{ p.statusLabel }}</span>
            </div>
            <p class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ p.tagline }}</p>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ p.summary }}</p>
            <ul class="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-6 space-y-1 flex-grow">
              <li v-for="f in p.features" :key="f">{{ f }}</li>
            </ul>
            <div class="flex flex-wrap gap-x-6 gap-y-2 mt-auto">
              <a class="text-sky-500 dark:text-sky-400 font-semibold flex items-center" :href="p.page">
                <span>{{ p.status === 'announced' ? 'Read more' : 'Learn more' }}</span>
                <span class="material-icons ml-1">arrow_forward</span>
              </a>
              <a v-if="p.installUrl && p.group !== 'Reference'" class="text-sky-500 dark:text-sky-400 font-semibold" :href="p.installUrl" rel="noopener">Get it</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
