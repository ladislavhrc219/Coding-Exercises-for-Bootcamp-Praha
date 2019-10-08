console.log('It works');

const userarray = ['jane', 'doe'];
const passwordarray = ['1234', 'open'];
const users = document.querySelector('#users');
const password = document.querySelector('#password');
const result = document.querySelector('#result');


const userCheck = () => {
  const userindex = userarray.indexOf(users.value);
  if (userindex > -1) {
    if (passwordarray[userindex] === password.value) {
      result.textContent = ('access granted');
    } else {
      result.textContent = 'access denied';
    }
  } else {
    result.textContent = 'access denied';
  }
};

// ////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const myBtn = document.querySelector('#my-btn');
  myBtn.addEventListener('click', userCheck);
});
