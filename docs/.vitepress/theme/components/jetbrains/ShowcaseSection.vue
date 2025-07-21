<script setup lang="ts">
import {onMounted} from "vue";

const images = {
  'Autocomplete': '/jetbrains-plugin/features/autocomplete.gif',
  'Preview': '/jetbrains-plugin/features/preview.gif',
  'Split': '/jetbrains-plugin/features/split.gif',
  'Validate': '/jetbrains-plugin/features/validate.gif',
};

onMounted(() => {
  const showcaseImage = document.getElementById('showcase-image');
  const selectorButtons = document.querySelectorAll('.showcase__selector-item');
  selectorButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectorButtons.forEach(btn => {
        btn.classList.remove('showcase__selector-item--active');
        btn.classList.add('text-gray-500', 'dark:text-gray-400');
      });
      button.classList.add('showcase__selector-item--active');
      button.classList.remove('text-gray-500', 'dark:text-gray-400');
      const key = button.querySelector('span:last-child').textContent.trim();
      showcaseImage.src = images[key];
      showcaseImage.alt = `${key} preview`;
    });
  });
})
</script>

<template>
  <section class="showcase pt-12 pb-16 px-4 md:px-8 lg:px-16 xl:px-24">
    <div class="showcase__content bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl mx-auto max-w-[1120px]">
      <!-- max-w-[1120px] max-h-[731px] overflow-hidden -->
      <img alt="Preview" class="w-full h-auto rounded-t-xl max-w-[1120px] max-h-[731px] overflow-hidden"
           id="showcase-image" src="/jetbrains-plugin/features/preview.gif"/>
      <div class="showcase__selector p-4 flex justify-center">
        <div class="bg-gray-100 dark:bg-gray-900 p-1 rounded-lg flex space-x-1 border border-gray-200 dark:border-gray-700">
          <button class="showcase__selector-item flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium showcase__selector-item--active">
            <span class="material-icons text-base">preview</span>
            <span>Autocomplete</span>
          </button>
          <button class="showcase__selector-item flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium showcase__selector-item--active">
            <span class="material-icons text-base">preview</span>
            <span>Preview</span>
          </button>
          <button class="showcase__selector-item flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400">
            <span class="material-icons text-base">link</span>
            <span>Split</span>
          </button>
          <button class="showcase__selector-item flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400">
            <span class="material-icons text-base">verified</span>
            <span>Validate</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>