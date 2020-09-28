const sum = function add(x,y){
    return x + y;
}
const difference = function subtract(x,y){
    return x - y;
}
const product = function multiply(x,y){
    return x * y;
}
const quotient = function divide(x,y){
    if(x / y == Infinity){
        return 'no dividing by zero!'}
    else {
        return x/y;
        }
}
const calc = function operate(x,y,z){
    if(y == '+'){
        return sum(x,z);
    }
    if(y == '-'){
        return difference(x,z);
    }
    if(y == '*'){
        return product(x,z);
    }
    if(y == '/'){
        return quotient(x,z);
    }
}
let numberButtons = document.getElementsByClassName('numberButton')
  numberButtons.addEventListener('click', () =>{
    //add clicked button to field box
  });
