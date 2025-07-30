console.log ("Index Chapter 3")

console.log ("These All Are For Loops Examples")
//this is a for loop example
for (let i=1; i<=5; i++){   
 console.log ("Index Ihapter 3");
} //this is a for loop example

//Calculate sum o 1 to 5 Numbers
let sum1 = 0;
for (i=1;i<=5;i++){
    sum1 = sum1 + i; // sum = 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=10
} // The sum answer will be 10
console.log ("sum =", sum1)
console.log ("sum = 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15")
console.log ("Loop Has Ended")

let sum2 = 1;
for (a=1;a<=5;a++){
    sum2 = sum2 + a;
}
console.log ("sum =",sum2)
console.log ("sum = 1+1=2, 2+2=4, 4+3=7, 7+4=11, 11+5=16")
console.log ("End Of Loop")

let sum3 = 2;
for (b = 3; b <= 10 ; b++){
    sum3 = sum3 + b;
}
console.log ("sum =",sum3)
console.log ("sum = 2+3=5, 5+4=9, 9+5=14, 14+6=20, 20+7=27, 27+8=35, 35+9=44, 44+10=54")
console.log ("End Of Loop")

//Claculate sum of 1 to n (n could b any number)
let sum = 0;
let n = 6;
for(c=1; c<=n; c++){
    sum = sum + c
}
console.log ("sum =",sum)

//Pirnt 1 for 5 times
for (let d=1; d<=10;d++){
    console.log ("d =",d)
}

//Pirnt 1 for 5 times
for (var d=1; d<=10;d++){
    console.log ("d =",d)
}
console.log ("value of d is =",d)
console.log("that is y we are able to asign d 2 time after on and other")

//while loop
let e = 1;
while (e<=5){
    console.log("e =",e);
    e++
}