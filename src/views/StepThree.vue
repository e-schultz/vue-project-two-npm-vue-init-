<script setup>
import { reactive } from "vue";
import TextInput from "@/components/step3/TextInput.vue";
import SelectList from "@/components/step3/SelectList.vue";
import BulletList from "@/components/step3/BulletList.vue";
import UserDetails from "@/components/step3/UserDetails.vue";
let formModel = reactive({
  userDetails: {},
  preferredAnimal: "cats",
});

let componentMap = {
  TextInput,
  SelectList,
  BulletList,
  UserDetails,
};
let simpleForm = reactive([
  {
    block: "UserDetails",
    props: {
      name: "userDetails",
      modelValue: {
        firstName: "",
        lastName: "",
      },
      /*
      playing around with multi v-model expirement, neat for now - but might not dig into this
      for the workshop ...
      tbd

      firstName: "Evan",
      lastName: "Schultz",
      "onUpdate:firstName": (e) => handleModelUpdate("firstName", e),
      "onUpdate:lastName": (e) => handleModelUpdate("lastName", e),*/
    },
  },
  {
    block: "SelectList",
    props: {
      label: "Preferred Animal",
      name: "preferredAnimal",
      modelValue: "cats",
      options: ["cats", "dogs", "none"],
    },
  },
]);

let handleModelUpdate = (fieldName, value) => {
  let x = simpleForm.find((n) => n.props.name == fieldName);
  x.props.modelValue = value;
  formModel[fieldName] = value;
};
</script>
<template>
  <section>
    <h2>Step 3</h2>
    <component
      v-for="({ block, props }, idx) in simpleForm"
      :is="componentMap[block]"
      v-bind="props"
      @update:modelValue="handleModelUpdate(props.name, $event)"
    />
    <p>Hello {{ formModel?.userFirstName }} {{ formModel?.userLastName }}</p>
    <p>you like {{ formModel?.preferredAnimal }}</p>
    <p>{{ formModel }}</p>
  </section>
</template>
