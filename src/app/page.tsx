/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
	return (
		<div className="p-8 md:p-12 max-w-4xl">
			<div className="space-y-8">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
						Edward's Projects
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed">
						This site shows the status of all my software
						development projects.
					</p>

					<p className="text-gray-300 mt-4 bg-gray-800 sm:bg-transparent px-4 py-2 sm:p-0 rounded-lg sm:rounded-none text-2xl leading-loose sm:text-base sm:leading-normal">
						Check out my{" "}
						<Link href="/active-projects" className="text-blue-400 hover:text-blue-300 underline">
							active projects
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
				</div>
			</div>
		</div>
	);
}
