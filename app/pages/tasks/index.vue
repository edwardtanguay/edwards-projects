<script setup>
import tasks from "../../../parseddata/tasks.json";

const currentTasks = [...tasks.filter(task => task.stage === "current"), ...tasks.filter(task => task.stage === "paused")];
const upcomingTasks = tasks.filter(task => task.stage === "upcoming").sort((a, b) => b.rank - a.rank);
const finishedTasks = tasks.filter(task => task.stage === "finished").sort((a, b) => (a.endDateTime < b.endDateTime ? 1 : -1));

</script>

<template>
    <h2 class="text-[1.2rem] font-bold">Current tasks:</h2>
    <div v-for="task in currentTasks"
         :key="task.id">
        <Task :task="task" />
    </div>

    <h2 class="text-[1.2rem] font-bold mt-3">Upcoming tasks:</h2>
    <div v-for="task in upcomingTasks"
         :key="task.id">
        <Task :task="task" />
    </div>

    <h2 class="text-[1.2rem] font-bold mt-3">Finished tasks:</h2>
    <div v-for="task in finishedTasks"
         :key="task.id">
        <Task :task="task" />
    </div>
</template>
