var obj1 = {
    a : 1,
    b : 'bbb'
};
console.log(obj1.a); //1
obj1.a = 2;
console.log(obj1.a); //2


var obj = {
    x : 3,
    arr : [1,2,3]
};
console.log(obj.arr[0]); //1
obj.arr = 'str';
console.log(obj.arr); //str