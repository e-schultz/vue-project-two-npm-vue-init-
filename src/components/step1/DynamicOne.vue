<script setup>
defineProps(["firstName", "lastName"]);
defineEmits(["dynamicOne"]);
</script>
<template>
  <section>
    <h1>Dynamic Component One</h1>
    <p>Hello {{ firstName }} {{ lastName }}</p>
    <button @click="$emit('dynamicOne', 'upperCase')">Upper Case</button>
  </section>
</template>
