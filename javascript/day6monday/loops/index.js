// what can you do with DOM:
// change style, classes, event listeners, chnging text colors
// mouse events, etc 

const shoppingList = [
    ['apples', '1kg'],
    ['bacon', '200g'],
    ['cheddar', '250g'],
    ['beer', '6'],
    ['icecream', '1kg'],
];
  
document.addEventListener('DOMContentLoaded', () => {
    const listElm = document.querySelector('.shopping-list');
    for (const item of shoppingList) {
      const html = (
        `<div class="shopping-list__item">
          <span>${item[0]}</span>
          <span>${item[1]}</span>
         </div>`
      );
      listElm.innerHTML += html;
    }
});

// const shoppingList = [
//     {name: 'bacon', amount: '200g'},
//     {name: 'cheddar', amount:  '250g'},
//     {name: 'beer', amount:  '6'},
//     {name: 'icecream', amount:  '1kg'},
//     {name: 'apples', amount:  '1kg'},
// ];

// document.addEventListener('DOMContentLoaded', () => {
//     const listElm = document.querySelector('.shopping-list');
  
//     for (const item of shoppingList) {
//       const html = (
//         `<div class="shopping-list__item">
//           <span>${item[0]}</span>
//           <span>${item[1]}</span>
//          </div>`
//       );
//       listElm.innerHTML += html;
//     }
// });



const items = {
    name: 'book',
    type: 'notebook',
};
const notebook = {
    displaySize: 14.3,
    weight: '1.5kg',
    ram: '8GB',
    harddrivve: ['128 GB SSD', '128 TB SSD'],
    processor: {
        frequency: '4GHz',
        type: 'core i7',
        cores: '8',
    }
};



















const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

// 1.Output the number of items in the array to the console. Answer: 19
console.log(numbers.length);
// 2.Output the number at the index 13 to the console. Answer: -1
console.log(numbers[13]);
// 3.utput the number which is exactly in the middle of the array. Answer: -31
console.log(numbers[Math.floor (numbers.length/2)]);
// 4.Output every number in the array to the console.
// var i = numbers;

// 5.Output the square of every number to the console.
let result = numbers.map(x => x ** 2);
console.log(result);

// 6.Output only negative numbers from the array.
// negatives=[];
// console.log(negatives[numbers< 1]);

// 7.Output an absolute value of every number in the array.
// i= [];

// for (i=0, i< Math.abs(numbers), i++ ) {
//     console.log (Math.abs[numbers0]);
// }

for(let i=0; i < Math.abs(numbers.length); i++){
        console.log(Math.abs(numbers.length));
}


// 9.even numbers
function even(a){
  return a.filter(function(val){return val%2===0})
}
console.log(even(numbers));


// 10.
















// for(let i= 0; i< numbers.length; numbers++){
//     console.log(`${numbers[i]} is a number!!!`);
// }



// const fruits = ['newAPPLE is apple', 'pear', 'peach', 'banana', 'THE END Iof the tomato'];

// for (const fruit of fruits) {
//     console.log(`${fruit} is good for you.`);
// };

// fruits.forEach(fruit => {
//     console.log(`${fruit} is good for you.`);
// })

// for(let i=0; i< fruits.length; i++){
//     console.log(`${fruits[i]} is food for you!!!`);
// }

// for(let i=2; i< fruits.length; i++){
//     console.log(`${fruits[i]} is food for you!!!`);
// }

// // for(let i=2; i< fruits.length; i+=2){
// //     console.log(`${fruits[i]} is food for you!!!`);
// // }
// // for(let i=2; i< fruits.length; ){
// //     console.log(`${fruits[i]} is food for you!!!`);
// // }

// for (let  i = fruits.length -1 ; i >=0; i-- ) { 
//     console.log(`${fruits[i]} is food for you!!!`);
// }

// const numbs = [5,5,10,10,20, 1];
// let s =0;
// for (let i=0; i < numbs.length; i++) {
//     s = s+numbs[i];
// }
// console.log(s);

// // SEARCHING FOR THE BIGGEST ELEEMNT
// const nums = [5,5,10,10,99, 1];
// let m = numbs[0];
// for (let i=1; i < nums.length; i++) {
//     // s = s+numbs[i];
//     if (nums[i] > m) {
//         m = nums[i];
//     }
// }
// console.log(m);



// const numz = [5,5,10,10,99, 88];
// let x = 1;
// for (let i = numz.length - 1; i > 0; i=  Math.floor (i / 2)) {
//     x *= numz[i];
// }
// console.log(x);



// variable s start at 0, goes in cycle, then 9, then 15, etc


// const changetext = document.querySelector('#change-me');
// const textHasChanged = () => {
    
//     console.log("nice try");
//     changetext.innerHTML="donkeykong";
// }

// document.addEventListener( "DOMContentLoaded", () => { 
//     const button = document.querySelector('#clickChange');
//     button.addEventListener('textHasChanged');

// });

// // document.addEventListener( "DOMContentLoaded", ( e ) => {
// //     const button = document.querySelector( ".clickChange" );
// //     button.addEventListener( "click", ( event ) => {
// //         document.querySelector( ".changeThis" ).textContent = "Changed";
// //     } )
// // } )