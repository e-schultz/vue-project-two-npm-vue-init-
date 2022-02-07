<script setup>
defineProps(["multi", "options", "name", "label", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div>
    <label
      >{{ label }}
      <select
        class="mt-1 w-full"
        :multiple="multi"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option value="" disabled>Select One</option>
        <option v-for="option in options" :key="option">
          {{ option }}
        </option>
      </select>
    </label>
  </div>
</template>
