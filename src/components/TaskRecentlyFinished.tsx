import _projects from "../../parseddata/projects.json";
import Task from "./Task";
import { Task as TaskData } from "../types";

export default function TaskRecentlyFinished({ task }: { task: TaskData }) {
	const imageMobile = (_projects as any[]).find(p => p.idCode === task.projectIdCode)?.imageMobile;
	return (
		<Task
			task={task}
			imageMobile={imageMobile}
		/>
	);
}
