<script setup>
const props = defineProps(["label", "modelValue"]);
const emits = defineEmits(["update:modelValue"]);
</script>
<template>
  <label class="block">
    {{ $attrs }} - {{ $props }}
    <span class="text-gray-700">{{ label }}</span>
    <input
      type="text"
      xclass="mt-1 block w-full"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
