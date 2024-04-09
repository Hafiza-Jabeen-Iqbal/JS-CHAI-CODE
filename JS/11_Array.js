//Day 02 Array

/*
shallow copy     vs      Deep copy


*/

// const mydetails = ["Hafiza jabeen", 
//                     20, 
//                     "BS CS",
//                     "Female", 
//                     "Education University", 
//                     "Lahore", 
//                     "Pakistan"
//                   ];

//  mydetails.push(12348);
//  console.log(mydetails);

//  console.log(mydetails.includes("Lahore"));
// console.log(mydetails.join(","));

//  console.log(mydetails.indexOf("Hafiza jabeen"));

// console.log(mydetails.length)

// console.log(mydetails[4]);
// console.log(mydetails.length);

//Array Method

// let numberArray = [1,3,5,6,2,7,9,55];

// console.log(numberArray.push('js')); 
// console.log(numberArray.shift()); //add kary ga end mein.


//  console.log(numberArray.splice(1,6));   // 
//  console.log(numberArray.slice(1,3));

//  console.log(numberArray.reverse());
//  console.log(numberArray.sort());
//  console.log(numberArray.splice(1,2));  //postion btata h k ye wlay kis index py pary h 

// console.log(numberArray.shift());
// console.log(numberArray.concat('345'));
// console.log(numberArray.shift());



// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);
// console.log(result);


//Array map method

let users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];

let userFullnames = users.map(function(element){
    return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames);
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]


