import { createSortedColumns } from "./day1.1";
import { data } from "./day1.1-input";

export const part2 = () => {
	const { left, right } = createSortedColumns(data);

	const similarities = left.reduce((similarityScore, curLeft) => {
		const amountOfMathesOnRight = right.reduce((matchCount, curRight) => {
			curLeft === curRight && ++matchCount;

			return matchCount;
		}, 0);

		return (similarityScore += amountOfMathesOnRight * curLeft);
	}, 0);

	return similarities;
};
