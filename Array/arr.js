var arr = [1,2,3,4];

console.log(arr); // [ 1, 2, 3, 4, 5 ]

arr.pop();

console.log(arr); // [ 1, 2, 3, 4 ]


var arr = [1,2,3,4];

console.log(arr); // [ 1, 2, 3, 4 ]

arr.push(5);

console.log(arr); // [ 1, 2, 3, 4, 5 ]

var arr = [1,2,3,4,5];

console.log(arr); // [ 1, 2, 3, 4, 5 ]

arr.unshift(0);

console.log(arr); // [ 0, 1, 2, 3, 4, 5 ]

var arr = [1,2,3,4,5];

console.log(arr); // [ 1, 2, 3, 4, 5 ]

arr.shift();

console.log(arr); // [ 2, 3, 4, 5 ]

var arr = [1,2,3,4,5];

console.log(arr); // [ 1, 2, 3, 4, 5 ]

arr.splice(1,2); // index 1번째 부터 두개의 요소 삭제

console.log(arr); // [ 1, 4, 5 ]

arr.splice(1,0,2,3); // index 1번째부터 0개 삭제하고 2,3 삽입

console.log(arr); // [ 1, 2, 3, 4, 5 ]

var arr = [1,2,3,4,5];

console.log(arr); // [ 1, 2, 3, 4, 5 ]

var newarr = arr.slice(1,3);

console.log(newarr); // [ 2, 3 ]

var arr = [1,2,3,4,5];

var arr2 = [6,7];

var arr3 = [8,9,10];

console.log(arr.concat(arr2)); // [1,2,3,4,5,6,7]

console.log(arr.concat(arr2,arr3)); //[1,2,3,4,5,6,7,8,9,10]