import type { Project } from "../types";

interface Props {
	project: Project;
}

export default function Project({ project }: Props) {
	return (
		<div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
			<h2 className="text-lg font-semibold text-gray-100 mb-2">
				{project.title}
			</h2>
			<p className="text-gray-400 text-sm">{project.status}</p>
		</div>
	);
}
