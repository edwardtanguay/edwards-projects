/* eslint-disable react/no-unescaped-entities */
import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const incubatorProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "incubator")
);

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Incubator Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						These are projects that are still an idea in the planning stage, or projects in the early stages of development.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{incubatorProjects.length > 0 ? (
						incubatorProjects.map((project) => (
							<Project
								key={project.suuid ?? project.idCode}
								project={project}
								currentCategory="incubator"
							/>
						))
					) : (
						<p className="text-gray-500 italic">No incubator projects found at the moment.</p>
					)}
				</div>
			</div>
		</div>
	);
}
