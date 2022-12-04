import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const stratRows = input.split("\n")
  const winCons: { [key: string]: string } = {
    X: "C",
    Y: "A",
    Z: "B",
  }
  const hashPoints: { [key: string]: number } = {
    X: 1,
    Y: 2,
    Z: 3,
  }

  const drawCons: { [key: string]: string } = {
    X: "A",
    Y: "B",
    Z: "C",
  }

  let points = 0
  for (const row of stratRows) {
    if (winCons[row[2]] == row[0]) points += 6
    else if (drawCons[row[2]] == row[0]) points += 3

    points += hashPoints[row[2]]
  }

  return points
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const stratRows = input.split("\n")
  const revPoints: { [key: string]: { [key: string]: number } } = {
    A: { X: 3, Y: 1, Z: 2 },
    B: { X: 1, Y: 2, Z: 3 },
    C: { X: 2, Y: 3, Z: 1 },
  }
  const resultPoints: { [key: string]: number } = {
    X: 0,
    Y: 3,
    Z: 6,
  }

  let points = 0
  for (const row of stratRows) {
    points += revPoints[row[0]][row[2]] + resultPoints[row[2]]
  }

  return points
}

run({
  part1: {
    tests: [
      {
        input: `A Y
B X
C Z`,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `A Y
B X
C Z`,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
