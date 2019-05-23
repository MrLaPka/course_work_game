export default class getOperation{
    randomOperation(arr, capacity, bigCapacity) {
        let number = [];
        if (bigCapacity) capacity += 1;
        for (let i = 0; i < capacity; i++) {
            number[i] = arr[Math.floor(Math.random() * arr.length)];
        }
        if (parseInt(number[0]))
            return number.join('');
        return number[0];
    } 

    createOperation(capacity, bigCapacity) {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const operators = ['-', '+', '*']; 
        let firstNumber = this.randomOperation(numbers, capacity, bigCapacity);
        let secondNumber = this.randomOperation(numbers, capacity, bigCapacity);
        let operation = this.randomOperation(operators, capacity, bigCapacity);
        if (firstNumber < secondNumber && operation === '-') {
            let i = firstNumber;
            firstNumber = secondNumber;
            secondNumber = i;
        }
        return `${firstNumber} ${operation} ${secondNumber}`;
    }

}