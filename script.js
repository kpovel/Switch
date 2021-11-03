function calc(a, b, operation) {
    const isNotValid = (typeof a != 'number') || (typeof b != 'number');
    if (isNotValid) {
        result = 'Error!'
    }
    switch (operation) {
        case 'sum':
            return a + b;
        case 'min':
            return a - b;
        case 'multi':
            return a * b;
        case 'divide':
            if (b === 0) {
                return 'Division by zero is imposible';
            }
            else {
                return a / b;
            }
        default:
            return 'Unknown operator';
    }
}
console.log(calc(9, 2, 'sum'));
