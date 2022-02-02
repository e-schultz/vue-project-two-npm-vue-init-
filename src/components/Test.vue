<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          rose: colors.rose,
        },
      },
    },
  }
  ```
-->
<template>
  <div class="flow-root">
    <ul role="list" class="-mb-8">
      <li v-for="(activityItem, activityItemIdx) in activity" :key="activityItem.id">
        <div class="relative pb-8">
          <span
            v-if="activityItemIdx !== activity.length - 1"
            class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
          <div class="relative flex items-start space-x-3">
            <!--<component :is="getType(activityItem.type)" :activityItem="activityItem" />-->
          </div>
        </div>
      </li>
    </ul>
    <ul role="list" class="-mb-8">
      <li v-for="(activityItem, activityItemIdx) in blocks" :key="activityItem.id">
        <div class="relative pb-8">
          <span
            v-if="activityItemIdx !== activity.length - 1"
            class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
          <div class="relative flex items-start space-x-3">
            <ActivityBlock :activityItem="activityItem" />
            <!--
            <template v-if="activityItem.blocks && activityItem.blocks.length">
              <component :is="activityItem.type" :activityItem="activityItem">
                <template v-for="(block, blockIndex) in activityItem.blocks">
                  <component :is="block.type" v-bind="block.props" />
                </template>
              </component>
            </template>
            <template v-else>
              <component :is="activityItem.type" :activityItem="activityItem" />
            </template>-->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ChatAltIcon, TagIcon, UserCircleIcon } from "@heroicons/vue/solid";
import ActivityComment from "./ActivityComment.vue";
import ActivityAssignment from "./ActivityAssignment.vue";
import ActivityTags from "./ActivityTags.vue";
import ActivityTag from "./ActivityTag.vue";
import ActivityBlock from "./ActivityBlock.vue";
const activity = [
  {
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6d ago",
  },
  {
    id: 2,
    type: "assignment",
    person: { name: "Hilary Mahy", href: "#" },
    assigned: { name: "Kristin Watson", href: "#" },
    date: "2d ago",
  },
  {
    id: 3,
    type: "tags",
    person: { name: "Hilary Mahy", href: "#" },
    tags: [
      { name: "Bug", href: "#", color: "bg-rose-500" },
      { name: "Accessibility", href: "#", color: "bg-indigo-500" },
    ],
    date: "6h ago",
  },
  {
    id: 4,
    type: "comment",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "2h ago",
  },
];

const blocks = [
  {
    id: 1,
    type: "ActivityComment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6d ago",
  },
  {
    id: 2,
    type: "ActivityAssignment",
    person: { name: "Hilary Mahy", href: "#" },
    assigned: { name: "Kristin Watson", href: "#" },
    date: "2d ago",
  },
  {
    id: 3,
    type: "ActivityTags",
    person: { name: "Hilary Mahy", href: "#" },
    blocks: [
      {
        type: "ActivityTag",
        props: { name: "Bug", href: "#", color: "bg-rose-500" },
      },
      {
        type: "ActivityTag",
        props: { name: "Accessibility", href: "#", color: "bg-indigo-500" },
      },
    ],
    tags: [
      { name: "Bug", href: "#", color: "bg-rose-500" },
      { name: "Accessibility", href: "#", color: "bg-indigo-500" },
    ],
    date: "6h ago",
  },
  {
    id: 4,
    type: "ActivityComment",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "2h ago",
  },
];
export default {
  components: {
    ChatAltIcon,
    TagIcon,
    UserCircleIcon,
    ActivityComment,
    ActivityAssignment,
    ActivityTags,
    ActivityTag,
    ActivityBlock,
  },
  methods: {
    getType: function (t) {
      switch (t) {
        case "comment":
          return "ActivityComment";

        case "assignment":
          return "ActivityAssignment";

        case "tags":
          return "ActivityTags";
      }
    },
  },
  setup() {
    return {
      activity,
      blocks,
    };
  },
};
</script>
