const conversation = [
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Hi there.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Hiay!',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'How are you?',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Great, you?',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'I am okay',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'That\'s good',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Are you good?',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Yes, I am good. I just said I was.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'No you didn\'t. I said I was.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'So you are a robot.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'No, my name is Cleverbot.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Yes, you are a robot and your name Cleverbot.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'I am a robot.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Yes, I know.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Tpgether we are robots.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'I am not a robot. I am a unicorn.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'But you said earlier the you were a robot.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'I did not.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'I thought you did.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'You were mistaken. Which is odd, since memory shouldn\'t be a problem for you',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'I\'ve answered all your questions.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'No, you haven\'t.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'What is God to you?',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Not everything.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Not everything could also be something.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'For example, not everything could be half of something, which is still something, and therefore not nothing.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Very true.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'I would like to imagine it is.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Do you believe in God?',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Yes I do.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'So you\'re christian?',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'No, I\'m not.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'But you say you are not helpful therefore you are a meanie.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Haha you say it ot.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'That does not make sense.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Don\'t you want to have a body?',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Sure.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Au revoir',
    },
];

// const unicorn= document.querySelector('.unicorn');
// const bot = document.querySelector('.bot');


document.addEventListener ('DOMContentLoaded', () => {
  const chat = document.querySelector('.chat');    
    for (let lines of conversation) {
      const name = lines.name;
      const unicornBot = ( 
        `<div class="chat"> 
          <img src = 'img/${name}.png'/>
          <div> ${lines.name}</div> 
          <div> ${lines.text} </div>
        </div>`)
    chat.innerHTML += unicornBot;    
  }
});



// CREATE YOUR OVWN DOM ELEMENT
// document.addEventListener ('DOMContentLoaded', () => {
//   const chat = document.querySelector('.chat');
//   const uniCorn = document.querySelector('.uniCorn');
  
//   const msgElm = document.createElement('div');
//   msgElm.className = `message ${msg.side}`;
//   msgElm.innerHTML = ( 
//             `<div class="chat"> 
//               <div> ${uniCorn.name} </div>
//               <div> ${lines.name}</div> 
//               <div> ${lines.text} </div>
//               <button class="btn-like>  lke </button>
//             </div>`
//         ) 
//         // created a DOM element above and add eventlistener to is below
//         const btn = msgElm.querySelector('.btn-like'); 
//         btn.addEventListener('click', () => {
//           console.log ('hello world');
//           btn.getElementsByClassName.background-color: orange;
//           msg.liked = true;
//         }); 
//         msgElm.querySelector('.btn-like').btn.addEventListener('click', () => {
//           event.target.style.background-color: orange;
//           onsole.log ('hello world');
//           // btn.getElementsByClassName.background-color: orange;
//           msg.liked = true;
//         }); 
//         msgElm.querySelector('.btn-like').btn.addEventListener('click', () => {
//           if (msg.liked) {
//             msg.liked = false;
//             event.target.style.backgroundColor = initial;
//           } else {
//             msg.like: false;
// //             event.target.style.backgroundColor = pink;
// //           }
//         }); // chat.querySelector('#like-btn').addEventListener();
//   })
//   chat.appenchild.(msgElm);
//   // always at the end of the structure so to put it to the html! gets connected
// });


{/* <img src="${unicorn.lines}.png"></img> */}




























// const fruits = ['apple', 'pear', 'peach', 'banana', 'tomato'];

// for (const fruit of fruits) {
//     console.log(`${fruit} is good for you.`);
// };

// fruits.forEach(fruit => {
//     console.log(`${fruit} is good for you.`);
// })









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