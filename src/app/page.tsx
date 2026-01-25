/* eslint-disable react/no-unescaped-entities */
import _projects from "../../parseddata/projects.json";
import Project from "../components/Project";

const _currentProjects = _projects

// reverse the order of the projects
// const currentProjects = [..._currentProjects].reverse();
const currentProjects = [..._currentProjects];

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div>
				<div className="mb-6">
					<h1 className="page-header">
						Edward's Projects
					</h1>
					<p className="text-lg text-white sm:text-gray-400 mb-6">
						This site keeps track of the status of all my website and software
						development projects.
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:flex-wrap gap-6">
					{currentProjects.map((project) => (
						<Project
							key={project.suuid ?? project.idCode}
							project={project}
							currentCategory={project.defaultCategory}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
