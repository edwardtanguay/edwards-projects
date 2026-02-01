import type { Project } from "../types";

interface Props {
	project: Project;
}

export default function ButtonRepo({ project }: Props) {
	const url = project.repo;
	const isDisabled = url === 'none' || url === '';

	const isPersonal = project.categories?.some((category) => category.idCode === "personal");
	const buttonText = isPersonal ? "Private Repo" : "Repo";

	const colorClasses = isPersonal
		? "border-red-400 bg-red-500/20 text-red-300 sm:border-red-500/50 sm:bg-red-500/10 sm:text-red-400 hover:bg-red-500/20 hover:border-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
		: "border-blue-400 bg-blue-500/20 text-blue-300 sm:border-blue-500/50 sm:bg-blue-500/10 sm:text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]";

	if (isDisabled) {
		return (
			<div className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md border border-gray-600 bg-gray-600/10 text-gray-500 text-sm font-medium text-center cursor-not-allowed line-through`}>
				{buttonText}
			</div>
		);
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md ${colorClasses} text-sm font-medium transition-all duration-300 text-center`}
		>
			{buttonText}
		</a>
	);
}

