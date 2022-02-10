<script setup>
import { reactive } from "vue";
import TextInput from "@/components/step2/TextInput.vue";
import SelectList from "@/components/step2/SelectList.vue";
import BulletList from "@/components/step2/BulletList.vue";
let formModel = reactive({
  userFirstName: "Evan",
  userLastName: "Sch",
  preferredAnimal: "cats",
});

let componentMap = {
  TextInput,
  SelectList,
  BulletList,
};
let simpleForm = reactive([
  {
    block: "TextInput",
    name: "userFirstName",
    props: {
      label: "First Name",
      name: "userFirstName",
      modelValue: formModel.userFirstName,
    },
  },
  {
    block: "TextInput",
    name: "userLastName",
    props: {
      label: "Last Name",
      name: "userLastName",
      modelValue: "",
    },
  },
  {
    block: "SelectList",
    name: "preferredAnimal",
    props: {
      label: "Preferred Animal",
      name: "preferredAnimal",
      modelValue: "cats",
      options: ["cats", "dogs", "none"],
    },
  },
  {
    block: "BulletList",
    name: "bulletList",
    props: {
      content: [
        {
          title: "Item 1",
        },
        {
          title: "Item 2",
          content: [
            {
              title: "Item 2-1",
            },
          ],
        },
      ],
    },
  },
]);

let handleModelUpdate = (fieldName, value) => {
  console.log("we got", { fieldName, value });
  let x = simpleForm.find((n) => n.name == fieldName);
  x.props.modelValue = value;
  formModel[fieldName] = value;
};
</script>
<template>
  <section>
    <h2>Step 2</h2>
    <component
      v-for="({ block, props }, idx) in simpleForm"
      :is="componentMap[block]"
      v-bind="props"
      @update:modelValue="handleModelUpdate(props.name, $event)"
    />
    <p>Hello {{ formModel?.userFirstName }} {{ formModel?.userLastName }}</p>
    <p>you like {{ formModel?.preferredAnimal }}</p>
  </section>
</template>
