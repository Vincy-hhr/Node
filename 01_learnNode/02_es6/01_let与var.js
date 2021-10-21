// 1. var声明变量时会预解析(变量提升)，可以先使用后声明，造成逻辑混乱
console.log(a); // undefined
var a = 10;
// 相当于
// var a;
// console.log(a);
// a = 10;


// 2、var 可以重复去定义同一个名字的变量，逻辑错误，正常来说，第二次应该是修改变量，而不是定义
var b = 20;  
var b = 30;     
console.log(b);// 30

// 3、在for循环中，会有一个临时变量的污染问题
for(var i = 0; i < 5; i++){  
    // 3.1 i是临时变量，我们希望它只能在for循环里面去用，用完就回收，即希望在for循环外面使用的时候回报错
    console.log(i);
}
console.log("-----------------");
console.log(i); // 5， 如果改成let会报错

// 4、var 声明的时候没有块级作用域{}，(ES5 ,全局和局部)

// 5. let定义变量只能先声明再使用，不可以重复定义同名变量
// 5.1 let具有块级作用域