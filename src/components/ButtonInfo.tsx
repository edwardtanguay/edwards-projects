import Link from "next/link";

interface Props {
	idCode: string;
}

export default function ButtonInfo({ idCode }: Props) {
	return (
		<Link
			href={`/project/${idCode}`}
			className="flex-1 flex items-center justify-center px-4 py-2 rounded-md border border-orange-400 bg-orange-500/20 text-orange-300 sm:border-orange-500/50 sm:bg-orange-500/10 sm:text-orange-400 text-sm font-medium hover:bg-orange-500/20 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-center"
		>
			Info
		</Link>
	);
}
