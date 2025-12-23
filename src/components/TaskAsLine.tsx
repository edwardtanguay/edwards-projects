import { Task as TaskData } from "../types";
import { Check } from "lucide-react";

export default function Task({ task }: { task: TaskData }) {
	const date = task.endDateTime || task.beginDateTime;
	const formattedDate = date
		? new Date(date).toLocaleDateString("en-US", {
			month: "short",
			day: "2-digit",
		})
		: "";

	return (
		<div className="text-gray-300 flex items-start mb-1.5">
			<div className="shrink-0 h-6 flex items-center">
				{task.stage === "upcoming" && (
					<div className="text-red-300 font-medium whitespace-nowrap">
						{task.rank.toFixed(2)} -&nbsp;
					</div>
				)}
				{task.stage === "current" && formattedDate && (
					<div className="text-green-400 font-medium whitespace-nowrap">
						{formattedDate} -&nbsp;
					</div>
				)}
				{task.stage === "finished" && (
					<div className="text-[10px] text-gray-300 flex items-center gap-1.5 mr-3 px-1.5 py-0.5 bg-black/30 border border-black/50 rounded-sm">
						<Check className="w-3 h-3 text-emerald-500/80 shrink-0" />
						<span className="font-bold uppercase tracking-tight">
							{new Date(task.endDateTime).toLocaleDateString("en-US", {
								month: "short",
								day: "2-digit",
							})}
						</span>
					</div>
				)}
			</div>
			<div className="flex-1 leading-6">
				<span>{task.title}</span>
			</div>
		</div>
	);
}
