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
			<div className="space-y-8">
				<div className="mb-6">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 ">
						Edward's Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed mb-6">
						This site shows the status of all my software
						development projects.
					</p>
				</div>

				<p className="hidden mb-6 text-gray-300 mt-4 bg-gray-800  px-4 py-2 sm:p-0 rounded-lg sm:rounded-none leading-loose sm:text-base sm:leading-normal">
					Check out my{" "}
					<Link href="/current-projects" className="text-blue-400 hover:text-blue-300 underline">
						current projects
					</Link>
					, see what{" "}
					<Link href="/current-tasks" className="text-blue-400 hover:text-blue-300 underline">
						current tasks
					</Link>{" "}
					I'm working on, view my{" "}
					<Link href="/upcoming-tasks" className="text-blue-400 hover:text-blue-300 underline">
						upcoming tasks
					</Link>
					, browse my{" "}
					<Link href="/finished-tasks" className="text-blue-400 hover:text-blue-300 underline">
						finished tasks
					</Link>
					, or read more{" "}
					<Link href="/about" className="text-blue-400 hover:text-blue-300 underline">
						about this site
					</Link>
					.
				</p>


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
