<script setup>
const props = defineProps(["label", "modelValue", "placeholder"]);
const emits = defineEmits(["update:modelValue"]);
</script>
<template>
  <label class="block">
    <!-- {{ $attrs }} - {{ $props }} -->
    <span class="text-gray-700">x{{ label }}</span>
    <input
      v-bind="$attrs"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
