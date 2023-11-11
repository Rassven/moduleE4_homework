a = 3; b = 7
function summFunc(a) {return function(b){return a+b}}
const preFunc = summFunc(a)
preFunc(b)
