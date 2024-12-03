import { example, Row } from "./day2-1";
import { data } from "./day2-input";

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

	for (let i = 1; i < report.length - 1; i++) {
		const currentLevel = report[i];
		const nextLevel = report[i + 1];

		if (direction === "increasing" && currentLevel > nextLevel) {
			return { isSafe: false, levelIndex: i };
		}
		if (direction === "decreasing" && currentLevel < nextLevel) {
			return { isSafe: false, levelIndex: i };
		}
	}

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

export function day2part2() {
	const reportsArray: ReportsList = parseInput(data);
	let safeReportsCount = 0;

	for (const report of reportsArray) {
		const { isSafe, levelIndex } = validation(report);
		if (isSafe) {
			safeReportsCount++;
			continue;
		}

		for (let i = 0; i < report.length - 1; i++) {
			const reportCopy = [...report];
			reportCopy.splice(i, 1);
			const { isSafe: isSafeCopy } = validation(reportCopy);
			if (isSafeCopy) {
				safeReportsCount++;
				break;
			}
		}
	}

	console.log(safeReportsCount);

	return true;
}
