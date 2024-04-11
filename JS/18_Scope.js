//Day 03 10-04-2024

/*
Jo chez jaha chiy waha use ho so hum  kehty h k usy outisde use na ho. this is called scope

*/

let a =12;
const b = 13;
var c =15;

if(true)
{
    let a =14;
    const b = 16;
    var c =18;
    console.log(" Hello these value are inside the if block ");
    console.log(a);
    console.log(b);
    console.log(c);
}

    console.log(" Hello these value are outside the if block ");
    console.log(a);
    console.log(b);
    console.log(c);   //change ho jy gi q k ye var h
    