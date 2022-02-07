<script setup>
import { reactive, ref, computed, isRef } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import CheckBox from "./CheckBox.vue";
import RadioGroup from "./RadioGroup.vue";

const props = defineProps(["field", "formData"]);
const emit = defineEmits(["update:modelValue", "update:formValue", "delete:formModel"]);
const components = { TextField, SelectList, CheckBox, RadioGroup };

const schemaCondition = computed(
  () => {
    const condition = props.field.condition;
    const formData = props.formData;
    let result = true;
    if (!condition) return true;

    if (typeof condition === "function") {
      result = condition(formData);
    } else if (condition.modelEq) {
      result = formData[condition.modelEq.model] === condition.modelEq.value;
    }
    if (!result) {
      emit("delete:formModel", props.field.model);
    }
    return result;
  },
  {
    onTrack(e) {
      console.log("track", e);
    },
    onTrigger(e) {
      console.log("trigger", e);
    },
  }
);
</script>
<template>
  <component
    :is="components[field.component]"
    v-model="props.formData[field.model]"
    @update:modelValue="$emit('update:formValue', field.model, $event)"
    v-bind="field.props"
    v-if="schemaCondition"
  />
</template>
