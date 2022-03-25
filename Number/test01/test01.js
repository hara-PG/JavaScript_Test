/* 
    JavaScriptには、たった1つの数値型しかない
    倍精度の64ビットの数値(Number)です。
*/

// 10進数(Decimal)
console.log(.1 + .2); // 0.30000000000000004
// 正しい少数演算のためには、big.jsを使う

// 整数(integer)
console.log({max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER});
// {max: 9007199254740991, min: -9007199254740991}
// 数値の限界は、組み込みの数値型Number.MAX_SAFE_INTEGERとNumber.MIN_SAFE_INTEGERによって決まります。

//数値における安全とは丸め誤差が起きた数値ではないことが確実である
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true

console.log(Number.MAX_SAFE_INTEGER);      // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);  // 9007199254740992 - Correct
console.log(Number.MAX_SAFE_INTEGER + 2);  // 9007199254740992 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 3);  // 9007199254740994 - Rounded - correct by luck
console.log(Number.MAX_SAFE_INTEGER + 4);  // 9007199254740996 - Rounded!

// 安全な数値
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true

// 危険な値
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false