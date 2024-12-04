export const getInputData = async () => {
	try {
		const response = await fetch("/day3-input.txt");
		const data = await response.text();
		return data;
	} catch (error) {
		console.error("Error fetching file:", error);
	}
};

export const example =
	"xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
export const data = await getInputData();

export function findMuls(inputData: string) {
	const mulReg = /mul\(\d{1,3}\,\d{1,3}\)/g!;
	const muls = inputData.match(mulReg) ?? [];
	return muls;
}

export function calcMulsWithSum(muls: string[]) {
	let mulSum = 0;

	for (const mul of muls) {
		const [digits]: RegExpMatchArray = mul.match(/\d*\,\d*/)!;
		if (!digits) throw new Error("No digits found");
		const leftDigit = digits.match(/\d+/)![0];
		const rightDigit = digits.match(/,(\d+)/)![1];

		mulSum += Number(leftDigit) * Number(rightDigit);
	}
	return mulSum;
}

export function day3part1() {
	if (!data) throw new Error("No data found");
	const matchedMuls = findMuls(data);
	if (!matchedMuls) throw new Error("No matched muls");
	const sum = calcMulsWithSum(matchedMuls);
	// console.log(sum);
	return sum;
}
