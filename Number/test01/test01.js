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

