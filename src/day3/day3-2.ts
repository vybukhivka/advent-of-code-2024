import { data, findMuls } from "./day3-1";

const example = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

function findDont(inputData) {
  const dontReg = /don\'t\(\)/g;
  return inputData.match(dontReg);
}

function findDo(inputData) {
  const dontReg = /do\(\)/g;
  return inputData.match(dontReg);
}

// Store muls that placed before 'don't()' and after 'do()'
export function day3part2() {
  const dataCopy = data;
  const muls = findMuls(data);
  const donts = findDont(data);
  const dos = findDo(data);

  const regDont = /don\'t\(\)/g;
  const dons = data.matchAll(regDont);
  for (const don of dons) {
    console.log(don);
  }

  // console.log(data);
  // console.log(muls);
  // console.log(donts);
  // console.log(dos);

  const dontIndex = dataCopy.indexOf("don't()");
  console.log(dontIndex);

  return true;
}
