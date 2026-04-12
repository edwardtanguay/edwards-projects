import _projects from "../../../parseddata/projects.json";
import Project from "../../components/Project";

const datapodProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "datapod")
);

export default function DatapodProjects() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div className="space-y-8">
				<div>
					<h1 className="page-header">
						Datapod Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						These are projects that involve the Datapod concept: transforming text files into JSON data for frontends. See my <a className="underline hover:text-white" target="_blank" href="https://datapod-tanguay-eu.vercel.app/">Datapod Central</a> site for more information about my Datapod framework.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{datapodProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
							currentCategory="datapod"
						/>
					))}
				</div>
				{datapodProjects.length === 0 && (
					<div className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl text-center">
						<p className="text-gray-400 italic">No projects are currently marked with the "datapod" category.</p>
					</div>
				)}
			</div>
		</div>
	);
}
