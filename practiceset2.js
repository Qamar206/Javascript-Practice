//alert("Welcome To Practice Set Page 2") // One Time PopUp
// let fullname = prompt ("hello")
// console.log (fullname) // it is temprary to take input from user

// let num = prompt ("enter a number:")
// if (num % 5 === 0){
//     console.log (num, "num is multiple of 5")
// } else {
//     console.log (num, "is not muliple of 5")
// }

let score = prompt ("Enter Your Score It Should Be Between (0-100)")
let grade;
if (score >=90 && score <= 100){
 grade = "A";   
} else if (score >= 70 && score <= 89){
    grade = "B";
} else if (score >= 60 && score <= 69){
    grade = "C";
} else if (score >= 50 && score <= 59){
    grade = "D"
} else if (score >=0 && score <= 49){
    grade = "F"
}
console.log ("according to your scores your grade is:",grade)