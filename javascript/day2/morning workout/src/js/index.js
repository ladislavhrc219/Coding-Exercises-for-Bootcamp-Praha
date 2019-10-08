// import { parse } from 'path';


// let one = 4;
// let two = 909999999999999999999999999999999999999999999999999999000000000038383823232323232323232323232333333349999;
// let three = 433;

// var niceDay = () => {
//     console.log (Math.floor(Math.random()*two*three*one)+1);
// }
// setInval(niceDay,2000);


// console.log('It works');
/* eslint-disable */
// const nice = console.log('nice');

// COUNTER !!! 
// const greet = () => {
//     console.log ('AHOY');
// }
// setInterval(greet, 2000);


// Create a page which will output a random number between 1 and 6 every time your refresh it.
// var num = alert (Math.random() * 5);

// CREATE RANDOM NUMBERS WITH A TIMER 
// const ahoy = () => {
//     console.log ((Math.random() * 10));
// }
// setInterval(ahoy, 2000);


// MATH ROUND !!!! return a number closest to the nearest integer
// console.log(Math.round(0.9));
// // expected output: 1
// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// // expected output: 6 6 5

// GET RANDOM!!!!
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }  
//   console.log(getRandomInt(3));
//   // expected output: 0, 1 or 2
//   console.log(getRandomInt(1));
//   // expected output: 0
//   console.log(Math.random());
//   // expected output: a number between 0 and 1



// https://teamtreehouse.com/community/mathfloor-mathrandom-max-min-1-min-explanation
// Math.floor(Math.random()) ===> 0!!!

change the page so that it asks for min and max and output a random number between min and max.
var minMax = () => {
    let max1 = parseInt(prompt("enter your max: "));
    let min1 = parseInt(prompt("enter your min "));
    console.log (Math.floor(Math.random()* (max1 - min1 +1)) + min1);
} 

const app = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.round()*(max -min +1))+min;
}
console.log(app(3,9));



// PASSWORD EXERCISE 
// var input = parseInt(window.prompt("ENTER YOU PASWORD: "));
// var input2 = parseInt(window.prompt("Enter again:"));

// if (input2 === input) {
//       alert("your password dont match!")
    
//   } else {
//     alert("Good!");
// };


// RANDOM NUMBER BETWEEN IN AND MAX
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
// }

// function getRandomArbitrary(userMin, userMax) {
//     userMax = parseInt(prompt ("enter max here: "));
//     userMin = parseInt(prompt ("enter min here: "));

//     return Math.random() * (userMax - userMin) + userMin;
//   }
// // Math.floor(Math.random() * Math.floor(max))





// // PASSWORD IS NOT LONG ENOUGH
// // PASSWORD 
// // Improve the above page so that it does not allow passwords less then 8 characters long. If the password is less then 8 characters output "Your password is no secure." In such a case do not ask the user to type the password again. Only do that if it passes the security check.
// let userPass = 8;
// let userName = parseInt(prompt("enter your password: ")); 
// if (userPass >= userName) 
//     alert ("your pasword must be at least \n8 character long.\
//     Please, try again");}
//     // frmRegister.txtUsername(69696969);;

// // CHECK PASSWORD LENGTH
// let password = parseInt(prompt("enter password: "));
// if (password.length !== 8) {
//     alert("please try AGAIN !!! FS !!!");
// } else {alert("corrext password");}













const age = 31;
const name = 'martin';
const working = [4,6,7,8];
const married = false;

// eSLINT SHORTENS THE CODE 
const roll = () => { Math.floor(Math.random() * 6) + 1 };


// eSLINT SHORTENS THE CODE 
const triangleArea = (w) => {
    return w/2;
}

const test = (freak) => {
    return freak/5;
} 
const anyThing = (x, y) => {
    return (x/y)* 2; 
}

const square = (x) => {
    return x*x;
}

const hypotenuse = (a,b) => {
    return Math.sqrt(a) + Math.sqrt(b);
}



let pay = 56;
let hours = 8;
let days = 22;
const basicSalary = pay *hours *days;

const salary = (pay, hours, days ) => {
    return (pay * hours * days);
};

const taxed_salary = (salary, tax) => {
    return (salary- (salary*tax));
}


// EXERCISES 
const salary1 = (pay, hours, days) => {
    return pay *hours* days;
} 
const taxSalary = (salary1, tax) => {
    return (salary1 * (1 - tax));
}
// salary1 *( 1-tax)

// const x = 30;
// const foo = (x) => {
//     var x = 10;
//     return ('my inpt is: ' + x);
// };

// console.log(foo(x));



// const bar = (x)  => x*2; 
// // valid function line 68;
// const foo = (y) =>  y(10);

// console.log (foo(x => x*x/2));

// const foo = (y,z) =>  y(z);
// console.log (foo(x => x*5 , 6));

// const x = 20;
// const foo = (y, x) => y(x*x);
// console.log(foo(x=> x+x, x));



























// const result = Math.floor(Math.random() * 6) + 1;


// const name = 'martin';
// console.log(name);


// // number: 000256784, balance: 790 euro,
// // number: 000986056, balance: 5 600 euro,
// // number: 001546238, balance: 78 065 euro,
// // number: 030987456, balance: 120 910 euro.

// const account1 = 000256784;
// const account2 = 000986056;
// const account3 = 001546238;
// const account4 = 030987456;

// const chooseAccount = prompt ("choose youyr account: ")
// let bankAccounts = prompt ("enter your account number: ");

// if (account1=== 000256784) {
//     alert('790 euro');
// } else if (account2 === 000986056 ) {
//     alert("5600 euro");
// } else if (account3=== 001546238) {
//     alert ("78 065 euro");
// } else if (account4 === 030987456 ){
//     alert ("78 065 euro");
// };
