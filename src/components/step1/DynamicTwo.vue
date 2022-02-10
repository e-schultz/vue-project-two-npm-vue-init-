<script setup>
defineProps(["firstName", "lastName", "title"]);
defineEmits(["dynamicTwo"]);
</script>
<template>
  <section>
    <h1>Dynamic Component Two</h1>
    <p>Hello {{ title }} {{ firstName }} {{ lastName }}</p>
    <button @click="$emit('dynamicTwo', 'lowerCase')">Lower Case</button>
  </section>
</template>
