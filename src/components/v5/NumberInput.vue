<template>
  <div>
    <label>{{ label }}</label>
    <input
      type="number"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  name: "NumberInput",
  props: ["placeholder", "label", "name", "modelValue"],
};
</script>
