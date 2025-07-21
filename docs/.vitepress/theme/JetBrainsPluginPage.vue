<script setup lang="ts">
import TrustedBySection from "./components/TrustedBySection.vue";
import CallForReviewSection from "./components/CallForReviewSection.vue";
import RoadmapSection from "./components/jetbrains/RoadmapSection.vue";
import PluginSection from "./components/jetbrains/PluginSection.vue";
import ShowcaseSection from "./components/jetbrains/ShowcaseSection.vue";
</script>

<template>
  <main class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 page">
    <section class="hero text-center pt-20 pb-16 px-4">
      <h1 class="hero__title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        AsyncAPI Plugin for IntelliJ-based IDEs 🚀
      </h1>
      <p class="hero__description max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
        This plugin transforms your IDE into a powerful editor for AsyncAPI specifications, offering real-time assistance and preview capabilities
      </p>
    </section>
    <ShowcaseSection />
    <PluginSection />
    <RoadmapSection />
    <CallForReviewSection />
    <TrustedBySection />
  </main>
</template>

<style scoped>
.page {
  font-family: 'Inter', sans-serif;
}
</style>