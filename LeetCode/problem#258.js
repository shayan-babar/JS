const addDigits = (num) => {
    let sum = num;

    while (sum >= 10) {
        let tempSum = 0;
        let strSum = sum.toString();
        for (let i = 0; i < strSum.length; i++) {
            tempSum += parseInt(strSum[i]);
        }
        sum = tempSum;
    }
    return sum
};
