<script setup>
import { ref, reactive, isRef, isReactive } from "vue";
import TestProp from "./TestProp.vue";

const refSimple = ref("String");
const refObj = ref({ name: "Evan" });
const reactiveObj = reactive({ lastName: "Schultz" });
const doThing = (value) => {
  console.log(refSimple);
  refSimple.value = value;
};
</script>

<template>
  <div>
    <h2>Expiremets with Props</h2>
  </div>
  <TestProp
    :refSimple="refSimple"
    :refObj="refObj"
    :reactiveObj="reactiveObj"
    @reactiveObjClicked="(e) => (reactiveObj.lastName = e)"
    @refObjClicked="(e) => (refObj.name = e)"
    @refSimpleClicked="doThing"
  />

  <section>
    <h2>Hrmm</h2>
    <table>
      <tr>
        <th>prop</th>
        <th>isRef</th>
        <th>isReactive</th>
        <th>Value</th>
        <th></th>
      </tr>

      <tr>
        <td>refSimple</td>
        <td>{{ isRef(refSimple) }}</td>
        <td>{{ isReactive(isReactive) }}</td>
        <td>{{ refSimple }}</td>
        <td><button @click="refSimple = 'p click from propexp'">Click</button></td>
      </tr>

      <tr>
        <td>refObj</td>
        <td>{{ isRef(refObj) }}</td>
        <td>{{ isReactive(refObj) }}</td>
        <td>{{ refObj.name }}</td>
        <td><button @click="refObj.name = 'p click from propexp'">Click</button></td>
      </tr>

      <tr>
        <td>reactiveObj</td>
        <td>{{ isRef(reactiveObj) }}</td>
        <td>{{ isReactive(reactiveObj) }}</td>
        <td>{{ reactiveObj.lastName }}</td>
        <td>
          <button @click="reactiveObj.lastName = 'p click from propexp'">Click</button>
        </td>
      </tr>
    </table>
  </section>
</template>
