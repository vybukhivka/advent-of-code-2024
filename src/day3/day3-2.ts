import { data, findMuls } from "./day3-1";

const example = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

function findDont(inputData) {
  const dontReg = /don\'t\(\)/g;
  return inputData.matchAll(dontReg);
}

function findDo(inputData) {
  const dontReg = /do\(\)/g;
  return inputData.matchAll(dontReg);
}

// Store muls that placed before 'don't()' and after 'do()'
export function day3part2() {
  const dataCopy = data;
  const muls = findMuls(data);
  const donts = findDont(data);
  const dos = findDo(data);

  for (const dontMatch of donts) {
    // console.log(dontMatch.index);
  }

  for (const doMatch of dos) {
    console.log(doMatch.index);
  }

  // console.log(data);
  // console.log(muls);
  // console.log(donts);
  // console.log(dos);

  // const dontIndex = dataCopy.indexOf("don't()"); // 100
  // const dontIndex = dataCopy.indexOf("do()"); // 315
  console.log(dontIndex);

  return true;
}
