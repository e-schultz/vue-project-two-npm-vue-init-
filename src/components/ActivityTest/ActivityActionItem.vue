<template>
  <div>
    <div class="relative px-1">
      <div
        class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center"
      >
        <slot name="activityIcon"></slot>
      </div>
    </div>
  </div>
  <div class="min-w-0 flex-1 py-1.5">
    <div class="text-sm leading-8 text-gray-500">
      <slot>Activity Content</slot>
    </div>
  </div>
</template>
