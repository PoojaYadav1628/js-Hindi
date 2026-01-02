const accountId=144553
let accountEmail="pooja2828@google.com"
var accountPassword ="1234"
accountCity="Jaipur"

let accountState;

// accountId=2// not allowed to change const

// this way to change value of const 
accountEmail="hc@hc.com"
accountPassword ="128734"
accountCity="Raipur"

/*
prefer not use var
because of issue in block scope and functional  scope

*/


 console.log(accountId);// for 1 value 
console.table ([ accountEmail,accountId,accountPassword,accountCity,accountState]);   // for multip value change
