function getSimpleNumber(number) {
    if (isNaN(number) || typeof number !== "number") {
        return "данные неверны";
    } else if (number === 0 || number === 1) {
        return `${number} не простое число`;
    } else {
        for (let i = 2; i < Math.sqrt(number); i++) {
            if (number % i === 0) {
                return `${number} не простое число`;
            }
        }
        return `${number} простое число`;
    }
}

let arr = [NaN, undefined, null, "string", {}, true, 0, 1, 15, 17];

arr.forEach(elem => console.log(getSimpleNumber(elem)));