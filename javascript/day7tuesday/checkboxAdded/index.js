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
    const checklist = document.createElement('div');
    checklist.classname="shopping-list__item";
    checklist.innerHTML = (
      `<div class="shopping-list__item">
        <span>${item[0]}</span>
        <span>${item[1]}</span>
       <input class="checkboxbutton" type="checkbox">
       <div>`
    );
   checklist.querySelector('.checkboxbutton').addEventListener('click', (event) => {
      if (item[2]) {
       item[2] = false;
         } else {
         item[2] =true;
     };
    });
    listElm.appendChild (checklist);
  }
});