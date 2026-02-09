const name ="pooja"
const repoCount =50

//console.log(name+ repoCount +"Value");
//console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

 // string declaration 
 const gameName =new String("pooja-hc-com")
//console.log(gameName [0]);
//console.log(gameName.__proto__);

/*console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("j"));
console.log(gameName.endsWith("a"));
console.log(gameName.includes("oo"));
console.log(gameName.substring(0,4));
console.log(gameName.slice(0,4));
console.log(gameName.split(""));
console.log(gameName.replace("poo","mou")); 
*/
const newString =gameName.substring(0,4)
console.log(newString);// (not use negative index in substring method it will not work but in slice method it will work)

const anotherString = gameName.slice(-2,3)
console.log(anotherString); // (use negative index to start from end of string and it count from -1)


const newStringOne ="  pooja    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim  use for remove space from start and end

const url = "https://pooja.com/pooja%20yadav"

url.replace('%20', '-')
console.log(url.replace('%20', '-'));


 console.log(url.includes('pooja'));
 console.log(url.includes(8,14));

 // string to arraay convert
 console.log(gameName.split('-'));
