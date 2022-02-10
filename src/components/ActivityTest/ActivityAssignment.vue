<script setup>
defineProps(["activityItem"]);
import { UserCircleIcon } from "@heroicons/vue/solid";
import ActivityActionItem from "./ActivityActionItem.vue";
</script>
<template>
  <ActivityActionItem>
    <template #activityIcon>
      <UserCircleIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
    </template>
    <a :href="activityItem.person.href" class="font-medium text-gray-900">{{
      activityItem.person.name
    }}</a>
    assigned
    <a :href="activityItem.assigned.href" class="font-medium text-gray-900">{{
      activityItem.assigned.name
    }}</a>

    <span class="whitespace-nowrap">{{ activityItem.date }}</span>
  </ActivityActionItem>
  <!--
  <div>
    <div class="relative px-1">
      <div
        class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center"
      >
        <UserCircleIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
      </div>
    </div>
  </div>
  <div class="min-w-0 flex-1 py-1.0">
    <div class="text-sm leading-8 text-gray-500">
      <a :href="activityItem.person.href" class="font-medium text-gray-900">{{
        activityItem.person.name
      }}</a>
      {{ " " }}
      assigned
      {{ " " }}
      <a :href="activityItem.assigned.href" class="font-medium text-gray-900">{{
        activityItem.assigned.name
      }}</a>
      {{ " " }}
      <span class="whitespace-nowrap">{{ activityItem.date }}</span>
    </div>
  </div>
  -->
</template>
