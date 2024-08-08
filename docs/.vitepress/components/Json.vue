<script setup lang="ts">
import {JsonViewer} from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";
import { ref, onMounted } from "vue"

const props = defineProps({
  url: {
    type: String,
    required: true
  }
})

const json = ref<any>({"status": "loading"});
onMounted(async () => {
  const response = await fetch(props.url);
  json.value = await response.json();
});
</script>

<template>
  <JsonViewer :value="json" copyable theme="dark"/>
</template>

<style scoped>
</style>