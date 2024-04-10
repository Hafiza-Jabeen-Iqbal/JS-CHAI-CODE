//Day 03 09-04-2024
//Summary of  Object


//Object is a non-primitive data type in JavaScript. 
//It is a collection of key-value pairs. 
//It is also called an associative array because each key is associated with a value. 
//The value can be a string, number, array, method, or even another object.

const course = {
        name: " Chai aur Javascript ",
        id: 132546,
        instructor: "Hitesh Chaudry",
        rating: 4.5,
        coursePrice :1500,
        courseDuration: 10,
        courseDescription: "This is a course about Javascript",
        courseImage: "https://www.youtube.com/chaiaurcode"
     
    
};

//Object destructuring
const { courseDescription : description} = course;
console.log(description);


//Phely aisy tha na data


// const myobj =
// {
//     name: " Chai aur Javascript ",
//     id: 132546,
//     instructor: "Hitesh Chaudry",
//     rating: 4.5,
//     coursePrice :1500,
//     courseDuration: 10,
//     courseDescription: "This is a course about Javascript",
//     courseImage: "https://www.youtube.com/chaiaurcode"
// }


//Phr usy json(js notation for object) ka name dy did gya .Kia hoa k key aur values dono ko 
//consider karty as in commas.

// {
//     name: " Chai aur Javascript ",
//     id: 132546,
//     instructor: "Hitesh Chaudry",
//     rating: 4.5,
//     coursePrice :1500,
//     courseDuration: 10,
//     courseDescription: "This is a course about Javascript",
//     courseImage: "https://www.youtube.com/chaiaurcode"
// }


//Ab next jo k tha wo ab ban gya s way mein

[
       {

       },
       {

       }
]

//code ap jis mein bhe lakhein apko format json mein send karna hota h.
