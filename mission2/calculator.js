function plus(n1, n2){
    return n1 + n2;
}
function minus(n1, n2){
    return n1 - n2;
}
function mul(n1, n2){
    return n1 * n2;
}
function div(n1, n2){
    return n1 / n2;
}


const inp = prompt("식을 입력하세요");
var a = +inp.substring(0, inp.indexOf(' '));
var oper = inp.substring(inp.indexOf(' ') + 1, inp.indexOf(' ', inp.indexOf(' ') + 1));
var b = +inp.substring(inp.lastIndexOf(' ') + 1);

var ans;
if(oper === '+') console.log(plus(a, b));
else if (oper === '-') console.log(minus(a, b));
else if (oper === '*') console.log(mul(a, b));
else if (oper === '/') console.log(div(a, b));