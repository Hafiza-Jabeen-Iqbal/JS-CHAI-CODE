//Day 02 08-05-2024   Object part-01

/*
In js if want to learn it, make strong grip on
objects and events

*/

// //Object Literal
// const myDetails ={
//     name: 'Jabeen',
//     id: 123,
//     age: 23,
//     address: {
//         city: 'Lahore',
//         state: 'Punjab',
//         country: 'Pakistan'
//     }
// };

// console.log(myDetails.address);       //This is not good way to access any value from key in object
// console.log(myDetails["address"]);   //Best way to access and use it.


//Interview
//How to use symbol as key?
// const name =  Symbol ("Jabeen");  //define 

const myDetails2 = {
       name:" Jabeen ",
         id: 132546,
        age: 19,
        address: {
        city: 'Lahore',
        state: 'Punjab',
        country: 'Pakistan'
             }
};

// console.log( typeof myDetails2.sym )  //undefined
// console.log(typeof  myDetails2[sym] );  //string  s liy dy ga k
//Majorly we acess the value by  . but in some cases we use [] too.



//If any changes 
// myDetails2.address.city = " Faisal Abad, Pakistan";
// console.log(myDetails2.address);

// console.log(myDetails2.address);
// console.log(myDetails2);

myDetails2.greeting = 
function (){
        return (`Hello, I'm ${this.name} and born ${this.address.country} `)
}
console.log(myDetails2.greeting());
