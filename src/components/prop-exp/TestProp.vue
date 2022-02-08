<script setup>
import { isRef, isReactive } from "vue";
const props = defineProps(["reactiveObj", "refSimple", "refObj"]);
defineEmits(["reactiveObjClicked", "refObjClicked", "refSimpleClicked"]);
/*
interesting - this can end up 'shadowing' the props from the template
- could be useful
- could bite in the butt, good to know
- stick with using props. to be safe for now I guess

const reactiveObj = props.reactiveObj;
const refSimple = props.refSimple;
const refObj = props.refObj;

//const { reactiveObj, refSimple, refObj } = props;

console.log({ refSimple, isRef: isRef(refSimple), isReactive: isReactive(refSimple) });
console.log({ refObj, isRef: isRef(refObj), isReactive: isReactive(refObj) });
console.log({
  reactiveObj,
  isRef: isRef(reactiveObj),
  isReactive: isReactive(reactiveObj),
});*/
</script>
<template>
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
      <td>
        <button @click="$emit('refSimpleClicked', 't refSimple prop click')">
          Click
        </button>
      </td>
    </tr>

    <tr>
      <td>refObj</td>
      <td>{{ isRef(refObj) }}</td>
      <td>{{ isReactive(refObj) }}</td>
      <td>{{ refObj.name }}</td>
      <!--<td><button @click="refObj.name = 'Test'">Click</button></td>-->
      <td><button @click="$emit('refObjClicked', 't test prop click')">Click</button></td>
    </tr>

    <tr>
      <td>reactiveObj</td>
      <td>{{ isRef(reactiveObj) }}</td>
      <td>{{ isReactive(reactiveObj) }}</td>
      <td>{{ reactiveObj.lastName }}</td>
      <!--<td><button @click="reactiveObj.lastName = 'Test'">Click</button></td>-->
      <td>
        <button @click="$emit('reactiveObjClicked', 't test prop click')">Click</button>
      </td>
    </tr>
  </table>
</template>
<!-- when thinking this through, kinda makes sense 
- if I had created an object, or an array - not reactive / ref - and passed it down as a prop
    - children could mutate it
- if I had created a string, number, boolean - and passed it down
    - children can't mutate it, and vue will complain if I try and update a prop
- replacing the thing vs assigning a value
- ref(Simple) - 
-->

<!-- misc note to keep in mind
passing objects from parent to cild, can allow the child to change the prop and mutate it

in most cases, we would rather emit events up to indicate the change

however, in some components if they are meant to be tightly bound/coupled - this might be ok

Mutating Object / Array Props#
When objects and arrays are passed as props, while the child component cannot mutate the prop binding, 
it will be able to mutate the object or array's nested properties. This is because in JavaScript objects and arrays are passed by reference, and it is unreasonably expensive for Vue to prevent such mutations.

> The main drawback of such mutations is that it allows the child component to affect 
> parent state in a way that isn't obvious to the parent component, potentially making 
> it more difficult to reason about the data flow in the future. As a best practice, 
> you should avoid such mutations unless the parent and child are tightly coupled by design. 
> In most cases, the child should emit an event to let the parent perform the mutation.
-->
