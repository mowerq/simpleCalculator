function updateCalculationString(numOrOperator){
    const calculationString = document.getElementById("calculation-string");
    calculationString.textContent += numOrOperator;
}

function removeOneChar(){
    const calculationString = document.getElementById("calculation-string");
    calculationString.textContent = calculationString.textContent.slice(0,-1);
}

function resetCalculationString(){
    const calculationString = document.getElementById("calculation-string");
    calculationString.textContent = "";
    const result = document.getElementById("result");
    result.textContent = 0;
}

function calculate(){
    const result = document.getElementById("result");
    const calculationString = document.getElementById("calculation-string").textContent
    result.textContent = calculationString.length === 0 ? 0 : eval(calculationString);
}