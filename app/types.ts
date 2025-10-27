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
	id_code: string;
	short_info: string;
}
