/* eslint-disable react/no-unescaped-entities */
import { Github, Linkedin, Youtube, ExternalLink, Instagram } from "lucide-react";
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
							This site is the central place where I keep all my software development projects, many regarding my <span className="emphasize">Datapod</span> framework, plus <span className="emphasize">starter and sandbox sites</span> for you to use as quick templates for projects with various frameworks and languages, and <span className="emphasize">sites that help me learn foreign languages</span>, a passion of mine.
						</p>
					</div>
				</div>

				<div className="bg-linear-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
					<div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
						<div className="shrink-0 relative">
							<div className="absolute -inset-2 bg-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
							<Image
								src="/images/about/edward-tanguay-finished.jpg"
								alt="Edward Tanguay"
								width={128}
								height={128}
								className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border-2 border-orange-500/20 object-cover relative z-10 group-hover:border-orange-500/40 transition-all duration-700 shadow-2xl"
							/>
						</div>
						
						<div className="flex-1">
							
							<p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
								My name is <span className="text-white font-semibold">Edward Tanguay</span>, I started programming in the 80s <span className="tech-pill">(Apple Basic, dBase, Clipper)</span> did web development in the 90s <span className="tech-pill">(CGI/Perl, ASP/ODBC/Access, PHP/MySQL)</span> have been a full-stack developer since 2001 <span className="tech-pill">(C#, Python, TypeScript, Go, React/Next, Vue/Nuxt, SvelteKit, et al.)</span> there isn't a technology I won't try, I've even created applications in Excel/VBScript for clients: whatever works.
							</p>

							<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
								<a 
									target="_blank"
									href="https://www.linkedin.com/in/edward-tanguay" 
									className="flex justify-center items-center gap-2 sm:gap-3 px-2 sm:px-5 py-2.5 bg-blue-900/30 border border-blue-500/30 rounded-xl text-blue-100 hover:bg-blue-800/50 hover:border-blue-400 transition-all shadow-lg hover:shadow-blue-500/10"
								>
									<Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" /> 
									<span className="font-medium text-sm sm:text-base">LinkedIn</span>
								</a>
								<a 
									target="_blank"
									href="https://github.com/edwardtanguay" 
									className="flex justify-center items-center gap-2 sm:gap-3 px-2 sm:px-5 py-2.5 bg-gray-800 border border-gray-600 rounded-xl text-gray-100 hover:bg-gray-700 hover:border-gray-500 transition-all shadow-lg"
								>
									<Github className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> 
									<span className="font-medium text-sm sm:text-base">GitHub</span>
								</a>
								<a 
									target="_blank"
									href="https://www.youtube.com/@edward481/videos" 
									className="flex justify-center items-center gap-2 sm:gap-3 px-2 sm:px-5 py-2.5 bg-red-900/30 border border-red-500/30 rounded-xl text-red-100 hover:bg-red-800/50 hover:border-red-400 transition-all shadow-lg hover:shadow-red-500/10"
								>
									<Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0" /> 
									<span className="font-medium text-sm sm:text-base">YouTube</span>
								</a>
								<a 
									target="_blank"
									href="https://www.instagram.com/eddie_t4ngway" 
									className="flex justify-center items-center gap-2 sm:gap-3 px-2 sm:px-5 py-2.5 bg-orange-900/30 border border-orange-500/30 rounded-xl text-orange-100 hover:bg-orange-800/50 hover:border-orange-400 transition-all shadow-lg hover:shadow-orange-500/10"
								>
									<Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 shrink-0" /> 
									<span className="font-medium text-sm sm:text-base">Instagram</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
