//Day 03 10-04-2024

// if(true)
// {
//     console.log("This true");
// }
// else
// {
//     console.log("Not true");
// }



// if(false)
// {
//     console.log("This true");
// }
// else
// {
//     console.log("Not true");
// }


// > <, =>, <=, ==, ===,!=, !==

// const score  = 200;
// if(score > 100)
// {   
//     const result = 12;
//     console.log(`You got ${score} marks`);
// }
// // console.log(result);  //This is out of scope 
// console.log(score);


//Implicit scope/ short scope

// const score  = 200;
// if(score > 100) console.log(`You got ${score} marks`);

// const score  = 200;
// if(score > 100) console.log(`You got ${score} marks`), console.log("This is out of scope");  //This is im mature coding way.



//Multiple value to get into we use switch statement


// const marks =1;

// switch (marks) {
//     case 1:
//         console.log( "You got 200 marks");
//         break;
//     case 2:
//         console.log( "You got 100 marks");
//         break;
//     case 3:
//         console.log( "You got 300 marks");
//         break;
//     case 4:
//         console.log( "You got 500 marks");
//         break;
//     case 5:
//         console.log( "You got 190 marks");
//         break;
//     default:
//         console.log( "You got failed ");
//         break;
// }


//Truthy and falsy value:
//We assume that this truth or given that then this will be a truthy/falsy.

// const userEmail = "myemail.in";
// if (userEmail) {
//     console.log("You can login ")
// } else {
//     console.log("This is false because not correct email.")
// }

//false value :  "", null, undefined, NaN, BigInt 0n, 0, -0

//truthy value : " ", [], 'false', { }, function(){},




/*
  false  == 0     => true,
    0    == false => true,
  false  == ''    => true,
   ''    == 0     => true,

*/


//nullish coalescing operator :nul undefined

//let value1 ;
//value1 = 12 ?? 13;  //sometimes db sy 2 values ati h k kon c deni h ya s trah ka koi concept h.
//console.log(value1);

//ha agr null or undefined use karein gy tu ye us k bad jo value ho gi us ko ly ga.

//let value1 ;
//value1 =  null ?? 12 ?? 13;
//console.log(value1);

//let value1 ;
//value1 =  undefined ?? 12 ?? 13;
//console.log(value1);

let value1 =15 ;
value1 >=   12  ?  console.log(" You can efford it ") : console.log("You can't efford it.");
