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
function restDisplay() {
	viewDisplay.innerHTML = ''
	resultDisplay.innerHTML = '0'
	isZeroResult = true
}
function restResultDisplay() {
	resultDisplay.innerHTML = '0'
}

const InputNumber = (item, contentBtn) => {
	if (isZeroResult) {
		resultDisplay.textContent = ''
		isZeroResult = false
	}

	if (isSwitch) {
		resultDisplay.textContent += isCheckedValues(arrayCalNumber, contentBtn)
	} else {
		resultDisplay.textContent = ''
		resultDisplay.textContent += isCheckedValues(arrayCalNumber, contentBtn)
		isSwitch = true
	}
}
function mathOperation(key) {
	switch (key) {
		case '+':
			if (isCheckNullAndUndefined(resultDisplay)) {
				viewDisplay.innerHTML = `${resultDisplay.textContent} + `
			}
			break
		case '−':
			{
				if (isCheckNullAndUndefined(resultDisplay)) {
					viewDisplay.innerHTML = `${resultDisplay.textContent} - `
				}
			}
			break
		case '×':
			{
				if (isCheckNullAndUndefined(resultDisplay)) {
					viewDisplay.innerHTML = `${resultDisplay.textContent} × `
				}
			}
			break
		case '÷':
			{
				if (isCheckNullAndUndefined(resultDisplay)) {
					viewDisplay.innerHTML = `${resultDisplay.textContent} ÷ `
				}
			}
			break
		case '⅟x':
			{
				resultDisplay.innerHTML = resultDisplay.innerHTML.replace(',', '.')
				if (isSwitch) {
					if (resultDisplay.innerHTML === 0) {
						resultDisplay.innerHTML = `Деление на ноль невозможно`
					} else {
						viewDisplay.innerHTML = `1/(${resultDisplay.innerHTML})`
						resultDisplay.innerHTML = 1 / resultDisplay.innerHTML
					}
					isSwitch = false
				}
			}
			break
		case 'x^2':
			{
				if (isSwitch) {
					resultDisplay.innerHTML = resultDisplay.innerHTML.replace(',', '.')
					viewDisplay.innerHTML = `sqr(${resultDisplay.innerHTML})`
					resultDisplay.innerHTML = Math.pow(resultDisplay.innerHTML, 2)
					isSwitch = false
				}
			}
			break
		case '√x':
			{
				if (isSwitch) {
					resultDisplay.innerHTML = resultDisplay.innerHTML.replace(',', '.')
					viewDisplay.innerHTML = `√(${resultDisplay.innerHTML})`
					resultDisplay.innerHTML = Math.sqrt(resultDisplay.innerHTML, 2)
					isSwitch = false
				}
			}
			break
		case '%':
			{
			}
			break
		case '+/-':
			{
				if (resultDisplay.innerHTML !== '0') {
					resultDisplay.innerHTML = resultDisplay.innerHTML.replace(',', '.')
					let tempNum = (-1 * resultDisplay.innerHTML).toString()
					resultDisplay.innerHTML = tempNum.replace('.', ',')
				}
			}
			break
	}
}
