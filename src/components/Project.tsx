"use client";

import type { Project } from "../types";
import Image from "next/image";
import ButtonLive from "./ButtonLive";
import ButtonRepo from "./ButtonRepo";
import ButtonInfo from "./ButtonInfo";
import { useRouter } from "next/navigation";

interface Props {
	project: Project;
	currentCategory: string;
}

export default function Project({ project, currentCategory }: Props) {
	const router = useRouter();

	const handleCardClick = () => {
		router.push(`/project/${project.idCode}`);
	};

	return (
		<div
			onClick={handleCardClick}
			className="bg-gray-900 border border-gray-400 sm:border-gray-800 rounded-lg flex flex-col sm:flex-row overflow-hidden w-full sm:w-[500px] min-h-60 sm:max-h-60 cursor-pointer hover:border-gray-500 hover:bg-gray-800/40 transition-all duration-300 group shadow-lg hover:shadow-orange-500/5"
		>
			{project.imageMobile && (
				<Image
					className="hidden sm:block w-32 h-full object-cover shrink-0 border-r border-white/5 opacity-80 group-hover:opacity-100 transition-all duration-300"
					src={project.imageMobile}
					alt={project.shortTitle}
					width={128}
					height={240}
				/>
			)}
			<div className="p-6 flex flex-col overflow-hidden flex-1 min-w-0 relative">
				<p className="absolute top-[14px] text-[10px] uppercase font-bold text-white/20 tracking-[0.2em]">
					{project.categories?.map(c => c.idCode.charAt(0).toUpperCase() + c.idCode.slice(1)).sort().join(', ')}
				</p>
				<h2 className="text-2xl font-semibold mt-1 text-orange-300 mb-1 whitespace-nowrap group-hover:text-orange-200 transition-colors duration-300">
					{project.shortTitle}
				</h2>
				<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-400 mb-4 overflow-hidden whitespace-nowrap">
					<div className="flex flex-wrap gap-2">
						{project.techItems?.map((tech, index) => (
							<span
								key={index}
								className="text-orange-300/90 text-[10px] [font-variant:small-caps] bg-white/5 border border-black/40 px-1.5 py-0.5 rounded-sm shadow-sm"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
				<p
					className="text-gray-400 text-sm mb-3 sm:mb-4 sm:flex-1 markdown"
					dangerouslySetInnerHTML={{
						__html: project.categories.find((category) => category.idCode === currentCategory)?.shortInfo || "",
					}}
				/>

				{project.imageDesktop && (
					<div className="sm:hidden mb-4 overflow-hidden rounded-md border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
						<Image
							src={project.imageDesktop}
							alt={`${project.shortTitle} - Desktop Preview`}
							className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
							width={600}
							height={300}
						/>
					</div>
				)}

				<div
					onClick={(e) => e.stopPropagation()}
					className="flex gap-3 justify-center"
				>
					<ButtonInfo idCode={project.idCode} />
					<ButtonRepo project={project} />
					<ButtonLive url={project.live} />
				</div>
			</div>
		</div>
	);
}
