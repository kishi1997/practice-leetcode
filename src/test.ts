import { twoSum } from "./functions/twoSum";

const tests = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
];

for (const { nums, target, expected } of tests) {
  const result = twoSum(nums, target);
  console.log(`nums=${nums}, target=${target}`);
  console.log(`→ result: ${result}, expected: ${expected}`);
  console.log(result.toString() === expected.toString() ? "✅ OK" : "❌ NG");
  console.log("----");
}
