//Day 02 Date and Time

/*
avaScript Date objects represent a single moment 
n time in a platform-independent format. Date objects 
encapsulate an integral number that represents 
milliseconds since the midnight at the beginning 
of January 1, 1970, UTC (the epoch).
*/ 


// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());

// let myCreatedDate = new Date ( 2024, 3, 10);
// console.log(myCreatedDate);

// let myCreatedDate2 = new Date ( 2024, 5, 10);
// console.log(myCreatedDate2.toString());
// console.log(myCreatedDate2.toDateString());

// let myCreatedDate3 = new Date ("2024-06-10");
// console.log(myCreatedDate3.toString());
// console.log(myCreatedDate3.toTimeString());
// console.log(myCreatedDate3.toDateString());

// let nowTime = Date.now();
// console.log(nowTime);

// let datenow = new Date("02-03-2024");
// console.log(datenow.getTime());


let myDate = new Date();
console.log(myDate);

console.log("This will show time in mili second :",myDate.getTime())
console.log("This will show hours :",myDate.getHours())

console.log("This will show Day :",myDate.getDay())
console.log("This will show month :",myDate.getMonth()) //yaha par hum +1 karty h


console.log("This will show minutes:",myDate.getMinutes())
console.log("This will show full year :",myDate.getFullYear());

console.log("This will show world timezone :",myDate.getTimezoneOffset());

// console.log(Date.now()/1000);

console.log(`The date  is :${myDate.getDate()}-${myDate.getMonth()+1}-${myDate.getFullYear()}`);