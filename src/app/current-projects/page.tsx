/* eslint-disable react/no-unescaped-entities */
import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const currentProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "current")
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
		<div className="p-8 md:p-12 max-w-6xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Current Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						These are the projects for which I'm actively developing new features at the moment.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{currentProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
							currentCategory="current"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
