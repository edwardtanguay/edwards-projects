<script setup>
import tasks from "../../../parseddata/tasks.json";
</script>

<template>
    <h2 class="text-2xl font-bold">Tasks</h2>
    <div v-for="task in tasks" :key="task.id">
        <p>
            <span class="font-semibold">{{ task.projectIdCode }}:</span> <span>{{ task.title }}</span>
        </p>
    </div>
</template>
