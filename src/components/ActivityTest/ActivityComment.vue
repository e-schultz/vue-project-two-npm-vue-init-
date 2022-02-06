<script setup>
import { ChatAltIcon } from "@heroicons/vue/solid";
defineProps(["activityItem"]);
</script>
<template>
  <div class="relative">
    <img
      class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
      :src="activityItem.imageUrl"
      alt=""
    />

    <span class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
      <ChatAltIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
    </span>
  </div>
  <div class="min-w-0 flex-1">
    <div>
      <div class="text-sm">
        <a :href="activityItem.person.href" class="font-medium text-gray-900">{{
          activityItem.person.name
        }}</a>
      </div>
      <p class="mt-0.5 text-sm text-gray-500">Commented {{ activityItem.date }}</p>
    </div>
    <div class="mt-2 text-sm text-gray-700">
      <p>
        {{ activityItem.comment }}
      </p>
    </div>
  </div>
</template>
