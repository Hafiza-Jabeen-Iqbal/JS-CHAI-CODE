//Day 03 10-04-2024


//Loop is also called iteration
//console.log("The table if 2  is :");
//for (let i = 1; i <= 10; i++) {
//    for (let j = 1; j <=  10; j++) {
        
//         if(i===2)
//           {
 //             console.log(i + ` * ` + j + ` = ` +  i*j);
//           }
//      }
//  }

//loop with array

//const myArray  =["Jabeen", "Sara", "Hifza", "Aliya", "Javeria", "Sana"];

//console.log( "The size of array is :" + myArray.length);

//for (let index = 0; index < myArray.length; index++) {
   //  console.log(myArray[index]);
//}

//


const myArray  =["Jabeen", "Sara", "Hifza", "Aliya", "Javeria", "Sana"];

console.log( "The size of array is :" + myArray.length);

for (let index = 0; index < myArray.length; index++) {
     if(myArray[index]==="Hifza")
     {
         console.log(myArray[index]);
         continue;
     }
     else{
         console.log(myArray[index]);
     }
}
console.log("It will skip " + myArray[2]);
