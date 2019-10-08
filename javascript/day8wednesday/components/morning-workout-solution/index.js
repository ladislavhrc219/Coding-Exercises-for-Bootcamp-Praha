let value = 1;
const maxValue = 20;

const update = () => {
  const counter = document.querySelector('#counter');
  counter.textContent = `${value}`;
  const maximum = document.querySelector('#maximum');
  maximum.textContent = `${maxValue}`;
  const knob = document.querySelector('#knob');
  const step = 100 / maxValue;
  knob.style.width = `${value * step}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  update();

  const plusBtn = document.querySelector('#plus');
  plusBtn.addEventListener('click', () => {
    if (value < maxValue) {
      value++;
      update();
    }
  });

  const minusBtn = document.querySelector('#minus');
  minusBtn.addEventListener('click', () => {
    if (value > 0) {
      value--;
      update();
    }
  });
});
