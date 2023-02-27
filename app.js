const currentNumber = document.querySelector(".currentNumber");

const previousNumber = document.querySelector(".previousNumber");

const mathSign = document.querySelector(".mathSign");

const numbersButton = document.querySelectorAll(".number");

const operatorsButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector(".equals");

const clearButton = document.querySelector(".clear");

const calculatorHistory = document.querySelector(".history");

const historyBtn = document.querySelector(".history-btn");



let result = '';

function displayNumbers (){
        if(this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
        if(this.textContent === "." && currentNumber.innerHTML === ""){
            return currentNumber.innerHTML = "0.";
        }
        

        currentNumber.innerHTML += this.textContent;
}

function operate (){
    if(currentNumber.innerHTML === "" && this.textContent ==="-"){
        currentNumber.innerHTML = "-";
        return;
    }

     else if(currentNumber.innerHTML === ""){
            return;
     }

     if(mathSign.innerHTML !== ""){
        showResult();
     }
     previousNumber.innerHTML = currentNumber.innerHTML;
     mathSign.innerHTML = this.textContent;
     currentNumber.innerHTML ="";
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




