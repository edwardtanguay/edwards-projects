/* eslint-disable react/no-unescaped-entities */
import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const parkedProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "parked")
);

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Parked Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						These are the projects which are currently parked, which means they may be still online but are only half-finished or not that useful. However, they have something about them that I want to use for other projects, so I keep them until I use them, at which time I will delete them.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{parkedProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
							currentCategory="parked"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
