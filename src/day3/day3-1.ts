const getInputData = async () => {
  try {
    const response = await fetch("/day3-input.txt");
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error fetching file:", error);
  }
};

const example =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
const data = await getInputData();

export function day3part1() {
  const mulReg = /mul\(\d{1,3}\,\d{1,3}\)/g;
  const matchedMuls = data.match(mulReg);
  let mulSum = 0;

  for (const mul of matchedMuls) {
    const [digits] = mul.match(/\d*\,\d*/).flat();
    const leftDigit = digits.match(/\d+/)[0];
    const rightDigit = digits.match(/,(\d+)/)[1];

    mulSum += leftDigit * rightDigit;
  }
  console.log(mulSum);
}
