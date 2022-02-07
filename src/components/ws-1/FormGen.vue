<script setup>
import { reactive, ref } from "vue";
import FormField from "./FormField.vue";

const props = defineProps(["schema"]);
const emits = defineEmits(["update:modelValue", "update:formValue"]);
const formData = ref({});

function removeField(fieldName) {
  delete formData.value[fieldName];
}
</script>
<template>
  <div>
    <FormField
      v-for="(field, index) in schema"
      :field="field"
      v-bind="$attrs"
      :formData="formData"
      @delete:formModel="removeField"
      @update:formValue="$emit('update:modelValue', formData)"
    />
    <div>
      {{ formData }}
    </div>
  </div>
</template>
