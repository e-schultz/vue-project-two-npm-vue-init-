<template>
  <div>
    <label>{{label}}</label>

    <input type="text"
           :name="name"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           :placeholder="placeholder
           ">
<!-- was 
:value="value" -- becomes -- :value="modelValue"
@input="$emit('input',$event.target.value)"  -- becomes - @input="$emit('update:modelValue', $event.target.value)"

-->
  </div>
</template>
<script>
export default {
  name: 'TextInput',
  // props: ['placeholder', 'label', 'name', 'value']
  props: ['placeholder', 'label', 'name', 'modelValue']
}
</script>