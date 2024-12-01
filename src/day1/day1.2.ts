import { createPairs, createSortedColumns } from "./day1.1";
import { data } from "./day1.1-input";

const example = `3   4
4   3
2   5
1   3
3   9
3   3`;

export const day2 = (): number => {
	const idColumns = createSortedColumns(example);
	const idPairs = createPairs(idColumns.left, idColumns.right);
	console.log(idPairs);

	return 1;
};
