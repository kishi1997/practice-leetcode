// twoSum関数（ターゲットになる2つの値のインデックスを返す）
// アルゴリズム学習向けポイント：
//
// 1. Mapは key と value を持つ連想配列のようなもの
//    - map.set(2, 0) → key=2, value=0を登録
//    - map.get(2) → 0 が返る（keyが存在しなければ undefined）
//    - map.has(2) → true / false で存在確認
//
// 2. 補数(complement)の考え方
//    - target = 9, 現在の値 = 2 の場合
//      complement = 9 - 2 = 7
//      map.get(7) が存在すれば、2 と 7 の組み合わせが見つかる
//
// 3. Mapを使うメリット
//    - 配列を毎回線形検索するより高速（O(n) で完了）
//    - 値からインデックスを即座に取得できる
//
// 4. 実装Tips
//    - map.get() は undefined の可能性があるので型チェック or 非nullアサーションが必要
//    - 同じ要素を2回使わないように index の比較を忘れずに
export function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== undefined) {
      map.set(nums[i], i); // 例: map.set(2, 0)
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i]; // 例: target=9, nums[i]=2 → complement=7
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)!]; // 例: map.get(7) → 1 を返す
    }
  }

  return [];
}
