<script setup>
defineProps(["activityItem"]);
import ActivityComment from "./ActivityComment.vue";
import ActivityAssignment from "./ActivityAssignment.vue";
import ActivityTags from "./ActivityTags.vue";
import ActivityTag from "./ActivityTag.vue";

const components = {
  ActivityComment,
  ActivityAssignment,
  ActivityTag,
  ActivityTags,
};
</script>
<template>
  <template v-if="activityItem.blocks && activityItem.blocks.length">
    <component :is="components[activityItem.type]" :activityItem="activityItem">
      <template v-for="(block, blockIndex) in activityItem.blocks">
        <component :is="components[block.type]" v-bind="block.props" />
      </template>
    </component>
  </template>
  <template v-else>
    <component :is="components[activityItem.type]" :activityItem="activityItem" />
  </template>
</template>
