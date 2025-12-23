import { Task as TaskData } from "../types";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Task({ task }: { task: TaskData }) {
	return (
		<div
			className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-4"
		>
			<h2 className="text-xl font-semibold text-blue-100 mb-3">
				{task.title}
			</h2>
			<div className="flex justify-between items-end gap-3">
				<div className="flex flex-col gap-1">
					<p className="text-sm text-gray-300">
						Project:{" "}
						<Link
							href={`/project/${task.projectIdCode}`}
							className="text-orange-300 font-medium underline md:no-underline decoration-orange-300/30 underline-offset-4 hover:underline"
						>
							{task.projectIdCode}
						</Link>
					</p>
					{task.stage === "current" && task.beginDateTime && (
						<p className="text-sm text-gray-300">
							Started on{" "}
							<span className="text-emerald-300 font-medium">
								{new Date(task.beginDateTime).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
								})}
							</span>
						</p>
					)}
					{task.stage === "upcoming" && task.rank && (
						<p className="text-sm text-gray-300">
							Rank: <span className="text-red-300 font-medium">{task.rank}</span>
						</p>
					)}
					{task.stage === "finished" && task.endDateTime && (
						<p className="text-sm bg-black text-gray-300 flex items-center gap-2 px-3 py-1 rounded-md">
							<Check className="w-4 h-4 text-emerald-500" />
							<span>
								Finished on{" "}
								<span className="text-white font-medium">
									{new Date(task.endDateTime).toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
									})}
								</span>
							</span>
						</p>
					)}
				</div>
				<span className="inline-block px-2 py-1 text-xs font-medium bg-blue-950 text-blue-200 border-l-2 border-blue-400">
					{task.kind}
				</span>
			</div>
		</div>
	);
}
