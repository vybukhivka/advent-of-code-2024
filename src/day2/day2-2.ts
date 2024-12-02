import { createRows, Directions, example, Row, validateSafe } from "./day2-1";
import { data } from "./day2-input";

function validation(row: Row) {
	let previousLevel;
	let direction: Directions;

	for (let i = 0; i < row.length; i++) {
		if (!previousLevel) {
			previousLevel = row[i];
			continue;
		}
		if (Math.abs(previousLevel - row[i]) > 3) {
			return i - 1;
		}
		if (previousLevel === row[i]) {
			return i - 1;
		}

		if (!direction) {
			direction = previousLevel < row[i] ? "inc" : "dec";
			previousLevel = row[i];
			continue;
		}
		if (direction === "inc" && previousLevel > row[i]) {
			return i - 1;
		}
		if (direction === "dec" && previousLevel < row[i]) {
			return i - 1;
		}
		previousLevel = row[i];
	}
	return true;
}

export function day2part2() {
	const levelRows = createRows(data);

	const safeReportsNumber = levelRows.reduce((safeCount, row) => {
		const firstValidation = validation(row);
		if (typeof firstValidation === "boolean" && firstValidation === true)
			safeCount++;
		else {
			const rowWithoutWrongLevel = row;
			rowWithoutWrongLevel.splice(firstValidation, 1);
			console.log(rowWithoutWrongLevel);

			const secondValidation = validation(rowWithoutWrongLevel);
			if (secondValidation === true) safeCount++;
		}
		return safeCount;
	}, 0);

	console.log(safeReportsNumber);

	return safeReportsNumber;
}

// function validationAlgorithm(row: number[]) {
// 	const currentRow: number[] = row;
// 	let unsafeLevel: boolean = false;
// 	let previousLevel;
// 	let direction: Directions;

// 	for (let i = 0; i < row.length; i++) {
// 		if (!previousLevel) {
// 			previousLevel = row[i];
// 			console.log(`Set first preivous: ${previousLevel}`);
// 			continue;
// 		} else {
// 			if (Math.abs(previousLevel - row[i]) > 3) {
// 				console.log(
// 					`Defference is too big prev: ${previousLevel} cur: ${row[i]}`,
// 				);
// 				unsafeLevel = true;
// 				currentRow.splice(i - 1, 1);
// 				break;
// 			}

// 			if (previousLevel === row[i]) {
// 				console.log(
// 					`Defference is too big prev: ${previousLevel} cur: ${row[i]}`,
// 				);
// 				unsafeLevel = true;
// 				currentRow.splice(i - 1, 1);
// 				break;
// 			}

// 			if (!direction) {
// 				// debugger;
// 				direction = previousLevel < row[i] ? "inc" : "dec";
// 				previousLevel = row[i];
// 				continue;
// 			}

// 			if (direction === "inc" && previousLevel > row[i]) {
// 				unsafeLevel = true;
// 				currentRow.splice(i - 1, 1);
// 				break;
// 			}

// 			if (direction === "dec" && previousLevel < row[i]) {
// 				unsafeLevel = true;
// 				currentRow.splice(i - 1, 1);
// 				break;
// 			}

// 			previousLevel = row[i];
// 		}
// 	}

// 	if (!unsafeLevel) return true;

// 	if (validateSafe(currentRow)) return true;
// 	return false;
// }