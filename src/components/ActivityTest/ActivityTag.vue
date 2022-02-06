<script setup>
defineProps(["name", "href", "color"]);
</script>
<template>
  <a
    :href="href"
    class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
  >
    <span class="absolute flex-shrink-0 flex items-center justify-center">
      <span :class="[color, 'h-1.5 w-1.5 rounded-full']" aria-hidden="true" />
    </span>
    <span class="ml-3.5 font-medium text-gray-900">{{ name }}</span>
  </a>
  {{ " " }}
</template>
