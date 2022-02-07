<script setup>
import { reactive, ref } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
defineProps(["schema"]);
defineEmits(["update:modelValue", "update:formValue"]);
const components = { TextField, SelectList };
const formData = ref({});
</script>
<template>
  <template v-for="(field, index) in schema">
    <component
      :is="components[field.component]"
      v-model="formData[field.model]"
      @update:modelValue="$emit('update:formValue', field.model, $event)"
      v-bind="field.props"
    />
  </template>
</template>
