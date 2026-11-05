<script setup lang="ts">
const cases = [
  { title: 'Document brokers and queues', text: 'Describe Apache Kafka, AMQP, MQTT, Amazon SNS and SQS, NATS and 15 more brokers correctly the first time with examples for every binding.', link: '/bindings/', cta: 'Browse bindings' },
  { title: 'Get docs from Spring Messaging code', text: 'Generate AsyncAPI from your Spring listeners and templates, so the documentation follows the source instead of drifting from it.', link: '/jetbrains-plugin/frameworks/', cta: 'Spring support' },
  { title: 'Write and validate AsyncAPI', text: 'Edit with completion, live validation, Spectral or Redocly linting and JSON Schemas, in or outside a JetBrains IDE.', link: '/schemas/registry.html', cta: 'Use the schema registry' },
  { title: 'Validate and generate with AI agents', text: 'Give agents and LLMs the exact JSON Schema for your AsyncAPI version and bindings, so what they generate is valid.', link: '/schemas/registry.html#use-it-with-ai-agents-and-llms', cta: 'How agents use it' },
  { title: 'Split large documents', text: 'Decompose a big document into files with references, and preview one server, channel, message or operation at a time.', link: '/jetbrains-plugin/typed-components/', cta: 'Typed components' },
]
</script>

<template>
  <section class="use-cases py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">What do you want to do with AsyncAPI?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="c in cases" :key="c.title" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ c.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">{{ c.text }}</p>
          <a class="text-sky-500 dark:text-sky-400 font-semibold" :href="c.link">{{ c.cta }} →</a>
        </div>
      </div>
    </div>
  </section>
</template>
