function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');

    errorElement.textContent = '';
    resultElement.textContent = '';

    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = 'Please enter valid numbers in both fields.';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                errorElement.textContent = 'Cannot divide by zero.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            errorElement.textContent = 'Invalid operation.';
            return;
    }

    resultElement.textContent = 'Result: ' + result.toFixed(2);
}
