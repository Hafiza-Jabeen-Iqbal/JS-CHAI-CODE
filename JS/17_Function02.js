// Day 03 10-04-2024

/*

*/


//How to add multiple value in function:
/*
=> Tu bhai bat s trah h k jb jb kabhe humein bahut sari value di jati h
un ko print karna hota h tu ye kasiy possible h

function print(value1){
    return value1;
}
print(10);


=> agr hamry pas 10 value pass ho as argument tu kaisy karein gy. Tu s k liy mery bhai apk
pas hota h rest/spread operator yaha py rest bolein gy.

function print(...value1){
    return value1;
}
console.log(print(10,1,3,46,34,65,78,90));

=> aur ye array bana k dy ga aur jaha humein zarurt parni h use kar lein gy.



=> aik aur scenrio bhe hota h k jb parameter ziyda ho

function print(value1, value2,  ...value){
    return value;
}
console.log(print(10,1,3,46,34,65,78,90));


*/





// function print(value1, value2,  ...value){
//     return value1+ value2 ;
//     return value; //ye return nhe kary ga
// }

// console.log(print(10,100,3,46,34,65,78,90));


//How to use object vlaue in function

// const user = {
//     username :"ali",
//     id:123456,
//     email:"ali@gmail.com",
// }

function print(anyObject){
    console.log (`User name is ${anyObject.username} and email is ${anyObject.email}`); 
}
// print(user);
   //ab s ko hum asiy bhe use kar sakty thy aur karty bhe aisy hi h.


//    print(
//     {
//         username :"Ali",
//         id:08766,
//         email:"ALi@gmail.com",
//     }
//    )




//How to get value/use in an array.

const myArray = [1,2,3,4,5,6,7,8,9,10];

function getArrayValue ( getvalue)
{
     return myArray[5];
}

// console.log(getArrayValue(myArray));
console.log(getArrayValue([1,2,3,4,5,6,7,8,9,10])); //This s same thing as we did above
