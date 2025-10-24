<script setup>
import _projects from "../../parseddata/projects.json";

const activeProjects = _projects.filter((project) =>
  project.categories.some((category) => category.id_code === "active")
);
const upcomingProjects = _projects.filter((project) =>
  project.categories.some((category) => category.id_code === "upcoming")
);
const liveProjects = _projects.filter((project) =>
  project.categories.some((category) => category.id_code === "live")
);
const showcaseProjects = _projects.filter((project) =>
  project.categories.some((category) => category.id_code === "showcase")
);
</script>

<template>
  <div class="flex flex-col gap-2 mt-4">
    <div v-if="activeProjects.length">
      <h2 class="text-2xl font-bold mb-3">Active Projects</h2>
      <DisplayProject
        v-for="project in activeProjects"
        :key="project.suuid"
        :category="`active`"
        :project="project"
        :short_info="
          project.categories.find((category) => category.id_code === 'active').short_info
        "
      />
    </div>

    <div v-if="upcomingProjects.length">
      <h2 class="text-2xl font-bold mb-3">Upcoming Projects</h2>
      <DisplayProject
        v-for="project in upcomingProjects"
        :key="project.suuid"
        :category="`upcoming`"
        :project="project"
        :short_info="
          project.categories.find((category) => category.id_code === 'upcoming')
            .short_info
        "
      />
    </div>

    <div v-if="liveProjects.length">
      <h2 class="text-2xl font-bold mb-3">Live and in Production</h2>
      <DisplayProject
        v-for="project in liveProjects"
        :key="project.suuid"
        :title="``"
        :category="`live`"
        :project="project"
        :short_info="
          project.categories.find((category) => category.id_code === 'live').short_info
        "
      />
    </div>

    <div v-if="showcaseProjects.length">
      <h2 class="text-2xl font-bold mb-3">Showcases</h2>
      <DisplayProject
        v-for="project in showcaseProjects"
        :key="project.suuid"
        :title="``"
        :category="`showcase`"
        :project="project"
        :short_info="
          project.categories.find((category) => category.id_code === 'showcase')
            .short_info
        "
      />
    </div>
  </div>
</template>
