import { calcMulsWithSum, data, findMuls } from "./day3-1";

const exampleData = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

function findDont(inputData: string) {
	const dontReg = /don\'t\(\)/g;
	const dontMatches = inputData.matchAll(dontReg);
	const compareFn = (a: number, b: number) => (a > b ? -1 : 0);
	let dontIndexes = [];

	for (const match of dontMatches) {
		dontIndexes.push(match.index);
	}

	return dontIndexes.sort(compareFn);
}

function findDo(inputData: string) {
	const dontReg = /do\(\)/g;
	const doMatches = inputData.matchAll(dontReg);
	const compareFn = (a: number, b: number) => (a > b ? -1 : 0);
	let doIndexes = [];

	for (const match of doMatches) {
		doIndexes.push(match.index);
	}

	return doIndexes.sort(compareFn);
}

function createMulSelections(doArr: number[], dontArr: number[]) {
	// debugger;
	const disabled = [];
	const enabled = [];
	let currentDont = 0;
	let currentDo = 0;
	let lastDont = -1;
	let lastDo = -1;

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

function multiplySelection(enabledRange: number[][], str: string) {
	let sum: number = 0;

	for (const [start, end] of enabledRange) {
		const strEnabled = str.slice(start, end);
		const muls = findMuls(strEnabled);
		// console.log("muls", muls);

		// if (muls === null) throw new Error("muls === null");
		sum += calcMulsWithSum(muls);
	}
	return sum;
}

export function day3part2() {
	const dataCopy: string = data;
	const doIndexes = findDo(dataCopy);
	const dontIndexes = findDont(dataCopy);

	console.log("dont", dontIndexes);
	console.log("do  ", doIndexes);

	const { enabled } = createMulSelections(doIndexes, dontIndexes);
	console.log(enabled);

	const sum = multiplySelection(enabled, dataCopy);

	// console.log("enabled", enabled);
	console.log(sum);

	return true;
}
