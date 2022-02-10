<script setup>
import { ref, reactive } from "vue";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import BaseInput from "./BaseInput.vue";
import UserName from "./UserName.vue";
const props = defineProps({
  message: String,
});
const log = (e) => console.log(e);
const value = ref("test value");
const firstName = ref("Evan");
const lastName = ref("Schulltz");
</script>
<template>
  <div>
    <BaseInput v-model="value" />
    <UserName
      v-model:first-name="firstName"
      v-model:last-name="lastName"
      @update:modelValue:x="log($event)"
    />
  </div>
</template>
<style scoped>
h1 {
  border: 1px solid black;
}
</style>
