var link = function (height?, color?, url?) {
    var a = height || 50;
    var b = color || 'red';
    var c = url || 'superdevvn.com';
    console.log(a, b, c);
}

link();
link(100);
link(150, 'blue');
link(2000, 'yellow', 'superdev.edu.vn');
link(null, '', 0);
console.log("******************************");
var a1 = undefined;
var b1 = null;
var c1 = false;
var d1 = '';
var e1 = 0;
var f1 = NaN;
var g1 = 10;
console.log(a1 || b1 || c1 || d1 || e1 || f1 || g1);

console.log("******************************");
var link2 = function (height = 50, color = 'red', url = 'superdevvn.com') {
    console.log(height, color, url);
}

link2();
link2(100);
link2(150, 'blue');
link2(2000, 'yellow', 'superdev.edu.vn');
link2(null, '', '0');