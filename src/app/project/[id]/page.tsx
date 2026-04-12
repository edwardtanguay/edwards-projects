'use client';
import tasks from "../../../../parseddata/tasks.json";
import _projects from "../../../../parseddata/projects.json";
import ButtonLive from "@/components/ButtonLive";
import ButtonRepo from "@/components/ButtonRepo";
import { type Project } from "@/types";
import { useParams } from "next/navigation";
import TaskAsLine from "@/components/TaskAsLine";
import * as qstr from "@/qtools/qstr";

export default function Project() {
	const params = useParams();
	const project: Project | undefined = _projects.find((project) => project.idCode === params.id);

	const currentTasks = [
		...tasks.filter((task) => task.stage === "current" && task.projectIdCode === params.id),
		...tasks.filter((task) => task.stage === "paused" && task.projectIdCode === params.id),
	];
	const upcomingTasks = tasks.filter(task => task.stage === "upcoming" && task.projectIdCode === params.id).sort((a, b) => b.rank - a.rank);

	const finishedTasks = tasks.filter(task => task.stage === "finished" && task.projectIdCode === params.id).sort((a, b) => (a.endDateTime < b.endDateTime ? 1 : -1));

	return (
		<div className="p-8 md:p-12">
			{project ? (
				<div className="max-w-[752px] space-y-8 text-left">
					<div>
						<p className="text-gray-400 uppercase tracking-[0.3em] text-xs mb-1">
							{project.categories && project.categories.length > 0
								? project.categories
									.map(c => c.idCode.charAt(0).toUpperCase() + c.idCode.slice(1))
									.sort()
									.join(', ') + ' Project'
								: 'Project'
							}
						</p>
						<h1 className="text-4xl md:text-5xl font-bold text-orange-300 mb-4">
							{project.title}
						</h1>
						<div className="flex flex-wrap items-center gap-x-2 gap-y-3 text-sm text-gray-400 mb-6">
							<div className="flex flex-wrap gap-2">
								{project.techItems?.map((tech, index) => (
									<span
										key={index}
										className="text-orange-300/90 text-xs font-semibold px-2 py-0.5 rounded-sm bg-white/15 border border-black/40 shadow-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
						<p
							className="text-lg text-gray-400 mb-8 markdown"
							dangerouslySetInnerHTML={{ __html: project.description }}
						/>

						{/* Preview Section */}
						<div className="flex flex-col md:flex-row gap-6 items-start justify-start w-full">
							{/* Mobile View / Placeholder */}
							<div className="hidden md:block shrink-0">
								{project.imageMobile ? (
									<img
										src={project.imageMobile}
										alt={`${project.title} - Mobile`}
										className="max-w-[128px] rounded-sm shadow-[0_0_30px_rgba(251,146,60,0.2)] border border-orange-500/30 transition-all duration-300"
									/>
								) : (
									<div className="w-[128px] h-[241px] bg-gray-900/50 border border-orange-500/20 rounded-sm flex items-center justify-center shadow-inner relative group">
										<div className="absolute inset-0 bg-linear-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
										<span className="text-gray-600 text-[10px] uppercase tracking-widest font-medium -rotate-90">no image</span>
									</div>
								)}
								{!project.categories?.some(c => c.idCode === 'incubator') && (
									<p className="text-center text-sm text-gray-400 mt-2">Mobile View</p>
								)}
							</div>

							{/* Desktop View / Placeholder */}
							<div className="w-full max-w-[600px]">
								{project.imageDesktop ? (
									<img
										src={project.imageDesktop}
										alt={`${project.title} - Desktop`}
										className="rounded-sm shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-500/30 transition-all duration-300"
									/>
								) : (
									<div className="w-full aspect-video md:aspect-auto md:h-[241px] bg-gray-900/50 border border-blue-500/20 rounded-sm flex items-center justify-center shadow-inner relative group">
										<div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
										<span className="text-gray-600 text-xs uppercase tracking-[0.4em] font-medium">no image</span>
									</div>
								)}
								{!project.categories?.some(c => c.idCode === 'incubator') && (
									<p className="text-center text-sm text-gray-400 mt-2 hidden md:block">Desktop View</p>
								)}
							</div>
						</div>

						{/* Buttons */}
						<div className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center justify-center">
							<div className="w-full sm:w-48 flex">
								<ButtonLive url={project.live} />
							</div>
							<div className="w-full sm:w-48 flex">
								<ButtonRepo project={project} />
							</div>
						</div>

						{/* Current Tasks */}
						{currentTasks.length > 0 && (
							<div className="mt-8">
								<h2 className="text-2xl font-bold mb-4">{qstr.smartPlural(currentTasks.length, "Current Task")}</h2>
								<div>
									{currentTasks.map((task) => (
										<TaskAsLine key={task.suuid} task={task} />
									))}
								</div>
							</div>
						)}

						{/* Upcoming Tasks */}
						{upcomingTasks.length > 0 && (
							<div className="mt-8">
								<h2 className="text-2xl font-bold mb-4">{qstr.smartPlural(upcomingTasks.length, "Upcoming Task")}
									<span className="text-xs font-medium mr-2 opacity-70 italic"> - 5 stars = highest priority</span>
								</h2>
								<div>
									{upcomingTasks.map((task) => (
										<TaskAsLine key={task.suuid} task={task} />
									))}
								</div>
							</div>
						)}

						{/* Finished Tasks */}
						{finishedTasks.length > 0 && (
							<div className="mt-8">
								<h2 className="text-2xl font-bold mb-4">{qstr.smartPlural(finishedTasks.length, "Finished Task")}</h2>
								<div>
									{finishedTasks.map((task) => (
										<TaskAsLine key={task.suuid} task={task} />
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			) : (
				<div className="max-w-[752px]">
					<p>Project not found: {params.id}</p>
				</div>
			)}
		</div>
	);
}
