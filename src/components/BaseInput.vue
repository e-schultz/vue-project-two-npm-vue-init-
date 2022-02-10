<script setup>
const props = defineProps(["label", "modelValue", "placeholder"]);
const emits = defineEmits(["update:modelValue"]);
let blocks = [
  {
    blockType: "input",
  },
];
</script>
<template>
  <label class="block">
    <span class="text-gray-700">{{ label }}</span>
    <input
      v-bind="$attrs"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
