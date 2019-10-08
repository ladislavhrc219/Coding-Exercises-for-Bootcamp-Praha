document.addEventListener('DOMContentLoaded', () => {
  console.log('It works');

  const btnminus =document.querySelector(".btn-minus");
  const btnplus = document.querySelector(".btn-plus");
  const counter = document.querySelector ('#counter');
  const timer = document.querySelector ('.timer');
  const maximum = document.querySelector('#maximum')
  
  // counter.textContent = "5";
  // maximum.textContent = "10";

  btnminus.addEventListener('click', () => {
    if(counter.textContent > 0) {
      // counter.textContent = `${parseInt(counter.textContent) +5}`;
    counter.textContent = `${parseInt(counter.textContent-1 )}`;
    // counter.style.width = `${counter.textContent * 10}%`;
    };
    setTimeout(btnminus, 3000);
  });

  btnplus.addEventListener ('click' , () => {
    if (counter.textContent < 10) {
    counter.textContent = `${parseInt( counter.textContent )+1}`;
    knob.style.width = `${counter.textContent * 10}% `;
    };
  });

  timer.addEventListener ( 'click', () => {
    if (timer = 100) {
      timer.textContent = setInterval(console.log('hey', 1000s));


    }
  })

  
  

});

