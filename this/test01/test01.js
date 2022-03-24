// 呼び出しコンテキスト
function foo() {
    console.log(this);
}
foo();

let bar = {
    foo
}

bar.foo();