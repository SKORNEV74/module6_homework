let arr = [1, 2, 4, 0, null, "5", {}, undefined, NaN, true, "", []];

function countOddAndEvenElem(arr) {
    let odd = 0, even = 0, zero = 0, other = 0;

    arr.forEach(function (item, index, array){
        if (isNaN(item) || typeof item === "number") {
            other++;
        } else if (item === 0) {
            zero++;
        } else {
            (item % 2 === 0) ? even++ : odd++;
        }
    });

    console.log(`odd: ${odd}, even: ${even}, zero: ${zero}, other: ${other}`);
}

countOddAndEvenElem(arr);