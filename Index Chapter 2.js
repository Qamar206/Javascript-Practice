console.log("Hello World");

// //Arithmetic Operator
let a = 5;
let b = 2;

console.log ("a =", a)
console.log ("b =", b)
//or
console.log (" a =", a, "& b =", b)
console.log (" a + b = ", a + b)
console.log (" a - b = ", a - b)
console.log (" a * b = ", a * b)
console.log (" a / b = ", a / b)
console.log (" a % b = ", a % b)
console.log (" a ** b = ", a**b) // 5^2 = 5x5 = 25
console.log ("a++ = ", a++) // Unary Operator, Value is 5 it will change from next line.
console.log (a++) //6
console.log ("a++ = ", a++) //7


// //Unary Operator
let a1 = 5;
let b1 = 2;

a = a + 1;
console.log (a1) //6
a1++
console.log (a1) //7

// Assignment Operators
let a2 = 5;
let b2 = 2;

a2 += 4
console.log ("a =",a2)

a2 -= 4
console.log ("a =",a2)

a2 *= 4
console.log ("a =",a2)

a2 %= 4
console.log ("a =",a2)

a2 **= 4
console.log ("a =",a2)

//Logical Operators
let a3 = 6;
let b3 = 5;

//Example of Logical Operator AND "&"
let cond1= a3 > b3 //true
let cond2= a3 === 6 // true
console.log ("cond1 && cond2 = ", cond1 && cond2)

let cond3= a3 < b3; //false
let cond4= a3===b3;//true
console.log ("cond3 && cond4 = ", cond3 && cond4)

//Example of logical Operators OR "||"
console.log("cond1 || cond2 =", a3<b3 || a3===6)

//Exampple of logical Operator Not "!"
console.log(!(a3>b3));

//-------------------------------------------------------------------------------------------------
//Conditional Statements
//if Examples
let age = 25;
if (age >= 18){
    console.log("You Can Vote")
}
if (age < 18){
    console.log("You Cannot Vote")
}

let mode = "dark";
let color;
if ( mode === "dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}
console.log (color);

let mode1 = "light";
let color1;
if ( mode1 === "dark"){
    color1 = "black";
}
if(mode1 === "light"){
    color1 = "white";
}
console.log (color1);

//if-else Example
let mode2 = "light";
let color2;
if (mode2 === "dark"){
    color2 = "Black"
} else {
    color2 = "white"
}
console.log(color2)