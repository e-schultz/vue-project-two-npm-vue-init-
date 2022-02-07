<!-- 
at this point - we are starting to need to copy-paste some code
any time we want to have a dynamic form 

we can start to refactor this out into a `useDynamicForm` 
-- start of composables

-->
<script setup>
import { reactive } from "vue";
import TextInput from "@/components/step2/TextInput.vue";
import SelectList from "@/components/step2/SelectList.vue";
import BulletList from "@/components/step2/BulletList.vue";
/*
be sure to pass defineProps and defineEmits an array - had 
const props = defineProps("firstName", "lastName", "modelValue"); - didn't notice
and the error message was
"Uncaught (in promise) TypeError: Cannot assign to read only property '0' of string 'f'
    at normalizePropsOptions (runtime-core.esm-bundler.js:3388:26)" -- took me a moment to catch
*/
const props = defineProps(["firstName", "lastName", "modelValue"]);
const emit = defineEmits(["update:firstName", "update:lastName", "update:modelValue"]);

let componentMap = {
  TextInput,
  SelectList,
  BulletList,
};
let simpleForm = reactive([
  {
    block: "TextInput",
    props: {
      label: "First Name",
      name: "firstName",
      modelValue: props.firstName,
    },
  },
  {
    block: "TextInput",
    props: {
      label: "Last Name",
      name: "lastName",
      modelValue: props.lastName,
    },
  },
]);

let handleModelUpdate = (field, value) => {
  /* @update:modelValue - getting the value, not event */
  let { firstName, lastName, modelValue, ...rest } = props;
  // emit(`update:${field}`, value);
  emit(`update:modelValue`, { ...modelValue, [field]: value });
};
</script>
<template>
  <component
    v-for="({ block, props }, idx) in simpleForm"
    :is="componentMap[block]"
    v-bind="props"
    @update:modelValue="handleModelUpdate(props.name, $event)"
  />

  <ul>
    <li>firstName: {{ modelValue?.firstName }}</li>
    <li>lastName: {{ modelValue?.lastName }}</li>
  </ul>
</template>
