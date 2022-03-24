function outerFunction(text) {
    var variableInOuterFunction = text;
    return function() {
        console.log(variableInOuterFunction);
    }
}

var innerFunction = outerFunction("hello closure!");

innerFunction(); // "hello closure!"と出力される