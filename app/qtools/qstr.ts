export const smartPlural = (count: number, plural: string, singular: string = "") => {
	if (singular === "") {
		singular = plural.slice(0, -1)
	}
	return `${count} ${count === 1 ? singular : plural}`;
}					
	