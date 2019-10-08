
const lock = document.getElementById('lock');
const text = document.getElementById('text');

console.log('hello js here')
console.log('test')
const appear = () => {
    console.log("hey");
    
    text.style.display = "inline-block";
}

const disappear = () => {
    console.log('disappearing')
    text.style.display= 'none'; 
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('dom loaded')
  lock.addEventListener('mouseenter', appear);
  lock.addEventListener('mouseleave', disappear);

  
});

// const word = getElementById('ahoy')
const ahoy = getElementById ('ahoy');

// const ahoy = () => {
//     message.innerHTML = "whatever";
// };




// document.addEventListener('DOMContentLoaded', () => {
//     const padlock = document.querySelector('#padlock');
//     const message = document.querySelector('#message');
//     padlock.addEventListener('mouseenter' () => {
//         console.log("enter");
//     })
// })