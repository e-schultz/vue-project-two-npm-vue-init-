<script setup>
import BaseInput from "./BaseInput.vue";
let x = "firstName";
defineProps({
  firstName: String,
  lastName: String,
});

let emit = defineEmits([
  "update:firstName",
  "update:lastName",
  "update:modelValue",
  "update:modelValue:x",
]);
/*let doStuff = (e, x, y, z) => {
  console.log("doStuff", e, x, y, z);
  emit("update:lastName", e);
};
let doStuffx = (e, x, y, z) => {
  console.log(e, x, y, z);
  emit("update:firstName", e);
};
let test = (event, value) => {
  console.log("what", event.target.value, value);
  emit(`update:${value}`, event.target.value);
};*/
</script>

<template>
  <div>
    <BaseInput
      type="text"
      v-model="firstName"
      @input="$emit('update:modelValue:x', { firstName: $event.target.value, lastName })"
    />
    <BaseInput
      type="text"
      v-model="lastName"
      @input="$emit('update:modelValue:y', { firstName, lastName: $event.target.value })"
    />
  </div>
</template>
