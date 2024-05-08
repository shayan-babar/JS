var isPalindrome = function (str) {
    let arr = str.split('')
    let result = []
    let alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'

    for (let i of arr) {
        if (alphabet.includes(i.toLowerCase())) {
            result.push(i.toLowerCase())
        }
    }
    return (result.join('') == result.reverse().join(''))
};
