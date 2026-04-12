"use client";

import { Task as TaskData } from "../types";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Stars from "./Stars";

export default function Task({ task, imageMobile }: { task: TaskData, imageMobile?: string }) {
	const router = useRouter();

	const handleCardClick = () => {
		router.push(`/project/${task.projectIdCode}`);
	};

	const getRelativeDateLabel = (dateStr: string) => {
		const taskDate = new Date(dateStr);
		const now = new Date();
		const taskMid = new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
		const nowMid = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		const diffTime = nowMid.getTime() - taskMid.getTime();
		const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

		if (diffDays === 0) return "Today";
		if (diffDays === 1) return "Yesterday";
		if (diffDays > 1 && diffDays <= 3) return `${diffDays} days ago`;
		return null;
	};

	const relativeDateLabel = task.endDateTime ? getRelativeDateLabel(task.endDateTime) : null;

	return (
		<div
			onClick={handleCardClick}
			className="bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg overflow-hidden flex cursor-pointer hover:border-gray-500 hover:bg-gray-800/40 transition-all duration-300 group"
		>
			{imageMobile && (
				<Image
					className="w-20 sm:w-24 h-auto object-cover shrink-0 border-r border-white/5 opacity-80 group-hover:opacity-100 transition-all duration-300"
					src={imageMobile}
					alt={task.projectIdCode}
					width={96}
					height={120}
				/>
			)}
			<div className="p-4 flex-1 min-w-0 flex flex-col">
				<h2 className="text-xl font-semibold text-blue-100 mb-1 truncate">
					{task.title}
				</h2>
				<p className="text-sm text-gray-300 mb-2">
					Project:{" "}
					<Link
						onClick={(e) => e.stopPropagation()}
						href={`/project/${task.projectIdCode}`}
						className="text-orange-300 font-medium underline md:no-underline decoration-orange-300/30 underline-offset-4 hover:underline"
					>
						{task.projectIdCode}
					</Link>
				</p>

				<div className="mt-auto flex justify-between items-end gap-3">
					<div className="flex flex-col gap-1">
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
							<div className="flex items-center gap-2">
								<span className="text-sm text-gray-400">Priority:</span>
								<Stars rank={task.rank} />
							</div>
						)}
						{task.stage === "finished" && task.endDateTime && (
							<div className="flex flex-wrap items-center gap-x-3 gap-y-2">
								<p className="text-[13px] sm:text-sm bg-black text-gray-300 flex items-center gap-2 px-3 py-1 rounded-md w-fit border border-white/5">
									<Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
									<span className="whitespace-nowrap">
										Finished on{" "}
										<span className="text-white font-semibold">
											{new Date(task.endDateTime).toLocaleDateString("en-US", {
												month: "short",
												day: "numeric",
											})}
										</span>
									</span>
								</p>
								{relativeDateLabel && (
									<span className="bg-orange-600 text-white text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-sm uppercase tracking-widest flex items-center gap-1 shadow-[0_0_15px_rgba(234,88,12,0.3)] animate-pulse border border-orange-400/20">
										<Sparkles className="w-2.5 h-2.5" />
										{relativeDateLabel}
									</span>
								)}
							</div>
						)}
					</div>
					<span className="inline-block px-2 py-1 text-xs font-medium bg-blue-950 text-blue-200 border-l-2 border-blue-400 shrink-0">
						{task.kind}
					</span>
				</div>
			</div>
		</div>
	);
}
