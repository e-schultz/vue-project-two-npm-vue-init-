<template>
  <!--
    https://staging.vuejs.org/guide/components/events.html#usage-with-v-model
    -->
  <div>
    {{ formData }}
    <component
      v-for="(field, index) in schema"
      :key="index"
      :is="field.fieldType"
      :modelValue="formData[field.name]"
      @update:modelValue="updateForm(field.name, $event)"
      v-bind="field"
    >
    </component>
    <!--
        @input="updateForm(field.name, $event)"
        -->
  </div>
</template>

<script>
import NumberInput from "./NumberInput.vue";
import SelectList from "./SelectList.vue";
import TextInput from "./TextInput.vue";
import UserName from "../UserName.vue";
export default {
  name: "FormGenerator",
  components: { NumberInput, SelectList, TextInput, UserName },
  props: ["schema", "modelValue"],
  data() {
    return {
      formData: this.modelValue || {},
    };
  },
  methods: {
    test(x, y, z) {
      console.log("test", x.target.value, y, z);
    },
    updateForm(fieldName, value) {
      console.log(fieldName, value);
      // this.$set(this.formData, fieldName, value);
      this.formData[fieldName] = value;
      //this.$emit("input", this.formData);
      this.$emit("update:modelValue", this.formData);
    },
  },
};
</script>
