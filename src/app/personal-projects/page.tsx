/* eslint-disable react/no-unescaped-entities */
import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const personalProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "personal")
);

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Personal Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						These are projects that I use personally for my own organization, learning, or hobbies. The repos for these projects are all private, but I include them here so development on them counts as development projects I work on.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{personalProjects.length > 0 ? (
						personalProjects.map((project) => (
							<Project
								key={project.suuid ?? project.idCode}
								project={project}
								currentCategory="personal"
							/>
						))
					) : (
						<p className="text-gray-500 italic">No personal projects listed yet.</p>
					)}
				</div>
			</div>
		</div>
	);
}
