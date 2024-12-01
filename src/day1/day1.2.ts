import { createSortedColumns } from "./day1.1";
import { data } from "./day1.1-input";

export const part2 = (): number => {
	const { left, right } = createSortedColumns(data);
	let similarityScore = 0;

	for (let i = 0; i < left.length; i++) {
		let nubmerOfMatches = 0;
		for (let j = 0; j < right.length; j++) {
			left[i] === right[j] && nubmerOfMatches++;
		}

		similarityScore += left[i] * nubmerOfMatches;
	}

	return similarityScore;

	// Nested reducers(less performant)

	// const similarities = left.reduce((similarityScore, curLeft) => {
	// 	const amountOfMathesOnRight = right.reduce((matchCount, curRight) => {
	// 		curLeft === curRight && ++matchCount;

	// 		return matchCount;
	// 	}, 0);

	// 	return similarityScore + amountOfMathesOnRight * curLeft;
	// }, 0);

	// return similarities;
};
