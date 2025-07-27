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
let age1 = 25;
if (age1 >= 18){
    console.log("You Can Vote")
}
if (age1 < 18){
    console.log("You Cannot Vote")
}

let mode1 = "dark";
let color1;
if ( mode1 === "dark"){
    color1 = "black";
}
if(mode1 === "light"){
    color1 = "white";
}
console.log (color1);

let mode2 = "light";
let color2;
if ( mode2 === "dark"){
    color2 = "black";
}
if(mode2 === "light"){
    color2 = "white";
}
console.log (color2);

//if-else Examples
let mode3 = "light";
let color3;
if (mode3 === "dark"){
    color3 = "Black"
} else {
    color3 = "Light"
}
console.log(color3)

let mode4 = "dark"
let color4
if(mode4 === "dark"){
    color4= "Black"
} else {
    color4 = "White"
}
console.log (color4)

let age2 = 25;
if(age2 >=18){
    console.log("Vote")
} else {
    console.log("Not Vote")
}

let age3 = 16;
if(age3>=18){
    console.log("Vote")
} else {
    console.log("Not Vote")
}

//Find out if the number is even or odd
let num1 = 10;
if (num1%2 === 0){
    console.log(num1,"This number is Even")
} else {
    console.log (num1,"This number is Odd")
}
//other Example
let num = 7;
if(num%2 === 0){
    console.log(num,"This number is Even")
} else{
    console.log(num,"This number is Odd")
}
// Example else-if statement checking multiple conditions.
let mode5 = "dark"
let color5;
if (mode5 === "dark"){
    color5 = "black"
} else if (mode5 === "blue"){
    color5 = "blue"
} else if (mode5 === "pink"){
    color5 = "pink"
} else {
    color5 = "white"
}
console.log(color5)
if (mode5 === "dark"){
    console.log(mode5)
}

let mode6 = "silver"
let color6;
if (mode6 === "dark"){
    color6 = "black"
} else if (mode6 === "blue"){
    color6 = "blue"
} else if (mode6 === "pink"){
    color6 = "pink"
}
else { color6 = "white"}
console.log(color6)

 if (mode6 === "dark"){
    console.log(mode6)
 }
 

 // example of ternory operator
 let age4 = 25;
 let result = age4 >= 18 ? "adult" : "not adult";
 console.log (result);
 
 let age5 = 16;
 let result1 = age5 >= 18 ? "adult" : "not adult";
 console.log (result1);
 
// short method of ternory operator
 let age6 = 25;
 age6 >= 18 ? console.log ("adult") : console.log ("not adult")

 let age7 = 16;
 age7 >= 18 ? console.log ("adult") : console.log ("not adult")