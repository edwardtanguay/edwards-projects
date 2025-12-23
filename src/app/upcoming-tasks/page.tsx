/* eslint-disable react/no-unescaped-entities */
import tasks from "../../../parseddata/tasks.json";
import Task from "../../components/Task";

const upcomingTasks = tasks.filter(task => task.stage === "upcoming").sort((a, b) => b.rank - a.rank);


export default function Company() {
	return (
		<div className="p-8 md:p-12 max-w-4xl">
			<div className="space-y-8">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
						Upcoming Tasks
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
					These are the tasks I plan to do next in various software projects. <span className="text-yellow-400">Rank</span> is 5 = highest priority and 0 = lowest priority.
					</p>
				</div>

				<div className="space-y-4">
					{upcomingTasks.map((task) => (
						<Task key={task.suuid} task={task} />
					))}
				</div>

			</div>
		</div>
	);
}
