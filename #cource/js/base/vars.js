const listItems = document.querySelectorAll('.calculation__item'),
	resultDisplay = document.getElementById('result-display'),
	viewDisplay = document.getElementById('view-display'),
	arrayCalNumber = document.querySelectorAll('.number'),
	arrayMathOperation = document.querySelectorAll('.math-operation')

// проверка на наличие нуля перед вводом
let isZeroResult = true
