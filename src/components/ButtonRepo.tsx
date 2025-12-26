interface Props {
	url: string;
}

export default function ButtonRepo({ url }: Props) {
	const isDisabled = url === 'none' || url === '';

	if (isDisabled) {
		return (
			<div className="flex-1 px-4 py-2 rounded-md border border-gray-600 bg-gray-600/10 text-gray-500 text-sm font-medium text-center cursor-not-allowed line-through">
				Repo
			</div>
		);
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex-1 px-4 py-2 rounded-md border border-blue-400 bg-blue-500/20 text-blue-300 sm:border-blue-500/50 sm:bg-blue-500/10 sm:text-blue-400 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300 text-center"
		>
			Repo
		</a>
	);
}

