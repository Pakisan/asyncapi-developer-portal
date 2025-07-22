<script setup lang="ts">

</script>

<template>
  <section class="products-list py-16 px-4 md:px-8 lg:px-16 xl:px-24">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Specification</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="product-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">AsyncAPI Bindings</h3>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Released</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
              Everything you should to now about AsyncAPI bindings <br><br>
              This is a polished version of the original Bindings with a lot of improvements and fixes.
            </p>
            <a class="text-sky-500 dark:text-sky-400 font-semibold flex items-center mt-auto" href="/bindings/">
              <span>Learn More</span>
              <span class="material-icons ml-1">arrow_forward</span>
            </a>
          </div>
          <div class="product-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">AsyncAPI Schemas</h3>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Released</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
              Everything you should to now about AsyncAPI Data and Security schemas <br><br>
              This is a polished version of the original Bindings with a lot of improvements and fixes.
            </p>
            <a class="text-sky-500 dark:text-sky-400 font-semibold flex items-center mt-auto" href="/schemas/">
              <span>Learn More</span>
              <span class="material-icons ml-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">IDE & Code Editors</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="product-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">JetBrains Plugin</h3>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Released</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
              Enhance your AsyncAPI development workflow directly within IntelliJ IDEA, Android Studio, and other JetBrains IDEs
            </p>
            <a class="text-sky-500 dark:text-sky-400 font-semibold flex items-center mt-auto" href="/jetbrains-plugin.html">
              <span>Learn More</span>
              <span class="material-icons ml-1">arrow_forward</span>
            </a>
          </div>
          <div class="product-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">AsyncAPI LSP</h3>
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Work in progress</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">AsyncAPI Language Server implementation</p>
<!--            <a class="text-sky-500 dark:text-sky-400 font-semibold flex items-center mt-auto" href="#">-->
<!--              <span>Learn More</span>-->
<!--              <span class="material-icons ml-1">arrow_forward</span>-->
<!--            </a>-->
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Code</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="product-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">JAsyncAPI</h3>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Released</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
              /jay-sync-api/ is a Java code-first tool for AsyncAPI specification
            </p>
            <a class="text-sky-500 dark:text-sky-400 font-semibold flex items-center mt-auto" href="https://github.com/asyncapi/jasyncapi">
              <span>Learn More</span>
              <span class="material-icons ml-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>