document.addEventListener('DOMContentLoaded', () => {
  console.log('It works');

  const btnminus =document.querySelector(".btn-minus");
  const btnplus = document.querySelector(".btn-plus");
  const counter = document.querySelector ('#counter');
  const knob = document.querySelector ('.knob');
  const maximum = document.querySelector('#maximum')
  
  // counter.textContent = "5";
  // maximum.textContent = "10";

  btnminus.addEventListener('click', () => {
    if(counter.textContent > 0) {
      // counter.textContent = `${parseInt(counter.textContent) +5}`;
    counter.textContent = `${parseInt( counter.textContent-1 )}`;
    knob.style.width = `${counter.textContent * 10}%`;
    };
  });

  btnplus.addEventListener ('click' , () => {
    if (counter.textContent < 10) {
    counter.textContent = `${parseInt( counter.textContent )+1}`;
    knob.style.width = `${counter.textContent * 10}% `;
    };
  });

  
  

});

