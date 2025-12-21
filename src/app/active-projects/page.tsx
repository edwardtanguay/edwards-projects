/* eslint-disable react/no-unescaped-entities */
import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const activeProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "active")
);
// TODO: put these on other pages
// const upcomingProjects = _projects.filter((project) =>
// 	project.categories.some((category) => category.idCode === "upcoming")
// );
// const liveProjects = _projects.filter((project) =>
// 	project.categories.some((category) => category.idCode === "live")
// );
// const showcaseProjects = _projects.filter((project) =>
// 	project.categories.some((category) => category.idCode === "showcase")
// );
// const startProjects = _projects.filter((project) =>
// 	project.categories.some((category) => category.idCode === "start")
// );

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-4xl">
			<div className="space-y-8">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
						Active Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						I'm currently working on the following software projects.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{activeProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
