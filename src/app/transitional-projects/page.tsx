/* eslint-disable react/no-unescaped-entities */
import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const transitionalProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "transitional")
);

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Transitional Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						These are projects that are currently in a state of transition, such as being upgraded to a new framework or reworked into another site, and are generally being actively developed.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{transitionalProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
							currentCategory="transitional"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
