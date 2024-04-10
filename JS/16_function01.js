//Day 03  10-04-2024

/*
In js function are important because apko
memory management bhe parhna hota h.

*/

// function Greeting(){  //scope or definition 
//     console.log('Hello');
// }
// Greeting  //this is reference 
// ();       // execution
//calling of function



// in function diff names hamry pas parameter and values arguments ho gi.
function addMyNumber (num1, num2)
{
    return num1 + num2;
}
let result1 = addMyNumber(13, 17);
// console.log("The result is :", result1); //30

function addMyNum (num1, num2)
{        
         // console.log("hello");  //aur agr upar ho ga tu output mein answer dy ga.
                                 //jb clg likhein gy tu ye return wahi answwer nhe kary ga 
       // console.log(num1 + num2) ; 
       // console.log("hello");    //bal k undefined hi dy ga ..ha agr hum return dein gy tu dy ga wahi answer
                                //aur ye return k bad kuch nhe return kary ga ye func ki definition h 
                            }                                
 let result =addMyNum(13, 17);
// console.log("The result is :", result); //30



// function logIn(userName){
//         return `${userName} is login`;
// }

// logIn("ali");   //ye work nhe kary gi so s k yad rakhein k store karna h kahi py.
// console.log(logIn("Jabeen"));
// console.log(logIn());  //agr koi value pass hi nhe karein gy tu ye : undefined ay ga.
//console.log(logIn( typeof  ''));  //string
// console.log(logIn( typeof  false));  //boolean
// console.log(logIn( typeof  Number));   //function
// console.log(logIn( typeof  1234));     //Number

 


function logIn(userName = " ali "){
    //   (userName)
    //   {
        // return `Please enter your name`;
            
    //   }
        return `${userName} is login`;
}
// console.log(logIn()); 
console.log(logIn("Jabeen"));   // tu wo ye value ly ga na k ali q k update ho gai h idhr
//ye work  kary gi so s k yad rakhein k store karna h kahi py.