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
}	

export type Category = {
	idCode: string;
	shortInfo: string;
}

export type ProjectItem = {
	suuid: string;
	kind: string;
	title: string;
	outlineItems: OutlineItem[];
}

export type OutlineItem = {
	indents: number;
	line: string;
	marker: string;
}

