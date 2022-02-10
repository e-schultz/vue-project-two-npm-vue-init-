<!--
https://staging.vuejs.org/guide/components/events.html#usage-with-v-model
-->
<script setup>
defineProps(["name", "modelValue", "placeholder", "label"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div>
    <label>{{ label }}</label>

    <input
      type="text"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>
