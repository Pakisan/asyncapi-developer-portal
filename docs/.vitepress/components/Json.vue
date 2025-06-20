<script setup lang="ts">
import {JsonViewer} from "vue3-json-viewer";
// Import CSS from local styles directory instead of node_modules
import "../styles/json-viewer.css";
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