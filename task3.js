function getFirstNumber(numberOne) {
    return function (numberTwo) {
        return numberOne + numberTwo;
    };
}

let result = getFirstNumber(3);

console.log(result(4));