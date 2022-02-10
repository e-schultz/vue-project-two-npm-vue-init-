<script setup>
import BulletChild from "./BulletList.vue";
defineProps(["content"]);
</script>
<template>
  <ul class="list-disc list-outside pl-5">
    <li v-for="block in content">
      {{ block.title }}
      <template v-if="block.content"
        ><component :is="BulletChild" :content="block.content"> </component>
      </template>
    </li>
  </ul>
</template>
