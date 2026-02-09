const score =400
console.log(score);

const balance =  new Number (100) // if we dine new object so it show Number 
console.log(balance);

console.log(balance.toString().length); // it show 100 but it is object

console.log(balance.toFixed(2)); // it show tofixed in e commerce application for calulating the price gst

const otherNumber = 123.456789
console.log(otherNumber.toPrecision(3)); // it show 123.5 it is round off the number give the more piority to the to decimal after value 

const  hundreds = 10000
console.log (hundreds.toLocaleString('en-IN')); // it show 10,000 in indian format and in us it show 10,000.00

  //+++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++
  console.log(Math);
  console.log(Math.abs(-4)); // it show 4 it is absolute value in this - value convert to + value
  console.log(Math.round(4.6)); // it show 5 it is round off the value
  console.log(Math.ceil(4.1));// ceil is round up the value it show 5
  console.log(Math.floor(4.4)); // floor is round off the second value or lower value it show 4 
  console.log(Math.sqrt(18)); // it show 4 it is square root of the value if not or know formula disrct use the sqrt function
  console.log(Math.pow(2,3)); // it show 8 it is power of the value 2 to the power of 3
  console.log(Math.min(2,3,4,5)); // it show 2 it is minimum value in the given value
  console.log(Math.max(2,3,4,5)); // it show 5 it is maximum value in the given value
 
 //random important 
  console.log(Math.random()); // it show random number between 0 to 1 always
// for make dice game always show random number between 1 to 6 
  console.log(Math.floor(Math.random()*10) + 1); // it show random number between 0 to 9 because we multiply by 10 and floor is round off the value

  const min =10 
  const max =20

  Math.random
  console.log(Math.floor(Math.random()*(max-min+1) +min)); // it show random number between 10 to 20 because we multiply by max-min+1 and add min value