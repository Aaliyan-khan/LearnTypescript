//Typescript Introduction
//Typescript Installation 
//Core Types
//Scope of variables 
//Variables
//Operators
//if else Condition
//Nested if else Condition
//console.log("Hello World")
//CORE TYPES
// 1. string = ""
// 2. number = 123
// boolean = true or false
//VARIABLES
//let username:string = "aliyankhan";
//console.log(username)
/*let firstname:string = "aliyan";
let lastname:string = "khan";
console.log(firstname +" "+ lastname)*/
/*let score:number = 182;
score = 186;
console.log(score)*/
// let username:any ="Sir Mustafa"
// username=456
// console.log(username)
//SCOPE OF VAIRABLES
// 1. var : function scoped
// 2. let : block scope
// 3. const : block scope
// var username:string = "aliyan";
// username = "azhar";
// console.log(username)
// let userName:string = "aliyankhan";
// userName = "azharkhan";
// console.log(userName)
// const userName:string = "hassan";
// const = "rayyan";
// console.log(userName)   //const variable dont change 
//OPERATORS
// 1. ARITHMETIC OPERATOR
//let num1:number = 4;
//let num2:number = 2;
//console.log(num1 + num2)
//console.log(num1 - num2)
//console.log(num1 * num2)
//console.log(num1 / num2)
// 2. ASSIGNMENT OPERATOR
//let x:number = 20;
//console.log(x += 10)
//console.log(x -= 10)
//console.log(x *= 10)
//console.log(x /= 10)
// 3. COMPARISON OPERATOR
//let y:number = 10
//let x:number = 5
//console.log(y > x)
//console.log(y < x)
//console.log(y > 5)
//console.log(y < 5)
//console.log(y == 10)
//console.log(y == 20)
//console.log(y === 10) //check type value and data type also !!!
// 4. LOGICAL OPERATORS
// 5. CONDITIONAL OPERATORS
// ? , :
// IF ELSE CONDITION !!!
// if(true){
//     console.log("Welcome Home")
// }
// else{
//     console.log("byeee")
// }
// console.log("Taking Decision")
// let bike:number = 40000
// let budget:number = 50000
// let color:string = "red"
// let tyre:string = "service"
// let paymentMethod:string = "check"
// if(bike < budget && color === "red" && tyre === "service" || paymentMethod === "cash"){
//     console.log("Buy bike")
// }
// else{
//     console.log("You dont have enough money")
// }
// console.log("Taking Decison")
// let bike:number = 40000
// let budget:number = 50000
// let color:string = "red"
// let tyre:string = "service"
// if(bike < budget ){
//     if(color === "red"){
//         if(tyre === "honda"){
//             console.log("buy bike")
//         }
//         else{
//             console.log("tyre is not matched")
//         }
//     }
//     else{
//         console.log("color is not matched")
//     }
// }
// else{
//     console.log("You dont have enough money")
// }
// let salary:number=40000
// let monthlyexpense:number = 80000
// if (salary < monthlyexpense){
//      console.log("you have not enough money")
//  } else {
//      console.log("you have enough money ")
// }
// let firstPerson:string = "aliyan"
// let SecondPerson:string = "ahsan"
// if(firstPerson === "aliyan" && SecondPerson === "ahsan"){
//     console.log("You are not allowed" +" "+ firstPerson +" "+ SecondPerson)
// }
// else{
//     console.log("You are allowed")
// }
// let firstPerson:string = "aliyan"
// let SecondPerson:string = "ahsan"
// if(firstPerson === "aliyan"){
//     console.log("You are not allowed" +" "+firstPerson)
//     if(SecondPerson === "ahsan"){
//         console.log("You are not allowed" +" "+ SecondPerson)
//     }
//     else{
//         console.log("You are allowed")
//     }
// }
// else{
//     console.log("You are allowed")
// }
var userName = "aliyan";
var pw = "123";
var code = 999;
if (userName === "aliyan" && pw === "123") {
    console.log("kindly provide code");
    if (code === 999) {
        console.log("Welcome Home");
    }
    else {
        "invalid code";
    }
}
else {
    console.log("invalid username and password");
}
