<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "@@/app/types";

defineProps({
	project: {
		type: Object as () => Project,
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
			<div
			:class="[isVisible ? 'py-2 px-4 border-b border-dashed border-slate-400' : 'px-2 pb-1']"
				class="flex flex-col gap-1 w-fit bg-slate-300 rounded-t cursor-pointer"
				@click="toggleVisibility"
			>
				<div :class="{'font-bold': isVisible}">{{ project.title }}</div>
			</div>
			<div class="flex items-center gap-1 italic pb-1">
				<template v-if="project.mode === 'active'">
					<div class="pt-1">
						<svg class="w-5 h-5 animate-spin-slow" viewBox="0 0 24 24" fill="#333">
							<path
								d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"
							/>
						</svg>
					</div>
				</template>
				<span>{{ project.status }}</span>
			</div>
		</div>
		<div class="bg-slate-300 px-4 py-2 rounded-b min-w-[40rem] min-h-[10rem] w-fit rounded-tr" v-show="isVisible">
		<p>repo: <a class="underline" target="_blank" :href="project.repo">{{ project.repo }}</a></p>
		</div>
	</div>
</template>

<style scoped>
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
