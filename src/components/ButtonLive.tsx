interface Props {
	url: string;
}

export default function ButtonLive({ url }: Props) {
	const isDisabled = url === 'none' || url === '';

	if (isDisabled) {
		return (
			<div className="flex-1 px-4 py-2 rounded-md border border-gray-600 bg-gray-600/10 text-gray-500 text-sm font-medium text-center cursor-not-allowed line-through">
				Live
			</div>
		);
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex-1 px-4 py-2 rounded-md border border-green-400 bg-green-500/20 text-green-300 sm:border-green-500/50 sm:bg-green-500/10 sm:text-green-400 text-sm font-medium hover:bg-green-500/20 hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 text-center"
		>
			Live
		</a>
	);
}

