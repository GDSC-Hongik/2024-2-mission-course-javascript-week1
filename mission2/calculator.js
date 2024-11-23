function plus(x,y){
    return console.log(x+y);
}

function minus(x,y){
    return console.log(x-y);
}

function times(x,y){
    return console.log(x*y);
}

function div(x,y){
    return console.log(x/y);
}

var num = prompt('식을 입력하시오.')
var cal = num.split(' ')

if (cal[1]==='+'){
    var change1 = +cal[0]
    var change2 = +cal[2]
    plus(change1,change2)
}

else if (cal[1]==='-'){
    minus(cal[0],cal[2])
}

else if (cal[1]==='*'){
    times(cal[0],cal[2])
}

else if (cal[1]==='/'){
    div(cal[0],cal[2])
}