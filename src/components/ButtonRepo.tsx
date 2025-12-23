interface Props {
	url: string;
}

export default function ButtonRepo({ url }: Props) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex-1 px-4 py-2 rounded-md border border-blue-500/50 bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300 text-center"
		>
			Repo
		</a>
	);
}
