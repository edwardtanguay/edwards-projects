export type Project = {
	suuid: string;
	idCode: string;
	title: string;
	status: string;
	repo: string;
	mode: "active" | "planning" | "stable" | "closed";
}	
