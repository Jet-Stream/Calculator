const calculate = function (x,y,z){
    if(y == '+'){
        return x+z;
    }
    if(y == '-'){
        return x-z;
    }
    if(y == '*'){
        return x*z;
    }
    if(y == '/'){
        return x/z;
    }
}
const clear = function(number1, operator, number2){
    firstNumberBox.innerHTML = '';
    operatorBox.innerHTML = '';
    secondNumberBox.innerHTML = '';
    resultBox.innerHTML = '';
    result = undefined;
};
//if calcDiv1, operatorDiv and calcDiv2 are all blank, clicked numbers go to calcDiv1
//if operatorDiv has content, clicked numbers go to calcDiv2

let numberButtons = Array.from(document.getElementsByClassName('numberButton'));
let firstNumberBox = document.getElementById('calcDiv1');
let operatorBox = document.getElementById('operatorDiv');
let secondNumberBox = document.getElementById('calcDiv2');
let resultBox = document.getElementById('resultDiv');
let operatorButtons = Array.from(document.getElementsByClassName('operatorButton'));
let total;

//for each item in numberButtonsArray, attach event listener
numberButtons.forEach(element =>  
    element.addEventListener('click', () => {
         
        if(total != undefined){
            secondNumberBox.innerHTML = element.firstChild.textContent;
        }
        else if(operatorBox.innerHTML != ''){
        secondNumberBox.innerHTML += element.firstChild.textContent;
    }
        else {
            firstNumberBox.innerHTML += element.firstChild.textContent;
        }
}));

operatorButtons.forEach(element =>  
    element.addEventListener('click', () => {

        if(element.id === 'clear'){
            clear(firstNumberBox,operatorBox,secondNumberBox,resultBox);
            } 
        else if(total != undefined){
                firstNumberBox.innerHTML = total;
                operatorBox.innerHTML = element.firstChild.textContent;
            }
  
        else if(element.id === 'equals'){
        total = resultBox.innerHTML = calculate(parseInt(firstNumberBox.innerHTML),operatorBox.innerHTML,parseInt(secondNumberBox.innerHTML));
        console.log(total);
        }
        else if(operatorBox != ''){
        operatorBox.innerHTML = element.firstChild.textContent;
        }
        else{
        operatorBox.innerHTML += element.firstChild.textContent;
        }
}));