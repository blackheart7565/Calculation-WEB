function isCheckedValues(arr, value) {
	for (const item of arr) {
		if (item.innerHTML === value) {
			return item.innerHTML
		}
	}
	return ''
}
function isCheckNullAndUndefined(object) {
	return object.textContent !== null || object.textContent !== undefined
		? true
		: false
}
// reset values
function resetValues() {
	viewDisplay.innerHTML = ''
	resultDisplay.innerHTML = '0'
}
// delete value in panel result
function restResultDisplay() {
	resultDisplay.innerHTML = '0'
}
// delete by 1 value
function deleteByOneValues() {
	if (resultDisplay.innerHTML.length > 0) {
		resultDisplay.innerHTML = resultDisplay.innerHTML.slice(0, -1)
	}
	if (resultDisplay.innerHTML === '') {
		resultDisplay.innerHTML = '0'
	}
}

function mathOperation(key) {
	switch (key) {
		case '+':
			{
				viewDisplay.innerHTML = `${resultDisplay.innerHTML} + `
			}
			break
		case '−':
			{
				viewDisplay.innerHTML = `${resultDisplay.innerHTML} - `
			}
			break
		case '×':
			{
				viewDisplay.innerHTML = `${resultDisplay.innerHTML} × `
			}
			break
		case '÷':
			{
				viewDisplay.innerHTML = `${resultDisplay.innerHTML} ÷ `
			}
			break
		case '⅟x':
			{
			}
			break
		case 'x^2':
			{
			}
			break
		case '√x':
			{
			}
			break
		case '%':
			{
			}
			break
		case '+/-':
			{
			}
			break
	}
}
