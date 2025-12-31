/* eslint-disable react/no-unescaped-entities */
import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const premierProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "premier")
);

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Premier Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						These are my projects that are most up-to-date, useful and the ones I spend most time using and developing at the moment.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{premierProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
							currentCategory="premier"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
