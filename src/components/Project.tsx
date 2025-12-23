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
		<div className="bg-gray-900 border border-gray-800 rounded-lg flex overflow-hidden min-w-[25rem] max-w-[35rem] min-h-[15rem] max-h-[15rem]">
			{project.imageMobile && <Image className="w-32 h-full object-cover flex-shrink-0" src={project.imageMobile} alt={project.title} width={128} height={240} />}
			<div className="p-6 flex flex-col overflow-hidden flex-1 min-w-0">
				<h2 className="text-lg font-semibold text-orange-300">
					{project.title}
				</h2>
				<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-400 mb-4">
					<div className="flex flex-wrap gap-2">
						{project.techItems?.map((tech, index) => (
							<span
								key={index}
								className="text-orange-300/80 text-xs [font-variant:small-caps] opacity-80"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
				<p className="text-gray-400 text-sm mb-4 flex-1">{project.categories.find((category) => category.idCode === currentCategory)?.shortInfo}</p>

				<div className="flex gap-3 mt-auto justify-center">
					<ButtonInfo idCode={project.idCode} />
					<ButtonRepo url={project.repo} />
					<ButtonLive url={project.live} />
				</div>
			</div>
		</div>
	);
}
