const navigationCal = {
	isCheckedValues(arr, value) {
		for (const item of arr) {
			if (item.innerHTML === value) {
				return item.innerHTML
			}
		}
		return ''
	},
	isCheckNullAndUndefined(object) {
		return object.textContent !== null || object.textContent !== undefined
			? true
			: false
	},
	// reset values
	resetValues() {
		viewDisplay.innerHTML = ''
		resultDisplay.innerHTML = '0'
		operation = ''
		isEnterValues = true
	},
	// delete value in panel result
	restResultDisplay() {
		resultDisplay.innerHTML = '0'
	},
	// delete by 1 value
	deleteByOneValues() {
		if (resultDisplay.innerHTML.length > 0) {
			resultDisplay.innerHTML = resultDisplay.innerHTML.slice(0, -1)
		}
		if (resultDisplay.innerHTML === '') {
			resultDisplay.innerHTML = '0'
		}
	},
	// Replacing a comma with a dot
	replaceCommaToPoint(str) {
		return Number.parseFloat(str.replace(',', '.'))
	},
	// Replacing a dot with a comma
	replacePointToComma(str) {
		return str.toString().replace('.', ',')
	},
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
				if (resultDisplay.innerHTML === '0') {
					resultDisplay.innerHTML = `Деление на ноль невозможно`
				} else {
					isEnterValues = true
					viewDisplay.innerHTML = `1/(${resultDisplay.innerHTML})`
					resultDisplay.innerHTML = navigationCal.replacePointToComma(
						1 / navigationCal.replaceCommaToPoint(resultDisplay.innerHTML)
					)
				}
			}
			break
		case 'x^2':
			{
				isEnterValues = true
				viewDisplay.innerHTML = `sqr( ${resultDisplay.innerHTML} )`
				resultDisplay.innerHTML = navigationCal.replacePointToComma(
					Math.pow(
						navigationCal.replaceCommaToPoint(resultDisplay.innerHTML),
						2
					)
				)
			}
			break
		case '√x':
			{
				isEnterValues = true
				viewDisplay.innerHTML = `√( ${resultDisplay.innerHTML} )`
				resultDisplay.innerHTML = navigationCal.replacePointToComma(
					Math.sqrt(
						navigationCal.replaceCommaToPoint(resultDisplay.innerHTML),
						2
					)
				)
			}
			break
		case '%':
			{
			}
			break
		case '+/-':
			{
				resultDisplay.innerHTML = navigationCal.replacePointToComma(
					-1 * navigationCal.replaceCommaToPoint(resultDisplay.innerHTML)
				)
			}
			break
	}
}

function EqualsOperation() {
	const arrViewDis = viewDisplay.innerHTML.split(' ')

	switch (operation) {
		case '+':
			{
				resultDisplay.innerHTML = navigationCal.replacePointToComma(
					Number.parseFloat(navigationCal.replaceCommaToPoint(arrViewDis[0])) +
						Number.parseFloat(
							navigationCal.replaceCommaToPoint(resultDisplay.innerHTML)
						)
				)
			}
			break
		case '−':
			{
				resultDisplay.innerHTML = navigationCal.replacePointToComma(
					Number.parseFloat(navigationCal.replaceCommaToPoint(arrViewDis[0])) -
						Number.parseFloat(
							navigationCal.replaceCommaToPoint(resultDisplay.innerHTML)
						)
				)
			}
			break
		case '×':
			{
				resultDisplay.innerHTML = navigationCal.replacePointToComma(
					Number.parseFloat(navigationCal.replaceCommaToPoint(arrViewDis[0])) *
						Number.parseFloat(
							navigationCal.replaceCommaToPoint(resultDisplay.innerHTML)
						)
				)
			}
			break
		case '÷':
			{
				resultDisplay.innerHTML = navigationCal.replacePointToComma(
					Number.parseFloat(navigationCal.replaceCommaToPoint(arrViewDis[0])) /
						Number.parseFloat(
							navigationCal.replaceCommaToPoint(resultDisplay.innerHTML)
						)
				)
			}
			break
	}
}
