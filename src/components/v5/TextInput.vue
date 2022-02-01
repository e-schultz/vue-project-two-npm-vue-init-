<script setup>
import BaseInput from "../BaseInput.vue";
let props = defineProps(["placeholder", "label", "name", "modelValue"]);

defineEmits(["update:modelValue"]);
/*
export default {
  name: 'TextInput',
  // props: ['placeholder', 'label', 'name', 'value']
  props: ['placeholder', 'label', 'name', 'modelValue']
}*/
</script>

<template>
  <BaseInput
    type="text"
    :label="label"
    :name="name"
    :placeholder="placeholder"
    :modelValue="modelValue"
    @input="$emit('update:modelValue:a:b:c', $event.target.value)"
  />

  <!--    <input
      type="text"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    -->
  <!-- was 
:value="value" -- becomes -- :value="modelValue"
@input="$emit('input',$event.target.value)"  -- becomes - @input="$emit('update:modelValue', $event.target.value)"

--></template>
