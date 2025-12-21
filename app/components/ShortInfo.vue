<script setup lang="ts">
defineProps({
  category: {
    type: String,
    required: true,
  },
  shortInfo: {
    type: String,
    required: true,
  },
  showAll: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="flex items-start gap-1 italic pb-1">
    <template v-if="category === 'active'">
      <div class="pt-1">
        <SpinGear />
      </div>
    </template>
    <span :class="{ 'line-clamp-1': !showAll, 'first-letter:uppercase': showAll }">{{
      shortInfo
    }}</span>
  </div>
</template>
