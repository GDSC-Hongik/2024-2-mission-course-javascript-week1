function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

var input = prompt("계산식 입력");
//var input = "2 + 3";
var words = input.split(' ');

var x = parseInt(words[0]);
var y = parseInt(words[2]);
var s = words[1];

if (s === '+') {
    console.log(add(x, y));
}
else if (s === '-') {
    console.log(sub(x, y));
}
else if (s === '*') {
    console.log(mul(x, y));
}
else {
    console.log(div(x, y));
}