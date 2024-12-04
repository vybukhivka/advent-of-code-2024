import { calcMulsWithSum, data, findMuls } from "./day3-1";

const data = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

function findDont(inputData) {
	const dontReg = /don\'t\(\)/g;
	const dontMatches = inputData.matchAll(dontReg);
	const compareFn = (a, b) => (a > b ? -1 : 0);
	let dontIndexes = [];

	for (const match of dontMatches) {
		dontIndexes.push(match.index);
	}

	return dontIndexes.sort(compareFn);
}

function findDo(inputData) {
	const dontReg = /do\(\)/g;
	const doMatches = inputData.matchAll(dontReg);
	const compareFn = (a, b) => (a > b ? -1 : 0);
	let doIndexes = [];

	for (const match of doMatches) {
		doIndexes.push(match.index);
	}

	return doIndexes.sort(compareFn);
}

function createMulSelections(doArr, dontArr) {
	const disabled = [];
	const enabled = [];
	let currentDont = 0;
	let currentDo = 0;
	let lastDont = -1;
	let lastDo = -1;

	console.log("dont", dontArr);
	console.log("do  ", doArr);

	// do() enables future mul instructions
	// from start of the string and till first don't muls must be executed
	// don't() disable future mul instructions

	// enabled mul! from: 18362 till: 19050
	for (let i = 0; i < dontArr.length; i++) {
		// take dont and find next do that > then that don't
		// this selection with disabled mul
		for (const dontIndex of dontArr) {
			if (currentDo < dontIndex && dontIndex !== lastDont) {
				currentDont = dontIndex;
				lastDont = currentDont;
				enabled.push([currentDo, currentDont]);
				break;
			}
		}

		if (currentDo === lastDo && lastDont === currentDont) {
			console.log("returned");
			return;
		}

		// then find next dont that > then last do
		// this selection with enabled mul
		for (const doIndex of doArr) {
			if (currentDont < doIndex && doIndex !== lastDo) {
				currentDo = doIndex;
				lastDo = currentDo;
				disabled.push([currentDont, currentDo]);
				break;
			}
		}
	}
	enabled.push([currentDo, 0]);
	return { enabled, disabled };
}

function multiplySelection(enabledRange, str) {
	let sum = 0;
	for (const [start, end] of enabledRange) {
		console.log(str.slice(start, end));
		const muls = findMuls(str.slice(start, end));
		sum += calcMulsWithSum(muls);
	}
	return sum;
}

// Store muls that placed before 'don't()' and after 'do()'
export function day3part2() {
	const dataCopy = data;
	const doIndexes = findDo(data);
	const dontIndexes = findDont(data);
	const { enabled, disabled } = createMulSelections(doIndexes, dontIndexes);

	const sum = multiplySelection(enabled, data);

	console.log("enabled", enabled);
	// console.log(disabled);
	console.log(sum);

	return true;
}
