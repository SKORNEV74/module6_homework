function outputNumbers (first, last) {
    let intervalId = setInterval(function () {
        console.log(first++);
        if (first > last) clearInterval(intervalId);
    }, 1000);
}

outputNumbers(5, 15);