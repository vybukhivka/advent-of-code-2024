import { getInputData } from "../day3/day3-1";

const data = await getInputData("/day4-input.txt");
const exampleData = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

type AllIndexes = number[][];

// 1. Find all X indexes
function findIndexes(splitedStrings: string[]): AllIndexes {
  const xIndexes: AllIndexes = [];
  for (let i = 0; i < splitedStrings.length; i++) {
    const matchedIndexes: number[] = [];
    const regexp = /X/g;
    const matches = splitedStrings[i].matchAll(regexp);

    for (const match of matches) {
      matchedIndexes.push(match.index);
    }
    xIndexes.push(matchedIndexes);
  }
  return xIndexes;
}
// 2. Horizontal search in two directions
function horizontalSearch(splitedStrings: string[]) {
  for (let i = 0; i < splitedStrings.length; i++) {
    const indexArr = [];
    const regexp = /X/g;
    const matches = splitedStrings[i].matchAll(regexp);

    for (const match of matches) {
      indexArr.push(match.index);
    }
    console.log(indexArr);
    break;
  }
}
// 3. Vertical search in two directions
function verticalSearch(puzzleInput) {}
// 4. Diagonal search in four directions
function diagonalSearch(puzzleInput) {}

export function day4part1() {
  const dataCopy = exampleData;
  const splitedData = dataCopy.split("\n");

  const allIndexes = findIndexes(splitedData);

  console.log(splitedData);
  console.log(allIndexes);

  return true;
}
