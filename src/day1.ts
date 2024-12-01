import { data } from "./day1-input";

export const day1 = () => {
	const div = document.createElement("div");
	div.classList.add("greet");
	div.innerHTML += "hello day 1";

	document.body.append(div);

	function createSortedColumns(data: string): {
		left: number[];
		right: number[];
	} {
		const rows = data.replaceAll("   ", " ").split("\n");
		const left = rows.map((row: string) =>
			Number(row.slice(0, row.indexOf(" ")).trim()),
		);
		const right = rows.map((row: string) =>
			Number(row.slice(row.indexOf(" ")).trim()),
		);

		return { left: left.sort(), right: right.sort() };
	}

	function createPairs(left: number[], right: number[]) {
		const pairs = [];
		for (let i = 0; i < left.length; i++) {
			pairs.push([left[i], right[i]]);
		}
		return pairs;
	}

	function measureDistance(leftNum: number, rightNum: number): number {
		if (!leftNum || !rightNum) throw new Error("Wrong input, number expected");

		return Math.abs(leftNum - rightNum);
	}

	const idColumns = createSortedColumns(data);
	const idPairs = createPairs(idColumns.left, idColumns.right);

	const distance = idPairs.reduce((acc, cur) => {
		return acc + measureDistance(cur[0], cur[1]);
	}, 0);

	console.log(distance);

	return true;
};
