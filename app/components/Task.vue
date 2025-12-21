<script setup>
defineProps({
	task: Object
});
</script>

<template>
	<p>
		<span class="font-semibold">{{ task.projectIdCode }}:</span> <span>[{{ task.stage }}] [{{ task.kind }}] {{
			task.title
		}} ({{ task.beginDateTime }} - {{ task.endDateTime }})</span>
	</p>
</template>
