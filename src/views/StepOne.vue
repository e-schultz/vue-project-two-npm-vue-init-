<!-- 
https://stackoverflow.com/questions/64820762/vue-define-event-handlers-in-array-of-dynamic-components
-->
<script setup>
import { ref, reactive } from "vue";
import DynamicOne from "../components/step1/DynamicOne.vue";
import DynamicTwo from "../components/step1/DynamicTwo.vue";

const components = {
  DynamicOne,
  DynamicTwo,
};

const showWhich = ref("DynamicTwo");

const person = reactive({
  title: "Mr",
  firstName: "Evan",
  lastName: "Schultz",
});

const switchCase = (toCase) => {
  if (toCase === "upperCase") {
    person.title = person.title.toUpperCase();
    person.firstName = person.firstName.toUpperCase();
    person.lastName = person.lastName.toUpperCase();
  } else {
    person.title = person.title.toLowerCase();
    person.firstName = person.firstName.toLowerCase();
    person.lastName = person.lastName.toLowerCase();
  }
};
let test = {
  dynamicOne: (e) => switchCase(e),
  dynamicTwo: (e) => switchCase(e),
};
</script>
<template>
  <div>
    <button @click="showWhich = 'DynamicOne'">Show Component One</button>

    <button @click="showWhich = 'DynamicTwo'">Show Component Two</button>

    <component :is="components[showWhich]" v-bind="person" v-on="test" />
  </div>
</template>
