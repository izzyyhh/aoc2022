import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

interface Interval {
  start: number
  end: number
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const plans = input.split("\n")
  let total = 0

  for (const p of plans) {
    const intervals: Interval[] = []
    const stringIntervals = p.split(",").map((x) => x.split("-"))

    stringIntervals.forEach((i) => {
      intervals.push({
        start: parseInt(i[0]),
        end: parseInt(i[1]),
      })
    })
    if (
      intervals[0].start <= intervals[1].start &&
      intervals[0].end >= intervals[1].end
    ) {
      total++
    } else if (
      intervals[1].start <= intervals[0].start &&
      intervals[1].end >= intervals[0].end
    ) {
      total++
    }
  }

  return total
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const plans = input.split("\n")
  let step = 0
  let total = 0

  for (const p of plans) {
    const intervals: Interval[] = []
    const stringIntervals = p.split(",").map((x) => x.split("-"))

    stringIntervals.forEach((i) => {
      intervals.push({
        start: parseInt(i[0]),
        end: parseInt(i[1]),
      })
    })
    intervals.sort((x, y) => x.start - y.start)
    if (intervals[0].end >= intervals[1].start) {
      total++
    }
  }

  return total
}

run({
  part1: {
    tests: [
      {
        input: `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
