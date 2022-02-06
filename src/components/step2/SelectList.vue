<template>
  <div>
    <label>{{ label }}</label>
    <select
      :multiple="multi"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled value="">Please Select One</option>
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "SelectList",
  props: ["multi", "options", "name", "label", "modelValue"],
};
</script>
