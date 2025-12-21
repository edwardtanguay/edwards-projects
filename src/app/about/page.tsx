export default function About() {
	return (
		<div className="p-8 md:p-12 max-w-4xl">
			<div className="space-y-8">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
						About
					</h1>
					<div className="text-lg text-gray-400 leading-relaxed">
						<p className="mb-3">
							This site contains all the projects I am working on.
						</p>
						<div>
							<div className="flex gap-1">
								<p className="font-bold">repo:</p>
								<a
									className="underline line-clamp-1"
									target="_blank"
									href="https://github.com/edwardtanguay/edwards-projects"
								>
									https://github.com/edwardtanguay/edwards-projects
								</a>
							</div>
							<div className="flex gap-1">
								<p className="font-bold">live:</p>
								<a
									className="underline line-clamp-1"
									target="_blank"
									href="https://edwards-projects.vercel.app"
								>
									https://edwards-projects.vercel.app
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
