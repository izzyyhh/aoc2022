import run from "aocrunner"
import { resolveSoa } from "dns"

const parseInput = (rawInput: string) => rawInput

const sameChar = (str1: string, str2: string) => {
  for (let x = 0; x < str1.length; x++) {
    for (let y = 0; y < str2.length; y++) {
      if (str1[x] === str2[y]) {
        return str1[x]
      }
    }
  }
}

const prioValue = (char: string): number => {
  if (char === char.toUpperCase()) {
    return char.charCodeAt(0) - 38
  } else {
    return char.charCodeAt(0) - 96
  }
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const rucksacks = input.split("\n")
  let prioSum = 0

  for (const rs of rucksacks) {
    const firstComp = rs.substring(0, rs.length / 2)
    const secondComp = rs.substring(rs.length / 2)

    const x = sameChar(firstComp, secondComp) as string
    prioSum += prioValue(x)
  }
  return prioSum
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const rucksacks = input.split("\n")
  const badges = []

  for (let i = 0; i < rucksacks.length; i += 3) {
    for (const char of rucksacks[i]) {
      if (rucksacks[i + 1].includes(char) && rucksacks[i + 2].includes(char)) {
        badges.push(char)
        break
      }
    }
  }

  return badges.reduce((acc, badge): number => acc + prioValue(badge), 0)
}

run({
  part1: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
