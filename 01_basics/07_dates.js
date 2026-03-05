//Dates

let mydate = new Date();
/*console.log(mydate.toString()); // it show the current date and time in string 
console.log(mydate.toDateString()); // it show the current date in string
console.log(mydate.toTimeString()); // it show the current time in string
console.log(mydate.toLocaleDateString()); // it show the current date in local format
console.log(mydate.toLocaleTimeString()); // it show the current time in local format 
console.log(typeof mydate); // it show object because date is object in javascript

//  date methods*/

//let myCreatedDate = new Date('2020-1-10');
//console.log(myCreatedDate.toDateString());// it show the date in string format that we created

//let myCreatedDateTime = new Date('2020-1-10 12:30:00');
//console.log(myCreatedDateTime.toString()); // it show the date and time in string format that we created
 
//let myCreatedDate = new Date("2026-1-10"); // month start from 0 to 11 so it show january month
let myCreatedDate = new Date("01-14-2026"); // month start from 0 to 11 so it show january month
//console.log(myCreatedDate.toLocaleString()); //  it show the date and time in string format that we created but month start from 0 to 11 so it show january month
 

//timestamp 
let myTimeStamp = Date.now(); // it show the current timestamp in milliseconds
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime()); // it show the timestamp of the date that we created in milliseconds

//console .log (Date.now() /1000); // it show the current timestamp in milliseconds or show in float  
//console.log(Math.floor(Date.now() / 1000)); // it show the current timestamp in seconds


let newDate = new Date();
console.log(newDate);
 console.log(newDate.getMonth()); // it show the current month (0-11)
console.log(newDate.getDate()); // it show the current date (1-31)
console.log(newDate.getDay());
// 'getDay()' method returns the day of the week for the specified date according to local time, where 0 represents Sunday and 6 represents Saturday.
// '${newdate. getDay()}' it show the current day of the week in number format (0-6) where 0 is Sunday and 6 is Saturday    
newDate.toLocaleDateString('default',   {
    weekday: 'long',
}) // it show the current date in local format