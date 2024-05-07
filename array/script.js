let Cities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta', 'Faisalabad'];

//Array methods
console.log(Cities);
Cities.push('Hyderabad')
Cities.pop()
Cities.unshift('Sialkot')
Cities.shift()
//

//Array or loop
let Cities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta', 'Faisalabad'];
console.log('Lenght', Cities.length);
for (let i = 0; i < Cities.length; i++) {
    console.log(Cities[i]);
}
//

//
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
    [10, 3, 5, 7, 3, 4],
    [2, 1, 4, 6, 8, 10, 2, 1, 3, 4],
    [19, 30, 37, 49, 59, 2, 50, 85, 39, 64],
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
