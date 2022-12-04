import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const deerCalBlocks = input.split("\n\n")
  let max = 0

  for (const block of deerCalBlocks) {
    const calCount = block
      .split("\n")
      .map(Number)
      .reduce((a, b) => {
        return a + b
      })

    if (max < calCount) max = calCount
  }

  return max
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const deerCalBlocks: string[] = input.split("\n\n")
  const calNums = []

  for (let i = 0; i < deerCalBlocks.length; i++) {
    const calCount = deerCalBlocks[i]
      .split("\n")
      .map(Number)
      .reduce((a, b) => a + b)
    calNums.push(calCount)
  }

  return calNums
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b)
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
