<script setup>
defineProps(["modelValue", "name", "placeholder", "label"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div>
    <label
      >{{ label }}

      <input
        class="mt-1 block w-full"
        type="text"
        :name="name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>
