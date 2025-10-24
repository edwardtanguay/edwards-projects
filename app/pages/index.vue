<script setup>
import _projects from "../../parseddata/projects.json";
import * as qstr from "@@/app/qtools/qstr";

const activeProjects = _projects.filter((project) => project.mode === "active");
const planningProjects = _projects.filter((project) => project.mode === "planning");
const stableProjects = _projects.filter((project) => project.mode === "stable");
const closedProjects = _projects.filter((project) => project.mode === "closed");
</script>

<template>
  <template v-if="activeProjects.length &gt; 0">
    <h2 class="text-2xl font-bold mb-3">
      {{ qstr.smartPlural(activeProjects.length, "Active Projects") }}
    </h2>
    <DisplayProject
      v-for="project in activeProjects"
      :key="project.suuid"
      :project="project"
    />
  </template>

  <template v-if="planningProjects.length &gt; 0">
    <h2 class="text-2xl font-bold mb-3">
      {{ qstr.smartPlural(planningProjects.length, "Projects") }} in Planning
    </h2>
    <DisplayProject
      v-for="project in planningProjects"
      :key="project.suuid"
      :project="project"
    />
  </template>

  <template v-if="stableProjects.length &gt; 0">
    <h2 class="text-2xl font-bold mb-3">
      {{ qstr.smartPlural(stableProjects.length, "Stable Paused Projects") }}
    </h2>
    <DisplayProject
      v-for="project in stableProjects"
      :key="project.suuid"
      :project="project"
    />
  </template>

  <template v-if="closedProjects.length &gt; 0">
    <h2 class="text-2xl font-bold mb-3">
      {{ qstr.smartPlural(closedProjects.length, "Closed Projects") }}
    </h2>
    <DisplayProject
      v-for="project in closedProjects"
      :key="project.suuid"
      :project="project"
    />
  </template>
</template>
