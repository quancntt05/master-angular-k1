var a = 10;
var b = 15;
function sum1(a, b) {
    return a + b;
}
var sum2 = function (a, b) {
    return a + b;
};
var sum3 = function (a, b) {
    return a + b;
};
var sum4 = function (a, b) { return a + b; };
alert(sum1(a, b));
alert(sum2(a, b));
alert(sum3(a, b));
alert(sum4(a, b));
function test1() {
    var a = 10;
    {
        var a = 15;
    }
    console.log(a);
}
function test2() {
    var a = 10;
    {
        var a_1 = 15;
    }
    console.log(a);
}
function test3() {
    var a = 10;
    {
        var a_2 = 15;
    }
    console.log(a);
}
