function isCheckedValue(arr, value) {
	for (const item of arr) {
		if (item.innerHTML === value) {
			return item.innerHTML
		}
	}
	return ''
}
const InputNumber = (item, contentBtn) => {
	if (isZeroResult) {
		resultDisplay.textContent = ''
		isZeroResult = false
	}
	resultDisplay.textContent += isCheckedValue(arrayCalNumber, contentBtn)
}
function isCheckNullAndUndefined(object) {
	return object.textContent !== null || object.textContent !== undefined
		? true
		: false
}
function operation(key) {
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
				if (resultDisplay.innerHTML === 0) {
					resultDisplay.innerHTML = `Деление на ноль невозможно`
				} else {
					resultDisplay.innerHTML = 1 / resultDisplay.innerHTML
				}
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
		default:
			break
	}
}
function clickCalBtn(item) {
	const contentBtn = item.querySelector(
		'.calculation__item .calculation__btn'
	).innerHTML

	InputNumber(item, contentBtn)

	if (isCheckedValue(arrayMathOperation, contentBtn)) {
		operation(contentBtn)
	}
}
