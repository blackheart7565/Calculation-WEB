const listItems = document.querySelectorAll('.calculation__item'),
	resultDisplay = document.getElementById('result-display'),
	viewDisplay = document.getElementById('view-display'),
	arrayCalNumber = document.querySelectorAll('.number'),
	arrayMathOperation = document.querySelectorAll('.math-operation')

const clearAll = document.getElementById('clearAll'),
	clearResult = document.getElementById('clearResult')

// проверка на наличие нуля перед вводом
let isZeroResult = true
let isSwitch = true
