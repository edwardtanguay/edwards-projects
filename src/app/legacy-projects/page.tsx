/* eslint-disable react/no-unescaped-entities */
import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const legacyProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "legacy")
);
export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Legacy Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						These are the projects that I no longer develop but I keep for various reasons.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{legacyProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
							currentCategory="legacy"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
