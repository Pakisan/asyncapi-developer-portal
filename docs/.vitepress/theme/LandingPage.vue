<script setup lang="ts">

import TrustedBySection from "./components/TrustedBySection.vue";
import CallForFeedbackSection from "./components/CallForFeedbackSection.vue";
import SponsorMeSection from "./components/SponsorMeSection.vue";
import DriftSection from "./components/landing/DriftSection.vue";
import AuthorSection from "./components/landing/AuthorSection.vue";
import UseCasesSection from "./components/landing/UseCasesSection.vue";
import ArticlesSection from "./components/landing/ArticlesSection.vue";
import FaqSection from "./components/landing/FaqSection.vue";
import ProductList from "./components/landing/ProductList.vue";
</script>

<template>
  <main class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 page">
    <section class="hero text-center pt-20 pb-16 px-4">
      <h1 class="hero__title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Self-maintaining AsyncAPI: keep your API declaration and implementation in sync</h1>
      <div class="hero__description max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 relative h-12">
        <p class="slide absolute w-full inset-0">From source code: AsyncAPI generated from Spring Messaging code, with drift flagged in the IDE</p>
        <p class="slide absolute w-full inset-0">From brokers and queues: Kurkik compares live Kafka, Pulsar, SNS and SQS with your document (coming soon)</p>
        <p class="slide absolute w-full inset-0">The contract: JSON Schemas that let editors, CI and AI agents validate every change</p>
        <p class="slide absolute w-full inset-0">The foundation: free bindings and schemas docs, plus open-source JAsyncAPI</p>
      </div>
    </section>
    <DriftSection />
    <AuthorSection />
    <ProductList />
    <UseCasesSection />
    <TrustedBySection />
    <ArticlesSection />
    <FaqSection />
    <SponsorMeSection />
    <CallForFeedbackSection />
  </main>
</template>

<style scoped>
.slide {
  animation: fade 16s infinite;
  opacity: 0;
}
@keyframes fade {
  0%, 20%, 100% { opacity: 0 }
  5%, 15% { opacity: 1 }
}
.slide:nth-child(1) { animation-delay: 0s; }
.slide:nth-child(2) { animation-delay: 4s; }
.slide:nth-child(3) { animation-delay: 8s; }
.slide:nth-child(4) { animation-delay: 12s; }
</style>