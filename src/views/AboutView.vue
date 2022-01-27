<script setup>
import { ref } from "vue";
import DynamicOne from "../components/DynamicOne.vue";
import DynamicTwo from "../components/DynamicTwo.vue";
// these are available to access within the template
const aboutTitle = "Welcome to the Workshop";
const buttonText = "Click Me";
const showWhich = ref("DynamicOne");
const components = {
  DynamicOne,
  DynamicTwo,
};
</script>
<template>
  <div class="about">
    <h1>{{ aboutTitle }}</h1>
    <p>
      <button @click="showWhich = 'DynamicOne'">Show One</button> |
      <button @click="showWhich = 'DynamicTwo'">Show Two</button>
    </p>
    <p>
      <DynamicTwo :message="aboutTitle" />
    </p>
    <h2>Swap Components Dynamically</h2>
    <component :is="components[showWhich]" :message="aboutTitle"></component>
    <p></p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
