//MySelf 

let myName = "Shayan"

let Age = "18"

let Passion = "Programming"

let = Hobby = "Coding & Cricket"

console.log(`Name:`, myName);

console.log("Age:", Age);

console.log("Passion:", Passion);

console.log(`Hobby:`, Hobby);

//


//       Table of 17         //

console.log("17 x 1 =", 17 * 1);

console.log("17 x 2 =", 17 * 2);

console.log("17 x 3 =", 17 * 3);

console.log("17 x 4 =", 17 * 4);

console.log("17 x 5 =", 17 * 5);

console.log("17 x 6 =", 17 * 6);

console.log("17 x 7 =", 17 * 7);

console.log("17 x 8 =", 17 * 8);

console.log("17 x 9 =", 17 * 9);

console.log("17 x 10 =", 17 * 10);

//

let a = 13;

let b = 20;

// a or b value

console.log("a = 4 b = 9");

console.log("a x b =", a * b);

console.log("++b =", ++b);

console.log("a - b =", a - b);

console.log("a / b =", a / b);

console.log("17", -2 * 2 + 9);

console.log("a = b", -2 * 4 / 2);

console.log("a = b", 2 + 9 * 9);

//

//Number

let Number1 = 6;

let Number2 = 9;

let Number3 = 13;

let Number4 = 4;

let Number5 = 8;

console.log(Number4 + Number3);

console.log(Number3 === 37);

console.log(Number5 * Number1);

console.log(Number3 / Number5);

console.log(Number4,48);

//

//{Modulus
//Exponention
//Increment
//Decrement}

let x = 13
let y = 17

// +,-,*,/
console.log(x - y);
console.log(y * x);
console.log(x / 6);
console.log(y + "69");
console.log(x - y * y / x);

//Modulus
console.log(x % y);
console.log(y % x);
console.log(x % 6.9);
console.log(7.8 % 3.6);

//Exponentiation
console.log(x ** 10);
console.log(3 ** 3);
console.log(x ** y);
console.log(9 ** 2);
console.log(4 ** 4);

//Increment

let s = 28
let g = 20

console.log(s++);
console.log(g++);
console.log(s);
console.log(++s);
console.log(++s);

//Decrement

let a = 50
let b = 31

console.log(--a);
console.log(--b);
console.log(b--);
console.log(b);
console.log(a--);
console.log(a);

//Assignment Operator

let p = 79
let k = 92

console.log("p = p + 1");
p += 1
console.log(p);

console.log("k = k - 10");
k -= 20
console.log(k);

console.log('p = p * 7');
p *= 5
console.log(p);

console.log("k = k / 9");
k /= 9
console.log(k);

console.log("p = p % 5");
p %= 9
console.log(p);

//

let X = 44 + 2 * 6 / 1
let Y = 80 - 40 * 3 / 9

//Comparison Operators

console.log("X == Y", X == Y);
console.log("X != Y", X != Y);
console.log("X >= Y", X >= Y);
console.log("X <= Y", X <= Y);
console.log("51" == X);
console.log("17" == 17);
console.log("40" === 40);
console.log("18" != 17);
//

//Logical Operators

let a1 = 18
let b2 = 17
let cond1 = a1 == a1
let cond2 = a1 >= a1

//Logical And &&
console.log(a1 == a1 && a1 >= a1);
console.log(cond1 && cond2);
console.log(1 + 2 - 7 == -4 && -4 >= 1 + 2 - 7);
console.log(b2 == b2 && "b2" == 'b2');
console.log(59 != 56 && 78 >= 20);
//

//Logical OR ||
console.log(17 == 17 || 17 < 9);
console.log(cond1 || "19=2");
console.log(-22 == '-22' || "85" > 86);
//

//Conditional Statement

let weather = 35
let score = 99
//If Statement
if (weather > 20) {
    console.log('Weather very hot');
}

if (score > 50) {
    console.log("Not Out");
}

if (50 > 20) {
    console.log("50 greater then 20");
}

if (20 < 50) {
    console.log("20 less then 50");
}

if (score < 72) {
    console.log("Out");
}
//

//Array or loop
let Cities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta', 'Faisalabad'];
console.log('Lenght', Cities.length);
for (let i = 0; i < Cities.length; i++) {
    console.log(Cities[i]);
}
//

//loop
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

//Reverse loop
for (let i = 0; i <= 100; i++) {
    console.log(100-i);
}
//

//Array

let Cities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta', 'Faisalabad'];

//

//Array methods

console.log(Cities);
Cities.push('Hyderabad')
Cities.pop()
Cities.unshift('Sialkot')
Cities.shift()

//

//
let Pakistan = true;
let India = false;
let Palestine = true;
let America = false;

if (Palestine && Pakistan) {
    console.log('We are stand with Palestine')
} else {
    console.log('We are not human')
};

if (India === America) {
    console.log('Israel is mf');
} else {
    console.log('Israel is also mf😂');
}
//

//
let age = 18
let since = 2005
let month = 'August'

console.log(age == '18');
console.log(age === '18');
console.log(age != 17);
console.log(age != age);
console.log(since + age - age);

console.log(age++);
if (age > 18) {
    console.log('my age');
} else {
    console.log("i'm 19?");
}
//

//Mini assignment

let myArr = [[2, 3, 4, 4, 4, 4], [5, 5], [5], [9, 8, 7]];

for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr[i].length; j++) {
        console.log(myArr[i][j]);
    }
}

//

//Input matrix aaray 
//Output in square values

let matrix1 = [
    [5, 2, 3],
    [7, 2, 3],
    [1, 0, 5],
];
let matrix2 = [
    [5, 2, 3],
    [7, 6, 3],
    [7, 9, 8],
];

// result = [
//   [10, 4, 6],
//   [14, 8, 6],
//   [8, 9, 13],
// ];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(matrix1[i][j] * matrix2[i][j]);
    }
}
//

//Print exact matrix with help of array and loop

let matrix1 = [
    [5, 2, 3],
    [7, 2, 3],
    [1, 0, 5],
];
let matrix2 = [
    [5, 2, 3],
    [7, 6, 3],
    [7, 9, 8],
];

let result = []

for (let i = 0; i < 3; i++) {
    result[i] = [];
    for (let j = 0; j < 3; j++) {
        let sumofmatrix = matrix1[i][j] + matrix2[i][j];
        result[i].push(sumofmatrix)
    }
}
console.log(result);
//

//

let matrix = [
    [7, 3, 6],
    [2, 4, 9],
    [3, 7, 5],
]

let matrix2 = [
    [3, 7, 5],
    [2, 4, 9],
    [7, 3, 6],
]

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(matrix[i][j] + matrix2[i][j]);
    }
}
//

//

let matrix = [
    [7, 3, 6],
    [2, 4, 9],
    [3, 7, 5],
]

let matrix2 = [
    [3, 7, 5],
    [2, 4, 9],
    [7, 3, 6],
]

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(matrix[i][j] * matrix2[i][j]);
    }
}
//

//

let matrixx = [
    [11, 3, 5, 7, 3, 4],
    [2, 1, 4, 6, 8, 10, 2, 1, 3, 4],
    [18, 30, 39, 49, 59, 2, 40, 85, 38, 63],
    [3, 5, 6],
];

for (let i = 0; i < matrixx.length; i++) {
    for (let j = 0; j < matrixx[i].length; j++) {
        console.log(matrixx[i][j]);
    }
}
//

//

let myArray = ['Pakistan', 'India', 'Bangladesh', 'Srilanka', 'Nepal'];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
};
//