//array

const myArr= [0,1, 2, 3, 4, 5 ]
// array make  1 variable and store multiple value data 
// array is a data structure that can hold multiple values at once. It is a collection of elements, where each element is identified by an index or a key. Arrays are commonly used in programming to store and manipulate lists of data. They can be of fixed size or dynamic, depending on the programming language being used. In JavaScript, arrays are dynamic and can grow or shrink in size as needed.

// array can hold different types of data 
/*const myHeros= [ "John ","naag" ]
const myArr2 =new Array(1,2,3,4,5) // another way to create array
console.log(myArr[3]);*/

//Array methods 

//myArr.push(6) // add element at the end of the array
//myArr.push(7) // add element at the end of the array    
//myArr.pop () // remove element from the end of the array
//myArr.unshift(9) // add element at the beginning of the array
//myArr.shift() // remove element from the beginning of the array 

 /*console.log (myArr.includes(9)) // check if the array includes a specific element
console.log (myArr.indexOf(5))*/ // find the index of a specific element


/*const newArr =myArr.join() // join the array elements into a string with a specified separator
console.log(myArr);
console.log (typeof  newArr);*/

//slice, splice

console.log("A" ,myArr);


const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 =myArr.splice(1,3)
console.log("C" , myArr);
console.log(myn2);