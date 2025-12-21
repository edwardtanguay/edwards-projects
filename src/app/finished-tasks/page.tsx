/* eslint-disable react/no-unescaped-entities */
import tasks from "../../../parseddata/tasks.json";
import Task from "../../components/Task";

const finishedTasks = tasks.filter(task => task.stage === "finished").sort((a, b) => (a.endDateTime < b.endDateTime ? 1 : -1));


export default function Company() {
	return (
		<div className="p-8 md:p-12 max-w-4xl">
			<div className="space-y-8">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
						Finished Tasks
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
					These are tasks that I have completed in various projects.
					</p>
				</div>

				<div className="space-y-4">
					{finishedTasks.map((task) => (
						<Task key={task.suuid} task={task} />
					))}
				</div>

			</div>
		</div>
	);
}
