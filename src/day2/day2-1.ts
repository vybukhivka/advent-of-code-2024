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

type ReportsList = number[][];
type Report = number[];

function parseInput(puzzleInput: string): ReportsList {
	const reports: string[] = puzzleInput.split("\n");
	const parsedReports = reports.map((report: string) =>
		report.split(" ").map((level) => Number(level)),
	);

	return parsedReports;
}

function validateDirection(report: Report) {
	const firstLevel = report[0];
	const secondLevel = report[1];
	const direction = firstLevel > secondLevel ? "decreasing" : "increasing";
	// console.log(direction);

	for (let i = 1; i < report.length - 1; i++) {
		const currentLevel = report[i];
		const nextLevel = report[i + 1];

		if (direction === "increasing" && currentLevel > nextLevel) {
			// console.log(
			// 	`Increasing order was broaked. Current: ${currentLevel}; Next: ${nextLevel}`,
			// );
			return { isSafe: false, levelIndex: i };
		}
		if (direction === "decreasing" && currentLevel < nextLevel) {
			// console.log(
			// 	`Decreasing order was broaked. Current: ${currentLevel}; Next: ${nextLevel}`,
			// );
			return { isSafe: false, levelIndex: i };
		}
		// console.log(
		// 	`Direction: ${direction}; Current: ${currentLevel}; Next: ${nextLevel}`,
		// );
	}
	// console.log(`Report: ${report} is safe with direction: ${direction}`);
	return { isSafe: true };
}
function validateDifference(report: Report) {
	for (let i = 0; i < report.length - 1; i++) {
		const currentLevel = report[i];
		const nextLevel = report[i + 1];

		if (
			Math.abs(currentLevel - nextLevel) >= 1 &&
			Math.abs(currentLevel - nextLevel) <= 3
		) {
			continue;
		}

		return { isSafe: false, levelIndex: i };
	}
	return { isSafe: true };
}

function validation(report: Report) {
	const isSafeDirection = validateDirection(report);
	if (!isSafeDirection.isSafe)
		return { isSafe: false, levelIndex: isSafeDirection.levelIndex };

	const isSafeDifferece = validateDifference(report);
	if (!isSafeDifferece.isSafe)
		return { isSafe: false, levelIndex: isSafeDifferece.levelIndex };

	return { isSafe: true };
}

export function day2part1() {
	// debugger;
	const reportsArray: ReportsList = parseInput(data);
	let safeReportsCount = 0;
	// console.log(reportsArray);
	for (const report of reportsArray) {
		const { isSafe } = validation(report);
		isSafe ? safeReportsCount++ : null;
	}

	console.log(safeReportsCount);

	return true;
}
