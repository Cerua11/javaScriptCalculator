const currentNumber = document.querySelector(".currentNumber");

const previousNumber = document.querySelector(".previousNumber");

const mathSign = document.querySelector(".mathSign");

const numbersButton = document.querySelectorAll(".number");

const operatorsButtons = document.querySelectorAll(".operators");

const equalsButton = document.querySelector(".equals");

const clearButton = document.querySelector(".clear");

const calculatorHistory = document.querySelector(".history");

const historyBtn = document.querySelector(".history-btn");



let result = '';

function displayNumbers(){
    
}

function operate(){

}

function showResult(){

}

function clearScreen(){

}

function clearHistory(){

}



















// Listeners

operatorsButtons.forEach((button) => button.addEventListener("click", operate));

equalsButton.addEventListener("click",showResult);

clearButton.addEventListener("click",clearScreen);

numbersButton.forEach((button) => button.addEventListener("click", displayNumbers));

historyBtn.addEventListener("click", clearHistory);




