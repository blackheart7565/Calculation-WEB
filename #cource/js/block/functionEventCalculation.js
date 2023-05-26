function clickCalNums(calNum) {
	if (resultDisplay.innerHTML === '0' || isEnterValues) {
		resultDisplay.innerHTML = ''
	}
	isEnterValues = false
	resultDisplay.innerHTML += calNum.innerHTML
}
function clickClearAll(e) {
	navigationCal.resetValues()
}
function clickClearResultDisplay(e) {
	navigationCal.restResultDisplay()
}
function clickDeleteValues(e) {
	navigationCal.deleteByOneValues()
}
function clickEquals(e) {
	EqualsOperation()
}
function clickMathOperations(operation) {
	mathOperation(operation.innerHTML)
}
