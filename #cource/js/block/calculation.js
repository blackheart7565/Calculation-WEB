arrayCalNumbers.forEach(calNum => {
	calNum.addEventListener('click', e => clickCalNums(calNum))
})

clearAll.addEventListener('click', e => clickClearAll(e))
clearResult.addEventListener('click', e => clickClearResultDisplay(e))
deleteValues.addEventListener('click', e => clickDeleteValues(e))
equals.addEventListener('click', e => clickEquals(e))

arrayMathOperations.forEach(mathOperation => {
	mathOperation.addEventListener('click', e => clickMathOperations(mathOperation))
})