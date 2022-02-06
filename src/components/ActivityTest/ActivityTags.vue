<script setup>
defineProps(["activityItem"]);
import { TagIcon } from "@heroicons/vue/solid";
</script>
<template>
  <div>
    <div class="relative px-1">
      <div
        class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center"
      >
        <TagIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
      </div>
    </div>
  </div>
  <div class="min-w-0 flex-1 py-0">
    <div class="text-sm leading-8 text-gray-500">
      <span class="mr-0.5">
        <a :href="activityItem.person.href" class="font-medium text-gray-900">{{
          activityItem.person.name
        }}</a>
        {{ " " }}
        added tags
      </span>
      {{ " " }}
      <span class="mr-0.5">
        <slot>
          <template v-for="tag in activityItem.tags" :key="tag.name">
            <a
              :href="tag.href"
              class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
            >
              <span class="absolute flex-shrink-0 flex items-center justify-center">
                <span
                  :class="[tag.color, 'h-1.5 w-1.5 rounded-full']"
                  aria-hidden="true"
                />
              </span>
              <span class="ml-3.5 font-medium text-gray-900">{{ tag.name }}</span>
            </a>
            {{ " " }}
          </template>
        </slot>
      </span>
      <span class="whitespace-nowrap">{{ activityItem.date }}</span>
    </div>
  </div>
</template>
