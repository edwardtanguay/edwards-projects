export type Project = {
	suuid: string;
	idCode: string;
	title: string;
	status: string;
	repo: string;
	live: string;
	mainImage: string;
	mode: "active" | "planning" | "stable" | "closed";
	category: Category[]
	projectItems: ProjectItem[]
}	

export type Category = {
	idCode: string;
	short_info: string;
}

export type ProjectItem = {
	suuid: string;
	kind: string;
	title: string;
	outline_items: OutlineItem[];
}

export type OutlineItem = {
	indents: number;
	line: string;
	marker: string;
}

