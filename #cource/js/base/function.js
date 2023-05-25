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
	operation = ''
	isEnterValues = true
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
				isEnterValues = true
				operation = '+'
				viewDisplay.innerHTML = `${resultDisplay.innerHTML} + `
			}
			break
		case '−':
			{
				isEnterValues = true
				operation = '−'
				viewDisplay.innerHTML = `${resultDisplay.innerHTML} - `
			}
			break
		case '×':
			{
				isEnterValues = true
				operation = '×'
				viewDisplay.innerHTML = `${resultDisplay.innerHTML} × `
			}
			break
		case '÷':
			{
				isEnterValues = true
				operation = '÷'
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

function EqualsOperation() {
	const arrViewDis = viewDisplay.innerHTML.split(' ')

	switch (operation) {
		case '+':
			{
				resultDisplay.innerHTML =
					Number.parseFloat(arrViewDis[0]) +
					Number.parseFloat(resultDisplay.innerHTML)
			}
			break
		case '−':
			{
				resultDisplay.innerHTML =
					Number.parseFloat(arrViewDis[0]) -
					Number.parseFloat(resultDisplay.innerHTML)
			}
			break
		case '×':
			{
				resultDisplay.innerHTML =
					Number.parseFloat(arrViewDis[0]) *
					Number.parseFloat(resultDisplay.innerHTML)
			}
			break
		case '÷':
			{
				resultDisplay.innerHTML =
					Number.parseFloat(arrViewDis[0]) /
					Number.parseFloat(resultDisplay.innerHTML)
			}
			break
	}
}
