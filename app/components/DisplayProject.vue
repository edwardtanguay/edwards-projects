<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "@@/app/types";

defineProps({
  project: {
    type: Object as () => Project,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  shortInfo: {
    type: String,
    required: true,
  },
});

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div class="mb-2">
    <div class="flex gap-2 items-center">
      <div :class="[
        isVisible ? 'py-2 px-4 border-b border-dashed border-slate-400' : 'px-2 pb-1',
      ]"
           class="flex flex-col gap-1 w-fit bg-slate-300 rounded-t cursor-pointer"
           @click="toggleVisibility">
        <div class="whitespace-nowrap"
             :class="{ 'font-bold': isVisible, 'pt-1': !isVisible }">
          {{ project.title }}
        </div>
      </div>
      <ShortInfo v-show="!isVisible"
                 :category="category"
                 :shortInfo="shortInfo" />
    </div>
    <div class="bg-slate-300 px-4 py-2 rounded-b w-full md:w-fit md:min-w-160 rounded-tr"
         v-show="isVisible">
      <ShortInfo v-show="isVisible"
                 :category="category"
                 :shortInfo="shortInfo"
                 :showAll="true" />
      <img v-if="project.mainImage"
           class="mt-1 mb-1 shadow-gray-500 shadow-md"
           :src="project.mainImage" />
      <img v-if="!project.mainImage"
           class="mt-1 mb-1 shadow-gray-400 shadow-md"
           src="/images/general/no-image.jpg" />
      <!-- live -->
      <p class="flex gap-1">
        <span class="label">live:</span>
        <template v-if="project.live.startsWith('http')">
          <a class="underline line-clamp-1"
             target="_blank"
             :href="project.live">{{
              project.live
            }}</a>
        </template>
        <template v-else-if="project.live !== ''">
          <span class="italic">({{ project.live }})</span>
        </template>
        <template v-else>
          <span>(not yet published)</span>
        </template>
      </p>

      <!-- repo -->
      <p class="flex gap-1">
        <span class="label">repo:</span>
        <template v-if="project.repo !== 'none'">
          <a class="underline line-clamp-1"
             target="_blank"
             :href="project.repo">{{
              project.repo
            }}</a>
        </template>
        <template v-else>
          <span>(not yet created)</span>
        </template>
      </p>
    </div>
  </div>
</template>

<style>
.label {
  font-weight: bold;
  font-variant: small-caps;
  color: #333;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
</style>
