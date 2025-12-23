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
		<div className="bg-gray-900 border border-gray-800 rounded-lg flex flex-col sm:flex-row overflow-hidden w-full sm:min-w-[25rem] max-w-[35rem] min-h-[15rem] sm:max-h-[15rem]">
			{project.imageMobile && <Image className="hidden sm:block w-32 h-full object-cover flex-shrink-0" src={project.imageMobile} alt={project.title} width={128} height={240} />}
			<div className="p-6 flex flex-col overflow-hidden flex-1 min-w-0">
				<h2 className="text-lg font-semibold text-orange-300">
					{project.title}
				</h2>
				<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-400 mb-4">
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
				<p className="text-gray-400 text-sm mb-6 sm:mb-4 sm:flex-1">{project.categories.find((category) => category.idCode === currentCategory)?.shortInfo}</p>

				<div className="flex gap-3 sm:mt-auto justify-center">
					<ButtonInfo idCode={project.idCode} />
					<ButtonRepo url={project.repo} />
					<ButtonLive url={project.live} />
				</div>

				{project.imageDesktop && (
					<div className="sm:hidden mt-6 flex-1 -mb-6 -mx-6 overflow-hidden border-t border-orange-500/40 relative shadow-[0_-12px_20px_-10px_rgba(0,0,0,0.5)]">
						{/* Stylized Label Hanging Tab with Gradient Border */}
						<div className="absolute top-0 right-6 z-30 pt-0 px-[1px] pb-[1px] bg-gradient-to-b from-white/20 via-orange-500/20 to-black rounded-b-md shadow-xl">
							<div className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-b-[5px]">
								<span className="text-[9px] text-orange-300/90 font-bold uppercase tracking-[0.2em]">Desktop Preview</span>
							</div>
						</div>

						{/* Inner Top Glow Line */}
						<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent z-20" />

						<Image
							src={project.imageDesktop}
							alt={`${project.title} - Desktop Preview`}
							className="w-full h-full object-cover"
							width={600}
							height={300}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
