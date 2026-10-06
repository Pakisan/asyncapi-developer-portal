<script setup lang="ts">
</script>

<template>
  <section id="drift" class="drift py-16 px-4 md:px-8 lg:px-16 xl:px-24">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">AsyncAPI drift, caught from both sides</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
        An AsyncAPI document is a promise. Code changes, topics get added, queues get reconfigured, and the promise quietly stops being true.
        These tools compare the declaration with what actually runs, and keep it correct.
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
          <span class="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">From source code</span>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">The JetBrains plugin</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            Generates the AsyncAPI document from your Spring Messaging code and flags listener mistakes in the editor. When the code changes, the
            document is regenerated and the difference is yours to review, not something to remember.
          </p>
          <a class="text-sky-500 dark:text-sky-400 font-semibold" href="/jetbrains-plugin/">See the plugin →</a>
        </div>
        <div class="bg-sky-50 dark:bg-gray-900 border border-sky-200 dark:border-sky-900 p-6 rounded-lg flex flex-col">
          <span class="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">The contract</span>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">One AsyncAPI document</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            The single place that says what your system does. Validated against the AsyncAPI JSON Schemas by editors, CI pipelines and AI agents,
            so every automated change to it stays valid.
          </p>
          <a class="text-sky-500 dark:text-sky-400 font-semibold" href="/schemas/registry.html">Use the schema registry →</a>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
          <span class="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">From brokers and queues</span>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Kurkik <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 align-middle">Coming soon</span></h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            Reads the live Kafka, Pulsar, SNS or SQS system, shows where it differs from the document, and applies fixes only as a plan you approve.
          </p>
          <a class="text-sky-500 dark:text-sky-400 font-semibold" href="/kurkik/">Read about Kurkik →</a>
        </div>
      </div>
      <p class="mt-10 text-gray-600 dark:text-gray-400 max-w-3xl">
        This is the direction I've been building toward for years: self-maintaining APIs, where the declaration and the implementation stay in
        step and an agent can propose the fix. The free bindings and schemas documentation, the schema registry and the JAsyncAPI library are the
        foundation under it.
      </p>
    </div>
  </section>
</template>
