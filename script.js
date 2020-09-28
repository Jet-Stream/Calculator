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
//add event listener to first number button that adds '1' to field box
const numberButtons = Array.from(document.getElementsByClassName('numberButton'));
console.log(numberButtons[0]);
let firstNumberBox = document.getElementById('calcDiv1');
for(let i=0; i<= numberButtons.length; i++){
numberButtons[i].addEventListener('click', () =>{
    firstNumberBox.innerHTML += numberButtons[i].firstChild.textContent;
});
}
//if calcDiv1, operatorDiv and calcDiv2 are all blank, clicked numbers go to calcDiv1
//if calcDiv1 and operatorDiv have content, clicked numbers go to calcDiv2
const operatorButtons = Array.from(document.getElementsByClassName('operatorButton'));
console.log(operatorButtons[0]);
let operatorBox = document.getElementById('operatorDiv');
for(let i=0; i<= operatorButtons.length; i++){
    operatorButtons[i].addEventListener('click', () => {
         operatorBox.innerHTML += operatorButtons[i].firstChild.textContent;
     });
 }

