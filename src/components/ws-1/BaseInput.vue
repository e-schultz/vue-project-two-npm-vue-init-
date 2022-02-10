<script setup>
defineProps(["modelValue", "name", "placeholder", "label"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <label
    >{{ label }}

    <input
      class="mt-1 block w-full"
      v-bind="$attrs"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
  </label>
</template>
<script>
export default {
  inheritAttrs: false,
};
</script>
