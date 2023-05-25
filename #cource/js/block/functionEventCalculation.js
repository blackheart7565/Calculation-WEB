function clickCalNums(calNum) {
	if (resultDisplay.innerHTML === '0') {
		resultDisplay.innerHTML = ''
	}
	resultDisplay.innerHTML += calNum.innerHTML
}
function clickClearAll(e) {
	resetValues()
}
function clickClearResultDisplay(e) {
	restResultDisplay()
}
function clickDeleteValues(e) {
	deleteByOneValues()
}
function clickMathOperations(operation) {
	mathOperation(operation.innerHTML)
}
