function add(a,b){
    return +a + +b
}
function subtract(a,b){
    return +a - +b
}
function multiply(a,b){
    return +a * +b
}
function divide(a,b){
    return +a / +b
}

let numberA;
let numberB;
let operator;


function operate(a,b,operator){
    switch (operator){
        case '+':
            return add(a,b)
        case '-' :
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b)
        default:
            return 'Invalid Operation'
    }
}