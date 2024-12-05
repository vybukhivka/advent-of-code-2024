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
function horizontalSearch(splitStr: string[], indexes: AllIndexes) {
  let foundXmas = 0;
  for (let i = 0; i < splitStr.length; i++) {
    const str = splitStr[i];

    for (let j = 0; j < indexes[i].length; j++) {
      const indexForward = indexes[i][j];
      const indexBackward = indexes[i][j] + 1;

      if (
        indexForward + 4 <= str.length &&
        str.slice(indexForward, indexForward + 4) === "XMAS"
      ) {
        foundXmas++;
      }

      debugger;
      if (
        indexBackward >= 4 &&
        str.slice(indexBackward - 4, indexBackward) === "SAMX"
      ) {
        console.log(str.slice(indexBackward - 4, indexBackward));

        foundXmas++;
      }
    }
  }
  return foundXmas;
}
// 3. Vertical search in two directions
function verticalSearch(puzzleInput) {}
// 4. Diagonal search in four directions
function diagonalSearch(puzzleInput) {}

export function day4part1() {
  const dataCopy = exampleData;
  const splitedData = dataCopy.split("\n");

  const allIndexes = findIndexes(splitedData);
  const horizontalXmas = horizontalSearch(splitedData, allIndexes);
  console.log(horizontalXmas);

  // console.log(splitedData);
  console.log(allIndexes);

  return true;
}
