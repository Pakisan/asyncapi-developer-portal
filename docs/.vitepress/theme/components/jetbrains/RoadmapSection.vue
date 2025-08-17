<script setup lang="ts">
let implementedFeatures = [
  {name: "Spectral linter integration", date: "Aug 17, 2025", description: "", isFree: false},
  {name: "Redocly linter integration", date: "Jul 26, 2025", description: "", isFree: false},
  {name: "Own implementation of FileEditor", date: "May 20, 2025", description: "", isFree: true},
  {name: "Support more local references file types", date: "Dec 03, 2024", description: "", isFree: true},
  {name: "Support .yml and single quotes", date: "Sep 02, 2024", description: "", isFree: true},
  {name: "Improve MultiFormat Schema support", date: "Apr 11, 2024", description: "", isFree: true},
  {name: "AsyncAPI v3 support", date: "Dec 15, 2023", description: "", isFree: true},
  {name: "AsyncAPI v2.6.0 support", date: "Sep 01, 2023", description: "", isFree: true},
  {name: "AsyncAPI v2.5.0 support & Avro Schema support", date: "Oct 16, 2022", description: "", isFree: true},
  {name: "AsyncAPI v2.4.0 support & Autocompletion", date: "Jul 20, 2022", description: "", isFree: true},
  {name: "AsyncAPI v2.1.0, v2.2.0, v2.3.0 support", date: "Apr 10, 2022", description: "", isFree: true},
  {name: "Implementation of preview in internal or external browser", date: "Oct 21, 2021", description: "", isFree: true},
]

let upcomingFeatures = [
  {name: "AsyncAPI linter integration", date: "ETA: Q2 2025", description: "", isFree: false},
  {name: "Edit AsyncAPI trough UI", date: "ETA: Q3 2025", description: "", isFree: false},
]
</script>

<template>
  <section class="roadmap py-16 px-4 md:px-8 lg:px-16 xl:px-24">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Roadmap</h2>
      <div class="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
        <div class="absolute w-3 h-3 bg-sky-500 rounded-full -left-[7px]"></div>
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-4">Upcoming Features</h3>
          <div class="space-y-8">
            <div v-for="feature in upcomingFeatures" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md opacity-70">
              <div class="flex justify-between items-start mb-2">
                <div>
                  <h4 class="text-lg font-semibold">{{ feature.name }}</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ feature.date }}</p>
                </div>
                <span v-if="feature.isFree" class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">Free</span>
                <span v-else class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">Paid</span>
              </div>
              <p class="text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
            </div>
          </div>
        </div>
        <div class="absolute w-3 h-3 bg-sky-500 rounded-full -left-[7px] top-1.5"></div>
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-4">Implemented</h3>
          <div class="space-y-8">
            <div v-for="feature in implementedFeatures" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div class="flex justify-between items-start mb-2">
                <div>
                  <h4 class="text-lg font-semibold">{{ feature.name }}</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ feature.date }}</p>
                </div>
                <span v-if="feature.isFree" class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">Free</span>
                <span v-else class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">Paid</span>
              </div>
              <p class="text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>