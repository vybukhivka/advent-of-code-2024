import { data } from "./day2-input";

export const example = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

type LevelRows = number[][];
export type Row = number[];
export type Directions = "inc" | "dec" | unknown;

export function createRows(puzzleInput: string): LevelRows {
	const output = puzzleInput
		.split("\n")
		.map((row: string) =>
			row.split(" ").map((numString: string) => Number(numString)),
		);

	return output;
}

export function validateSafe(row: number[]): boolean {
	// debugger;
	let previousLevel;
	let direction: Directions;

	for (let i = 0; i < row.length; i++) {
		if (!previousLevel) {
			previousLevel = row[i];
			continue;
		}
		if (Math.abs(previousLevel - row[i]) > 3) {
			return false;
		}
		if (previousLevel === row[i]) {
			return false;
		}

		if (!direction) direction = previousLevel < row[i] ? "inc" : "dec";
		if (direction === "inc" && previousLevel > row[i]) {
			return false;
		}
		if (direction === "dec" && previousLevel < row[i]) {
			return false;
		}
		previousLevel = row[i];
	}
	return true;
}

export function day2part1() {
	const levelRows = createRows(example);
	console.log(levelRows);

	const safeReportsNumber = levelRows.reduce((safeCount, row) => {
		validateSafe(row) && safeCount++;

		return safeCount;
	}, 0);

	console.log(safeReportsNumber);

	return safeReportsNumber;
}
