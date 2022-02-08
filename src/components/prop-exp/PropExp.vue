<script default>
import { ref, reactive } from "vue";
import Hello from "./Hello.vue";

const refSimple = ref("String");
const refObj = ref({ name: "Evan" });
const reactiveObj = reactive({ lastName: "Schultz" });
</script>

<template>
  <div>
    <h2>Expiremets with Props</h2>
    <Hello />
  </div>
</template>
