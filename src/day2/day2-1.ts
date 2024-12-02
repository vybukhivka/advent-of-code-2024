const example = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

type LevelRows = number[][];

function createRows(puzzleInput: string): LevelRows {
  const output = puzzleInput
    .split("\n")
    .map((row: string) =>
      row.split(" ").map((numString: string) => Number(numString)),
    );

  return output;
}

// 2. Check if levels are safe or unsafe
// Safe:
// if levels all inc or all dec by 1-3
// Unsafe:
// if levels both inc and dec
// if levels not inc or dec [4 4]

function validateSafe(row: number[]): boolean {
  let previousLevel;
  let direction: "inc" | "dec" | unknown;
  let isSafe = true;

  for (let i = 0; i < row.length; i++) {
    console.log(row);
    // debugger;
    if (!previousLevel) {
      previousLevel = row[i];
      console.log(`First previous set to: ${previousLevel}`);
      continue;
    }
    if (Math.abs(previousLevel - row[i]) >= 3) {
      console.log(
        `Difference between prev:${previousLevel} and cur:${row[i]} > then 3`,
      );
      return false;
    }

    if (!direction) direction = previousLevel < row[i] ? "inc" : "dec";
    console.log(`Direction is ${direction}`);
    if (direction === "inc" && previousLevel > row[i]) {
      console.log(
        `Direction [${direction}] changed prev:${previousLevel}, cur:${row[i]}`,
      );
      return false;
    }
    if (direction === "dec" && previousLevel < row[i]) {
      console.log(
        `Direction [${direction}] changed prev:${previousLevel}, cur:${row[i]}`,
      );
      return false;
    }
    previousLevel = row[i];
    console.log(`Levels are good so far, previous set to: ${previousLevel}`);
  }
  console.log(isSafe);
  return true;
}

export function day2part1() {
  // Solution
  // 1. Separate rows
  const levelRows = createRows(example);
  // console.log(levelRows);
  levelRows.forEach((row) => validateSafe(row));

  // 2. Check if levels are safe or unsafe
  // Safe:
  // if levels all inc or all dec by 1-3
  // Unsafe:
  // if levels both inc and dec
  // if levels not inc or dec [4 4]
}
