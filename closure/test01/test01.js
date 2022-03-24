function outerFunction(age) {
    var variableInOuterFunction = age;

    function bar() {
        console.log(variableInOuterFunction); // 外側のスコープにある変数にアクセスする。
    }

    bar(); // ageにアクセスできることを示すために、ローカル関数を呼び出す。
}

outerFunction("hello closure"); // "hello closure"とログに出力