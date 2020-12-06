const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

function getUserNumber(){
  return parseInt(userInput.value)
}

function operationOutput(operator, resultBeforeCalc, calcNumber){
  const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calculationDescription) 
  // from vendor file
}
function logWrite(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
){
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}

function calculateResult(calculationType){
  const enteredNumber = getUserNumber()
  const initialResult = currentResult
  let mathOperator;
  if (calculationType === 'ADD'){
    currentResult +=  enteredNumber 
    mathOperator = '+'
  } else if (calculationType === 'SUBSTRACT'){
    currentResult -=  enteredNumber 
    mathOperator = '-'
  } else if (calculationType === 'MULTIPLY'){
    currentResult *=  enteredNumber 
    mathOperator = '*'
  } else if (calculationType === 'DIVIDE'){
    currentResult /=  enteredNumber 
    mathOperator = '/'
  }

  operationOutput(mathOperator, initialResult, enteredNumber)
  logWrite(calculationType, initialResult, enteredNumber, currentResult)

}

function add(){
  calculateResult('ADD')
}

function subtract(){
  calculateResult('SUBSTRACT')
}

function multiply(){
  calculateResult('MULTIPLY')
}

function divide(){
  calculateResult('DIVIDE')
}




addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
