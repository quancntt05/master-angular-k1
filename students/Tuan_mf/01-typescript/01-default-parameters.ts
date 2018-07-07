var link = function (height?, color?, url?) { //có ? thì có giá trị sau đó hay không cũng đk nếu k có ? thì link() bị lỗi
    var height = height || 50
    var color = color || 'red'
    var url = url || 'http://azat.co'
    console.log(height);
    console.log(color);
    console.log(url);
}
link();
link(100);
link(150, "blue");
link(100, 'yellow', 'http://fb.com');
link(null, '', 0);
console.log('---------------------------------------------');
var a1 = undefined;
var b1 = null;
var c1 = false;
var d1 = "";
var e1 = 0;
var f1 = NaN;
var g1 = 15;
// dấu || nó sẽ bỏ qua các giá trị là false undefined null 0 " " NaN
console.log(a1 || b1 || c1 || d1 || e1 || f1 || g1);
console.log('---------------------------------------------');
var link2 = function (height = 50, color = 'red', url = 'superdevvn.com') { //có ? thì có giá trị sau đó hay không cũng đk nếu k có ? thì link() bị lỗi
    console.log(height, color, url);
}
link2();
link2(100);
link2(150, "blue");
link2(100, 'yellow', 'http://facebook.com');
link2(null, '', '0');