/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import _projects from "../../parseddata/projects.json";
import Project from "../components/Project";

const _currentProjects = _projects.filter((project) =>
	project.categories.some((category) => category.idCode === "current")
);

// reverse the order of the projects
const currentProjects = [..._currentProjects].reverse();

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-6xl">
			<div>
				<div className="mb-6">
					<h1 className="text-[44px] md:text-[48px] xl:text-6xl font-bold text-slate-600 mb-2 md:mb-4 pb-2">
						Edward's Projects
					</h1>
					<p className="text-lg text-gray-400 mb-6">
						This site keeps track of the status of all my website and software
						development projects.
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
