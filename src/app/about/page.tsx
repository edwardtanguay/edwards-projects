/* eslint-disable react/no-unescaped-entities */
import { Github, Linkedin, Youtube, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function About() {
	return (
		<div className="p-8 md:p-12 max-w-4xl">
			<div className="space-y-12">
				<div>
					<h1 className="page-header">
						About
					</h1>
					<div className="text-lg text-gray-400 leading-relaxed max-w-3xl">
						<p className="mb-6">
							This site serves as a central hub for tracking the status and progress of all my software development projects.
							From experiments and showcases to production-ready applications, everything is organized here to provide a clear overview of my technical evolution.
						</p>
					</div>
				</div>

				<div className="bg-linear-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
					<div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
						<div className="shrink-0 relative">
							<div className="absolute -inset-2 bg-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
							<Image
								src="/images/about/edward-tanguay.jpg"
								alt="Edward Tanguay"
								width={128}
								height={128}
								className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border-2 border-orange-500/20 object-cover relative z-10 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:border-orange-500/40 transition-all duration-700 shadow-2xl"
							/>
						</div>
						
						<div className="flex-1">
							
							<p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
								I'm <span className="text-white font-semibold">Edward Tanguay</span>, a full-stack developer with over 20 years of experience, passionate about building tools that help organize information 
								and streamline the learning process. This site is a living document of my projects, 
								experiments, and the technologies I'm mastering.
							</p>

							<div className="flex flex-wrap gap-4">
								<a 
									target="_blank"
									href="https://www.linkedin.com/in/edward-tanguay" 
									className="flex items-center gap-3 px-5 py-2.5 bg-blue-900/30 border border-blue-500/30 rounded-xl text-blue-100 hover:bg-blue-800/50 hover:border-blue-400 transition-all shadow-lg hover:shadow-blue-500/10"
								>
									<Linkedin className="w-5 h-5 text-blue-400" /> 
									<span className="font-medium">LinkedIn</span>
								</a>
								<a 
									target="_blank"
									href="https://github.com/edwardtanguay" 
									className="flex items-center gap-3 px-5 py-2.5 bg-gray-800 border border-gray-600 rounded-xl text-gray-100 hover:bg-gray-700 hover:border-gray-500 transition-all shadow-lg"
								>
									<Github className="w-5 h-5" /> 
									<span className="font-medium">GitHub</span>
								</a>
								<a 
									target="_blank"
									href="https://www.youtube.com/@edward481/videos" 
									className="flex items-center gap-3 px-5 py-2.5 bg-red-900/30 border border-red-500/30 rounded-xl text-red-100 hover:bg-red-800/50 hover:border-red-400 transition-all shadow-lg hover:shadow-red-500/10"
								>
									<Youtube className="w-5 h-5 text-red-400" /> 
									<span className="font-medium">YouTube</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
