export type Category = {
	idCode: string;
	shortInfo: string;
}

export type Project = {
	suuid: string;
	idCode: string;
	title: string;
	status: string;
	mode: string;
	repo: string;
	live: string;
	mainImage: string;
	categories: Category[];
};

export type TaskStage = "current" | "upcoming" | "finished" | string;

export type Task = {
	projectIdCode: string;
	suuid: string;
	stage: TaskStage;
	kind: string;
	title: string;
	beginDateTime: string;
	endDateTime: string;
	branch: string;
	rank: number;
}
