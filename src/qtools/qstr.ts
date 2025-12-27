export const smartPlural = (n: number, singular: string, plural?: string): string => {
	if (plural === undefined) {
		plural = singular + "s";
	}

	if (n === 1) {
		return `${n} ${singular}`;
	} else {
		return `${n} ${plural}`;
	}
}