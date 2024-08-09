document.addEventListener('DOMContentLoaded', function () {
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';

    function display(value) {
        const displayElement = document.getElementById('display');
        if (operator === '') {
            firstNumber += value;
            displayElement.textContent = firstNumber;
        } else {
            secondNumber += value;
            displayElement.textContent = secondNumber;
        }
    }

    function setOperator(op) {
        if (firstNumber !== '') {
            operator = op;
            const displayElement = document.getElementById('display');
            displayElement.textContent = operator;
        }
    }

    function clearDisplay() {
        document.getElementById('display').textContent = '';
        firstNumber = '';
        operator = '';
        secondNumber = '';
    }

    function calculateResult() {
        if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
            const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            document.getElementById('display').textContent = result;
            firstNumber = result.toString();
            operator = '';
            secondNumber = '';
        }
    }

    function operate(operator, num1, num2) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return null;
        }
    }

    document.addEventListener('keydown', function (event) {
        const key = event.key;
        if (!isNaN(key)) {
            display(key);
        } else if (['+', '-', '*', '/'].includes(key)) {
            display(key);
        } else if (key === 'Enter') {
            calculateResult(); 
        } else if (key === 'Escape') {
            clearDisplay();
        }
    });

    window.display = function(value) {
        if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value);
        } else {
            display(value);
        }
    };
    window.clearDisplay = clearDisplay;
    window.calculateResult = calculateResult;
    window.setOperator = setOperator;
})