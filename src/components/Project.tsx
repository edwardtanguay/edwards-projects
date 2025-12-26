import type { Project } from "../types";
import Image from "next/image";
import ButtonLive from "./ButtonLive";
import ButtonRepo from "./ButtonRepo";
import ButtonInfo from "./ButtonInfo";

interface Props {
	project: Project;
	currentCategory: string;
}

export default function Project({ project, currentCategory }: Props) {
	return (
		<div className="bg-gray-900 border border-gray-400 sm:border-gray-800 rounded-lg flex flex-col sm:flex-row overflow-hidden flex-1 min-w-[300px] sm:min-w-[400px] max-w-[560px] min-h-60 sm:max-h-60">
			{project.imageMobile && <Image className="hidden sm:block w-32 h-full object-cover shrink-0" src={project.imageMobile} alt={project.title} width={128} height={240} />}
			<div className="p-6 flex flex-col overflow-hidden flex-1 min-w-0">
				<h2 className="text-2xl font-semibold text-orange-300 mb-2 whitespace-nowrap">
					{project.title}
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
				<p className="text-gray-400 text-sm mb-3 sm:mb-4 sm:flex-1">{project.categories.find((category) => category.idCode === currentCategory)?.shortInfo}</p>

				{project.imageDesktop && (
					<div className="sm:hidden mb-4 overflow-hidden rounded-md border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)] group">
						<Image
							src={project.imageDesktop}
							alt={`${project.title} - Desktop Preview`}
							className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
							width={600}
							height={300}
						/>
					</div>
				)}

				<div className="flex gap-3 justify-center">
					<ButtonInfo idCode={project.idCode} />
					<ButtonRepo url={project.repo} />
					<ButtonLive url={project.live} />
				</div>
			</div>
		</div>
	);
}
