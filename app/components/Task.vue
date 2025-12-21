<script setup>
defineProps({
	task: Object
});
</script>

<template>
	<p>
		<span class="font-semibold">{{ task.projectIdCode }}:</span> <span>[{{ task.stage }}] [{{ task.kind }}] {{
			task.title
		}}
			<span v-if="task.beginDateTime && task.endDateTime">({{ task.beginDateTime }} - {{ task.endDateTime
			}})</span>
			<span v-if="task.branch != ''"
				  class="code"> (branch: {{ task.branch }})</span>
			<span class="rank"> (rank: {{ task.rank }})</span></span>
	</p>
</template>

<style scoped>
.code {
	color: brown;
	font-family: 'Courier New', Courier, monospace;
	font-size: small;
}
.rank {
	color: navy;
	font-family: 'Courier New', Courier, monospace;
	font-size: small;
}
</style>
