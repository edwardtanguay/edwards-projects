/* eslint-disable react/no-unescaped-entities */
import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const liveProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "live")
);

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Live Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						These are the projects which are currently live and available for use online.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{liveProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
							currentCategory="live"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
