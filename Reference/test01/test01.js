var foo = {};
var bar = foo; //barは同じオブジェクトへの参照です。

foo.baz = 123;
console.log(bar.baz); //123