//Confusion in string to number conversion

// **************** OPerations ****************

let value = 89 ;

let negvalue = -value ;
console.log(negvalue);

console.log( 2+2);
console.log( 2-2);
console.log( 2/2);
console.log( 2%2);
console.log( 2*2);


//Trick things

let str1 = " Muhammad Shoaib " ;
let str2 = " Kalim " ;
console.log(str1 + str2 );

console.log("2" + 33 + "11");
console.log(2 + 33 + "11");
console.log("25" + 33 + "11");

console.log(7 * 3 + 22 - 11 % 14);  //This is not good way.
console.log((7 * 3)  + 22 - 11 % 14);  //This is  good way.


// This is not good way below things in production 
//environment

console.log(true); //This will give true/1
console.log(+true); //Also this 

console.log(+ "");  //false or 0
console.log(!"");  //true

num1=num3=num4=2+3;   //true
console.log(!!"");  //false or 0


let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101

let values=gameCounter++;
console.log(values);  //101


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"