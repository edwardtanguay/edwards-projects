/* eslint-disable react/no-unescaped-entities */
import tasks from "../../../parseddata/tasks.json";
import Task from "../../components/Task";

const currentTasks = [
	...tasks.filter((task) => task.stage === "current"),
	...tasks.filter((task) => task.stage === "paused"),
];

export default function Company() {
	return (
		<div className="p-8 md:p-12 max-w-4xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Current Tasks
					</h1>
					<p className="text-lg text-gray-300 leading-relaxed">
						I'm currently working on the following tasks from various
						software projects.
					</p>
				</div>

				<div className="space-y-4">
					{currentTasks.map((task) => (
						<Task key={task.suuid} task={task} />
					))}
				</div>
			</div>
		</div>
	);
}
