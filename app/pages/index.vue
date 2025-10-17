<script setup>
import projects from "../../parseddata/projects.json";
</script>

<template>
  <p class="text-xl mb-3">There are {{ projects.length }} projects:</p>
  <div
    v-for="(project, idx) in projects"
    :key="project.suuid"
    class="flex flex-col gap-1 p-3 mb-3 w-fit bg-slate-500 rounded"
  >
    <p>{{ project.idCode }}</p>
  </div>
</template>
