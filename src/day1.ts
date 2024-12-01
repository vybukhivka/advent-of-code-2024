import { data } from "./day1-input";

export const day1 = (): number => {
	type Columns = { left: number[]; right: number[] };
	type Pair = [number, number];

	function createSortedColumns(data: string): Columns {
		const rows = data.split("\n");
		const left = rows.map(
			(row: string) => Number(row.slice(0, row.indexOf("   ")).trim()) || 0,
		);
		const right = rows.map(
			(row: string) => Number(row.slice(row.indexOf("   ")).trim()) || 0,
		);

		return { left: left.sort(), right: right.sort() };
	}

	function createPairs(left: number[], right: number[]): Pair[] {
		if (left.length !== right.length) {
			throw new Error("Columns have different lengths");
		}
		return left.map((value, i) => [value, right[i]]);
	}

	function measureDistance(leftNum: number, rightNum: number): number {
		if (!leftNum || !rightNum) throw new Error("Wrong input, number expected");

		return Math.abs(leftNum - rightNum);
	}

	const idColumns = createSortedColumns(data);
	const idPairs = createPairs(idColumns.left, idColumns.right);

	const distance = idPairs.reduce((acc, [left, right]) => {
		return acc + measureDistance(left, right);
	}, 0);

	return distance;
};
