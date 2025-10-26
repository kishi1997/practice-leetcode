/* eslint-disable no-console */
import { twoSum } from './functions/twoSum';

const tests = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
];

// ------------------
// error
// ------------------
// iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them.
// Separately, loops should be avoided in favor of array iterations  no-restricted-syntax
// ------------------
// 解説
// ------------------
// 	1.	for...of 構文は内部的にイテレーター (iterator) を使っています。
// → これを使うと regenerator-runtime が必要になる可能性がある。
// 	2.	一部の ESLint 設定（特に AirBnB や Google スタイルなど）では、
// for...of や for...in を禁止していて、
// .forEach() や .map() の使用を推奨しています。
tests.forEach(({ nums, target, expected }) => {
  const result = twoSum(nums, target);
  const fixedResult = result.toString();
  const fixedAnswer = expected.toString();
  console.log(`配列=${fixedResult}, ターゲットスコア=${target}`);
  console.log(`→ 結果: ${fixedResult}, 正解: ${fixedAnswer}`);
  console.log(fixedResult === fixedAnswer ? '✅ OK' : '❌ NG');
  console.log('----');
});
