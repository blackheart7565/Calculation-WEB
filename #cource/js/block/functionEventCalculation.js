function clickCalBtn(item) {
	const contentBtn = item.querySelector(
		'.calculation__item .calculation__btn'
	).innerHTML

	InputNumber(item, contentBtn)

	if (isCheckedValues(arrayMathOperation, contentBtn)) {
		mathOperation(contentBtn)
	}
	if (clearAll.innerHTML === contentBtn) {
		restDisplay()
	}
	if (clearResult.innerHTML === contentBtn) {
		restResultDisplay()
	}
}