<script setup lang="ts">

import TrustedBySection from "./components/TrustedBySection.vue";
import CallForFeedbackSection from "./components/CallForFeedbackSection.vue";
import SponsorMeSection from "./components/SponsorMeSection.vue";
import ProductList from "./components/landing/ProductList.vue";
</script>

<template>
  <main class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 page">
    <section class="hero text-center pt-20 pb-16 px-4">
      <h1 class="hero__title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">One triad for those who are working with the AsyncAPI specification</h1>
      <div class="hero__description max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 relative h-12">
        <p class="slide absolute w-full inset-0">Plugin to transform your JetBrains IDE into a powerful AsyncAPI editor</p>
        <p class="slide absolute w-full inset-0">LSP server to transform any IDE into a powerful AsyncAPI editor</p>
        <p class="slide absolute w-full inset-0">Java bindings to bring AsyncAPI into your JVM application</p>
        <p class="slide absolute w-full inset-0">Developer portal with Protocol Bindings, Schemas &amp; Security</p>
      </div>
    </section>
    <ProductList />
    <SponsorMeSection />
    <TrustedBySection />
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