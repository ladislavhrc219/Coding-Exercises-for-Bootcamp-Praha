/* eslint-disable */


let result = 0;
const clearText = document.querySelector('#removeall');
const multiplying = document.querySelector('#multiply');
const textResult = document.querySelector('#text-result');
const divison = document.querySelector('#division');
const equals = document.querySelector('#equals');
const float = document.querySelector('#float');

let lastOperation;
let isFloat = false;

const changeToFload = () => {
  isFloat = true;
};

// let zero = 0;
const handlePlusClick = () => {
  console.log(isFloat);
  if (isFloat === false) {
    const textNumber = document.querySelector('#text-number');
    const number = parseInt(textNumber.value, 10);
    //   const floatNumber =
    result += number;
    lastOperation = 'addition';
    console.log(result);
    textResult.textContent = result;
  }
  if (isFloat === true) {
    console.log(isFloat);
    const textNumber = document.querySelector('#text-number');
    const number = parseFloat(textNumber.value, 10);
    //   const floatNumber =
    result += number;
    lastOperation = 'addition';
    console.log(result);
    textResult.textContent = result;
    isFloat = false;
  }
};
const Devider = () => {
  if (isFloat === true) {
    const textNumber = document.querySelector('#text-number');
    const number = parseFloat(textNumber.value, 10);
    lastOperation = 'division';
    result /= number;
    textResult.textContent = result;
    isFloat = false;
  }
  if (isFloat === false) {
    const textNumber = document.querySelector('#text-number');
    const number = parseInt(textNumber.value, 10);
    lastOperation = 'division';
    result /= number;
    textResult.textContent = result;
  }
};

const multiPly = () => {
  if (isFloat === false) {
    const textNumber = document.querySelector('#text-number');
    const number = parseInt(textNumber.value, 10);
    result *= number;
    lastOperation = 'multiplyy';
    textResult.textContent = result;
  }
  if (isFloat === true) {
    const textNumber = document.querySelector('#text-number');
    const number = parseFloat(textNumber.value, 10);
    result *= number;
    lastOperation = 'multiplyy';
    textResult.textContent = result;
    isFloat = false;
  }
};

const floating = () => {
  if (isFloat === true) {
    console.log('hey');
    const textNumber = document.querySelector('#text-number');
    const number = parseFloat(textNumber.value, 10);
    textResult.textContent = number;
    isFloat = false;
  }
  if (isFloat === false) {
    const textNumber = document.querySelector('#text-number');
    const number = parseInt(textNumber.value, 10);
    textResult.textContent = number;
  }
};

const removeAll = () => {
  console.log('clearing up');
  textResult.textContent = '0';
};

const equalsAssign = () => {
  if (lastOperation === 'addition') {
    handlePlusClick();
  } else if (lastOperation === 'division') {
    Devider();
  } else if (lastOperation === 'multiplyy') {
    multiPly();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener('click', handlePlusClick);
  divison.addEventListener('click', Devider);
  multiplying.addEventListener('click', multiPly);
  clearText.addEventListener('click', removeAll);
  console.log(clearText);
  console.log(equals);
  equals.addEventListener('click', equalsAssign);
  float.addEventListener('click', floating);

  //   equals.addEventListener('click', equalsAssign);
});
