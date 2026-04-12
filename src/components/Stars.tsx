import { Star } from "lucide-react";

export default function Stars({ rank }: { rank: number }) {
	const stars = [];
	const fullStars = rank >= 4.9 ? 5 : Math.floor(rank);
	const hasHalfStar = rank < 4.9 && rank % 1 >= 0.1;

	for (let i = 1; i <= 5; i++) {
		if (i <= fullStars) {
			stars.push(<Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />);
		} else if (i === fullStars + 1 && hasHalfStar) {
			stars.push(
				<div key={i} className="relative">
					<Star className="w-4 h-4 text-orange-500/30" />
					<div className="absolute inset-0 overflow-hidden w-1/2">
						<Star className="w-4 h-4 fill-orange-500 text-orange-500" />
					</div>
				</div>
			);
		} else {
			stars.push(<Star key={i} className="w-4 h-4 text-orange-500/30" />);
		}
	}

	return <div className="flex items-center gap-0.5">{stars}</div>;
}
