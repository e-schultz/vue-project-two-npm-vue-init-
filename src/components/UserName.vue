<script setup>
import BaseInput from "./BaseInput.vue";
import { useAttrs } from "vue";
const attrs = useAttrs();
console.log(attrs);
let x = "firstName";
defineProps({
  firstName: String,
  lastName: String,
});

let emit = defineEmits([
  "update:firstName",
  "update:lastName",
  "update:modelValue",
  "input",
]);
</script>

<template>
  <div>
    <BaseInput
      type="text"
      label="First Name"
      v-model="firstName"
      @input="$emit('update:modelValue', { firstName: $event.target.value, lastName })"
    />
    <BaseInput
      label="Last Name"
      type="text"
      v-model="lastName"
      @input="$emit('update:modelValue', { firstName, lastName: $event.target.value })"
    />
  </div>
</template>
