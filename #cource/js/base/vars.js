const listItems = document.querySelectorAll('.calculation__item'),
	arrayCalNumbers = document.querySelectorAll('.number'),
	arrayMathOperations = document.querySelectorAll('.math-operation')

const equals = document.querySelector('.calculation__btn-equals')

const resultDisplay = document.getElementById('result-display'),
	viewDisplay = document.getElementById('view-display'),
	deleteValues = document.getElementById('deleteValues'),
	clearAll = document.getElementById('clearAll'),
	clearResult = document.getElementById('clearResult')

///////

let operation = ''
let isEnterValues = true
