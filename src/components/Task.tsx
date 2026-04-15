"use client";

import { Task as TaskData } from "../types";
import { Check, Sparkles, Zap, Star, BadgeCheck, CircleCheckBig } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Stars from "./Stars";

export default function Task({ task, imageMobile }: { task: TaskData, imageMobile?: string }) {
	const router = useRouter();

	const handleCardClick = () => {
		router.push(`/project/${task.projectIdCode}`);
	};

	const getRelativeDateInfo = (dateStr: string) => {
		const taskDate = new Date(dateStr);
		const now = new Date();
		const taskMid = new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
		const nowMid = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		const diffTime = (nowMid.getTime() - taskMid.getTime());
		const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

		let label = "";
		if (diffDays === 0) label = "Today";
		else if (diffDays === 1) label = "Yesterday";
		else label = `${diffDays} days ago`;

		return { label, diffDays };
	};

	const dateInfo = task.endDateTime ? getRelativeDateInfo(task.endDateTime) : null;

	return (
		<div
			onClick={handleCardClick}
			className="bg-zinc-950 border border-white/40 rounded-xl overflow-hidden flex cursor-pointer hover:border-white/70 hover:bg-zinc-900 transition-all duration-300 group shadow-[0_10px_30px_0_rgba(0,0,0,0.5),0_0_20px_0_rgba(255,255,255,0.3)] sm:shadow-[0_10px_30px_0_rgba(0,0,0,0.5),0_0_15px_0_rgba(255,255,255,0.15)]"
		>
			{imageMobile && task.stage !== "finished" && !(task.stage === "finished" && task.slugImage) && (
				<Image
					className="w-20 sm:w-24 h-auto object-cover shrink-0 border-r border-white/5 opacity-80 group-hover:opacity-100 transition-all duration-300"
					src={imageMobile}
					alt={task.projectIdCode}
					width={96}
					height={120}
				/>
			)}
			<div className="p-4 flex-1 min-w-0 flex flex-col">
				<div className="flex justify-between items-start gap-4 mb-2">
					<p className="text-sm text-gray-300">
						Project:{" "}
						<Link
							onClick={(e) => e.stopPropagation()}
							href={`/project/${task.projectIdCode}`}
							className="text-orange-300 font-medium underline md:no-underline decoration-orange-300/30 underline-offset-4 hover:underline"
						>
							{task.projectIdCode}
						</Link>
					</p>
					{dateInfo && (
						<span className={`${
							dateInfo.diffDays === 0 
								? "bg-emerald-600 border-emerald-400/20 shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
								: dateInfo.diffDays === 1
									? "bg-orange-600 border-orange-400/20 shadow-[0_0_15px_rgba(234,88,12,0.3)]"
									: dateInfo.diffDays === 2
										? "bg-yellow-600 border-yellow-400/20 shadow-[0_0_15px_rgba(202,138,4,0.3)]"
										: dateInfo.diffDays <= 7
											? "bg-sky-600 border-sky-400/20 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
											: "bg-gray-600 border-gray-400/20"
						} text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest flex items-center gap-0.5 border ${dateInfo.diffDays <= 7 ? "animate-pulse" : ""}`}>
							<Sparkles className="w-2.5 h-2.5" />
							{dateInfo.label}
						</span>
					)}
				</div>

				{task.stage === "upcoming" ? (
					<div className="mt-2 mb-2 bg-black/20 border-y border-white/5 py-2 px-4 -mx-4">
						<h2 className="text-sm font-medium text-blue-100 line-clamp-2 leading-snug">
							{task.title}
						</h2>
					</div>
				) : (
					<div className={`mt-2 ${(task.points && task.points.length > 0) ? "mb-5" : "mb-2"} bg-black/40 border-y border-white/5 py-3 px-4 -mx-4 flex items-start justify-between gap-3 group/title shadow-inner`}>
						<h2 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500 uppercase tracking-tighter leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover/title:from-white group-hover/title:to-amber-200 transition-all duration-500">
							{task.title}
						</h2>
						{task.stage === "finished" && (
							<CircleCheckBig className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
						)}
					</div>
				)}

				{task.points && task.points.length > 0 && (
					<ul className="mb-4 space-y-2 px-1">
						{task.points.map((point, index) => {
							const isMinor = point.toLowerCase().includes("minor");
							const displayPoint = !isMinor ? point.charAt(0).toUpperCase() + point.slice(1) : point;
							return (
								<li key={index} className={`flex items-start gap-2.5 group/point ${isMinor ? "opacity-85" : ""}`}>
									<div className="mt-1 shrink-0">
										{isMinor ? (
											<div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-600/10 border border-gray-600/30">
												<Check className="w-2.5 h-2.5 text-gray-500" strokeWidth={4} />
											</div>
										) : (
											<div className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-400/10 border border-emerald-400/40 shadow-[0_0_10px_rgba(52,211,153,0.2)] group-hover/point:border-emerald-400/60 transition-colors">
												<Check className="w-2.5 h-2.5 text-emerald-400 group-hover/point:text-emerald-300 drop-shadow-[0_0_5px_rgba(52,211,153,0.4)]" strokeWidth={4} />
											</div>
										)}
									</div>
									<span className={`text-[13px] leading-relaxed ${isMinor ? "italic text-gray-400" : "font-medium text-blue-50"} group-hover/point:text-white transition-colors`}>
										{displayPoint.split(/(minor:?)/i).map((part, i, array) => {
											if (part.toLowerCase().startsWith("minor")) {
												return (
													<span key={i} className="not-italic inline-block bg-white/10 border border-white/20 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-tight text-blue-200/80 mr-2 shadow-sm">
														{part.replace(":", "").trim()}
													</span>
												);
											}
											// If this part follows a 'minor' tag, trim its start to ensure consistent spacing
											const prevPart = array[i - 1];
											if (prevPart && prevPart.toLowerCase().startsWith("minor")) {
												return part.trimStart();
											}
											return part;
										})}
									</span>
								</li>
							);
						})}
					</ul>
				)}

				{task.stage === "finished" && task.slugImage && (
					<div className={`${(task.points && task.points.length > 0) ? "my-3" : "mt-2 mb-4"} rounded-lg overflow-hidden border border-white/10 shadow-lg`}>
						<Image
							src={task.slugImage}
							alt={task.title}
							width={500}
							height={300}
							className="w-full h-auto object-cover"
						/>
					</div>
				)}

				<div className="mt-auto flex justify-between items-end gap-3 pt-2">
					<div className="flex flex-col gap-2">
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
						<span className="inline-block px-2 py-1 text-xs font-medium bg-blue-950 text-blue-200 border-l-2 border-blue-400 shrink-0 w-fit">
							{task.kind}
						</span>
					</div>

					{task.stage === "finished" && task.endDateTime && (
						<div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2">
							<p className="text-[12px] sm:text-[13px] bg-black text-gray-300 flex items-center gap-2 px-3 py-1 rounded-md w-fit border border-white/5 shadow-inner">
								<Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
								<span className="whitespace-nowrap">
									Completed{" "}
									<span className="text-white font-semibold">
										{new Date(task.endDateTime).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
										})}
									</span>
								</span>
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
