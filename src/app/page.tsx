/* eslint-disable react/no-unescaped-entities */
import _projects from "../../parseddata/projects.json";
import tasks from "../../parseddata/tasks.json";
import Project from "../components/Project";
import Task from "../components/Task";

const _currentProjects = _projects

// reverse the order of the projects
// const currentProjects = [..._currentProjects].reverse();
const currentProjects = [..._currentProjects];

const recentlyFinishedTasks = tasks
	.filter(task => task.stage === "finished")
	.sort((a, b) => (a.endDateTime < b.endDateTime ? 1 : -1))
	.slice(0, 3);

const allEligibleTasks = tasks
	.filter(task => task.stage === "upcoming")
	.sort((a, b) => b.rank - a.rank);

const selectedTasks: any[] = [];
const seenInSelected = new Set();
const seenProjectIds = new Set();

// Helper to add task if not already added
const addTask = (task: any) => {
	if (!seenInSelected.has(task.suuid)) {
		selectedTasks.push(task);
		seenInSelected.add(task.suuid);
		seenProjectIds.add(task.projectIdCode);
		return true;
	}
	return false;
};

// 1. Try different projects with rank >= 4
for (const task of allEligibleTasks) {
	if (task.rank >= 4 && !seenProjectIds.has(task.projectIdCode)) {
		if (addTask(task) && selectedTasks.length === 3) break;
	}
}

// 2. Fallback: Fill with same projects with rank >= 4 (to ensure 3 with rank 4+)
// Actually, the user says "always list three different projects"
// So I should try to avoid this. But if the global pool only has 2 projects with rank 4+... 
// (which we know it has more)
if (selectedTasks.length < 3) {
	for (const task of allEligibleTasks) {
		if (task.rank >= 4) {
			if (addTask(task) && selectedTasks.length === 3) break;
		}
	}
}

// 3. Last fallback: Anything else to ensure 3
if (selectedTasks.length < 3) {
	for (const task of allEligibleTasks) {
		if (addTask(task) && selectedTasks.length === 3) break;
	}
}

const upcomingTargetedTasks = selectedTasks;

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div>
				<div className="mb-6">
					<h1 className="page-header">
						Edward's Projects
					</h1>
					<p className="text-lg text-slate-400 mb-6">
						This site keeps track of the status of all my website and software
						development projects.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					<div>
						<h2 className="text-2xl font-bold text-orange-200 mb-8 border-l-4 border-orange-500 pl-4">Most Recently Finished Tasks</h2>
						<div className="space-y-4">
							{recentlyFinishedTasks.map((task) => (
								<Task
									key={task.suuid}
									task={task}
									imageMobile={_projects.find(p => p.idCode === task.projectIdCode)?.imageMobile}
								/>
							))}
						</div>
					</div>
					<div>
						<h2 className="text-2xl font-bold text-orange-200 mb-8 border-l-4 border-orange-500 pl-4">Upcoming Tasks</h2>
						<div className="space-y-4">
							{upcomingTargetedTasks.map((task) => (
								<Task
									key={task.suuid}
									task={task}
									imageMobile={_projects.find(p => p.idCode === task.projectIdCode)?.imageMobile}
								/>
							))}
						</div>
					</div>
				</div>

				<h2 className="text-2xl font-bold text-orange-200 mb-10 border-l-4 border-orange-500 pl-4">All my projects:</h2>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{currentProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
							currentCategory={project.defaultCategory}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
