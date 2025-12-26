export type Category = {
	idCode: string;
	shortInfo: string;
}

export type Project = {
	suuid: string;
	idCode: string;
	title: string;
	shortTitle: string;
	defaultCategory: string;
	description: string;
	status: string;
	mode: string;
	repo: string;
	live: string;
	imageMobile: string;
	imageDesktop: string;
	categories: Category[];
	techItems: string[];
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
