var foo = {};
var bar = foo; //barはfooの参照です
var baz = {}; //bazはfooとは異なる新しいオブジェクトです

console.log(foo === bar);
console.log(foo === baz);