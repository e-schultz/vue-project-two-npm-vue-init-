<script setup>
import { reactive, ref } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import FormField from "./FormField.vue";

const props = defineProps(["schema"]);
const emits = defineEmits(["update:modelValue", "update:formValue"]);

const components = { TextField, SelectList };
const formData = ref({});
function removeField(fieldName) {
  delete formData.value[fieldName];
}
</script>
<template>
  <div>
    <template v-for="(field, index) in schema">
      <FormField
        :field="field"
        v-bind="$attrs"
        :formData="formData"
        @delete:formModel="removeField"
      />
      <!--  <component
        :is="components[field.component]"
        v-model="formData[field.model]"
        @update:modelValue="$emit('update:formValue', field.model, $event)"
        v-bind="field.props"
        v-if="schemaCondition(field)"
      />-->
    </template>
    {{ formData }}
  </div>
</template>
