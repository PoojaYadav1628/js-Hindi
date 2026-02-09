// Java is dynamically type language or  Staticaty type langyage 
// Javascript not define the type of language  
// Javascript is dynamically type language 

// Primtive     is call by vaue  {not orginal value only have refaral  }


/* 7 types : String,Number,Boolean,Null ,Undefined,
Symbol,BigInt(long value or scientific value)*/

const score =100
const scoreVale =100.3 // not define is ecimla no or flot no is no 
const isLoggedIn =false
const outsideTemp =null
let userEmail;   // or let userEmail =undefined
   

// Symbol define but id also have many idbcz it always unique 
 const id = Symbol('123 ')
 const anotheId =  Symbol ('123')

 console.log (id=== anotheId);

const bigNumber =122547332547456n


///Refrence (Non primitive) 

//Array,Objects ,function (function return object function


const heros =[" shaktimn","naagraj","doga"] //array 
  let myObj ={

//that in curilly brase that are object 


    name: "pooja",
    age :22,
  }
  //function declare  in varible 
   const myfunction = function(){
    console.log("hello world");
   }
   console.log (typeof anotherId);



   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   // merory 2 type 
   //   Stack (Primitive) ,Heap (Non Primitive)

   let myYoutubename= "midnytlko"

   let anothername =myYoutubename 
    anothername = "chaiorcode"

   console.log(myYoutubename);
   console.log(anothername);

   let userOne ={
    email:"use@gmail.com",
    upi:"user@ybl"
   }

   let userTwo =userOne

   userTwo.email ="pooja@goggle.com". //( the value is change of both user one and user two  )
          // the value is change in both user 
   console.log(userOne.email);
   console.log(userTwo.email);

