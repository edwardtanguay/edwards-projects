import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const showcaseProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "showcase")
);

export default function ShowcaseProjects() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Showcase Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						These are projects that showcase some technology, framework or library.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{showcaseProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
							currentCategory="showcase"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
