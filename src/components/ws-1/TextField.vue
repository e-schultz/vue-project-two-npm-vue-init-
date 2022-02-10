<script setup>
defineProps(["modelValue", "name", "placeholder", "label"]);
defineEmits(["update:modelValue"]);
import BaseInput from "./BaseInput.vue";
</script>
<template>
  <BaseInput
    :label="label"
    :modelValue="modelValue"
    :name="name"
    :placeholder="placeholder"
    type="text"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
  <!--<div>
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
  </div>-->
</template>
