function clickCalNums(calNum) {
	if (resultDisplay.innerHTML === '0' || isEnterValues) {
		resultDisplay.innerHTML = ''
	}
	isEnterValues = false
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
function clickEquals(e) {
	EqualsOperation()
}
function clickMathOperations(operation) {
	mathOperation(operation.innerHTML)
}
