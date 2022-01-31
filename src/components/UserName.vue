<script setup>
import BaseInput from "./BaseInput.vue";
let x = "firstName";
defineProps({
  firstName: String,
  lastName: String,
});

let emit = defineEmits(["update:firstName", "update:lastName"]);
let doStuff = (e, x, y, z) => {
  console.log("doStuff", e, x, y, z);
  emit("update:lastName", e);
};
let doStuffx = (e, x, y, z) => {
  console.log(e, x, y, z);
  emit("update:firstName", e);
};
let test = (event, value) => {
  emit(`update:${value}`, event.target.value);
};
</script>

<template>
  {{ $attrs }}
  <BaseInput type="text" v-model="firstName" @input="(e) => test(e, 'firstName')" />
  <BaseInput type="text" v-model="lastName" @update:modelValue="doStuff" />
</template>
