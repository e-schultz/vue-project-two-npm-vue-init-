<script setup>
defineProps(["modelValue", "label"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div>
    <label>
      <input
        type="checkbox"
        :checked="modelValue"
        @input="$emit('update:modelValue', $event.target.checked)"
      />
      {{ label }}
    </label>
  </div>
</template>
