// Day 01 

/*

Events of web browser and objects master them and get into master.
JS is dynamic or statically type value h.
where the interpreter assigns variables a type at runtime based 
on the variable's value at the time.

Memory mein data ko kis trah rakha aur access kia jata h:

1. primitive 
It is called by value and give a copy of original data from memory 
as a reference to the original.
string, null, boolean, undefined, number,  symbol(uniqueness), 
bigint(bari values)

2. Non-primitive(reference type)
object, array, function

*/



let value = Symbol('23');
let valuetwo = Symbol('23');
console.log(value ===valuetwo);


const bigNum = 7834738894422572n;
console.log(typeof bigNum);

//Function, Object, array

const myArray =[ 90, 'shoaib', 'ali', 100, '89'];
console.log(myArray);

const myObject ={ 
    id:90,  
    name: 'shoaib', 
    name2:'ali',
    id2: 100, 
    valu:'89'
};
console.log(myObject);


const myfun =  function (){
    console.log(myObject);
}
myfun();


const myfun2 =  function(){
     return myfun;
}
myfun2();