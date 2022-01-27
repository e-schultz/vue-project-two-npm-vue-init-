<script setup>
const props = defineProps({
  message: String,
});
</script>
<template>
  <h1>{{ message }}</h1>
</template>
<style scoped>
h1 {
  border: 1px solid black;
}
</style>
