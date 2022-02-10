<template>
  <!--
    https://staging.vuejs.org/guide/components/events.html#usage-with-v-model
    -->
  <div>
    {{ formData }} - {{ counter }}
    <component
      v-for="(field, index) in schema"
      :key="index"
      :is="field.fieldType"
      :modelValue="formData[field.name]"
      @update:modelValue="updateForm(field.name, $event)"
      @input="test($event, field.name)"
      v-bind="field"
    >
    </component>
    <!--
        @input="updateForm(field.name, $event)"
        -->
  </div>
</template>

<script>
// recursive tree
// handle children properly
// also thinking about - more than just forms, some things don't need models to update/etc
// alternativley, could UserName also make use of the dynamic forms
import NumberInput from "./NumberInput.vue";
import SelectList from "./SelectList.vue";
import TextInput from "./TextInput.vue";
import UserName from "../UserName.vue";
import { ref } from "vue";
export default {
  name: "FormGenerator",
  components: { NumberInput, SelectList, TextInput, UserName },
  props: ["schema", "modelValue"],
  data() {
    return {
      formData: this.modelValue || {},
      counter: 5,
    };
  },
  setup() {
    const counter = ref(0);
    return {
      counter,
    };
  },
  methods: {
    test(x, y, z) {
      console.log("test", x.target.value, y, z);
    },
    updateForm(fieldName, value) {
      console.log("updateForm", fieldName, value);
      // this.$set(this.formData, fieldName, value);
      this.formData[fieldName] = value;
      //this.$emit("input", this.formData);
      this.$emit("update:modelValue", this.formData);
    },
  },
};
</script>
