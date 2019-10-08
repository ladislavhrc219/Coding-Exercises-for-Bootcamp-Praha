console.log('It works');

// const changeName = document.querySelector('#changeName');
// const disply = document.querySelector('#display');
const mybttn = document.querySelector('#mybtn');
// const changth/is = document.querySelector('#changepar');
// const colorH1 = document.querySelector('.changeColor');
// const enterDisplay = document.querySelector('#enterDisplay');
// old code above////////////////////////////


const userArray = ['madonna'];
const passArray = ['pass1234'];
const username = document.querySelector('#username');
const password = document.querySelector('#password');

const letMeSee = () => {
  const userIndex = userArray.indexOf(username.value);
  const passwIndex = passArray.indexOf(password.value);
  if (userIndex === passwIndex) {
    console.log('ACCESS GRANTED');
  } else {
    console.log('DO IT AGAIN');
  }
};


document.addEventListener('DOMContentLoaded', () => {
  mybttn.addEventListener('click', letMeSee);
  //   disply.addEventListener('click', disply);
  //   mybttn.addEventListener('click', letsee);
  //   mybttn.addEventListener('click', letsee);
  //   mybttn.addEventListener('click', letsee);
  //   mybttn.addEventListener('click', letsee);
});


// // const disply = document.querySelector('#display');
// const mybttn = document.querySelector('#mybtn');
// const changthis = document.querySelector('#changepar');
// const letsee = () => {
//   changthis.textContent = 'hello';
// };
// document.addEventListener('DOMContentLoaded', () => {
//   mybttn.addEventListener('click', letsee);
// });

// const letsee = () => {
//   disply.textContent = 'showmw the money';
//   changthis.textContent = 'hello';
//   changeName.textContent = ' ITS MONDAY AGAIN!!!';
//   colorH1.style.color = 'magenta';
// //   enterDisplay.textContent = 'acccess Denied';
// };
