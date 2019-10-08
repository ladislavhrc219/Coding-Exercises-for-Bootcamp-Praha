// /^\d{2}$/;
/* eslint-disable */


// const foo = (x, y) => x(x(y));
// console.log(foo(x=> x/2,8));

const foo = (x, y) => x(x(y));
console.log(foo(x=> x/2,8));

// let y = "nice";
// const x= "jane";
// const boo = (y, x, arg) => x(x, y, arg);
// console.log(boo(x => y + ' try', x));

// console.log("martng ".repeat(10));

// const changeTitle = () => {
//     const title = document.querySelector('#title');
//     title.textContent = "ColdFusion";
// }






// right solution 
// save DOM elements insde variables 
// const changeTitle = () => {
//     const myText = document.querySelector('#my-text');
//     // const text = myText.value
//     let hey = "hello";
    
//     const title = document.querySelector('#title');

//     // title.style.color = 'heading';
//     title.textContent=`HELLO`;
//     // title.className='heading';
//     title.style.color = "blue";
// }

//     document.addEventListener('DOMContentLoaded', () => {
//         const myBtn = document.querySelector("#my-btn");
//         myBtn.addEventListener('click',changeTitle);
//     });






// save DOM elements insde variables 
const changeTitle = () => {
    const myText = document.querySelector('#my-text');
    let hey = "hello";
    const text = myText.value
  
    const title = document.querySelector('#title');

    title.style.color = 'heading';
    title.textContent=`HELLO`;
    title.className='heading';
    // title.style.color = "blue";
}
// can include more functions inside of this below:
// • nice 
document.addEventListener('DOMContentLoaded', () => {
    const myBtn = document.querySelector("#my-btn");
    myBtn.addEventListener('click',changeTitle);
});





// setTimeout(changeTitle, 3000);

// click, press button, scroll ,shrink ,refresh ,loading move mouse its an event























// In Czech, every person gets a national identification number (NID) when they are born.
// The rules for producing a correct NID are as follows:
// The format is YYMMDDXXXX, for example 7561142468.
// First two digits are the last two digits of the year
// of birth
// Second two digits are the
// month of birth. If the person is female, number 50 gets added to the month.
// Third two digits are the day of birth.
// Last four digits is an arbitrary number to make the ID unique.
// The number needs to be divisible by 11.
// From the example 7561142468 you can tell that the person is a woman born on 14. november 1975.


const daysInMonth = [
    null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  
  const nidIsValid = (nid) => {
    const intNID = parseInt(nid, 10);
  
    if (Number.isNaN(intNID)) {
      return false;
    }
  
    if (intNID < 1000000000 || intNID > 9999999999) {
      return false;
    }
  
    if (intNID % 11 !== 0) {
      return false;
    }
  
    const month = parseInt(nid[2] + nid[3], 10);
    if (month < 51) {
      if (month < 1 || month > 12) {
        return false;
      }
    } else if (month > 62) {
      return false;
    }
  
    const day = parseInt(nid[4] + nid[5], 10);
    if (day < 1 || day > daysInMonth[month]) {
      return false;
    }
  
    const year = parseInt(nid[0] + nid[1], 10);
    if (year % 4 !== 0 && month === 2 && day === 29) {
      return false;
    }
  
    return true;
  };
  


// eslint-disable-next-line no-unused-vars

// // const nidIsValid
// // let input = 7561142468;
// let regex = /^\d{2}$/;
// let str1 = '7561142468';
// alert(regex.test(str1));
// let str2 = '3g8';
// alert(regex.test(str2));

// let input = 7561142468;
// const nidIsValid = (nid) => {
//     console.log(nid)
//     console.log('the function is being called')
//     if (Number.isNaN(parseInt(nid, 10))) {
//       return false;
//     }
   
//     return true;
//   };

// console.log(nidIsValid(input))
// Check that the NID number is divisible by 11.
// const nidIsValid = (input) => {
//     console.log(input)
//     console.log('function is being called')
//     if (Number.isNaN(parseInt(input % 11))) {
//       return false;
//     }
   
//     return true;
//   };

// console.log(nidIsValid(input))

// let input = 7561142468;
// const nidIsValid = (input) => {
//     console.log(input)
//     console.log('checkin months and sex')
//     if (Number.isNaN(parseInt(input * (12-1) - 1)+ 50 )) {
//       return false;
//     }
   
//     return true;
//   };

// // console.log(nidIsValid(input))

// let nid = 7561142468;
// const nidIsValid = (nid) => {
//     console.log(nid)
//     console.log('the function is being called')
//     if (Number.isNaN(parseInt(nid, 10))) {
//       return false;
//     }
   
//     return true;
// };

// const dayInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// const nidIsValid = (nid) => {
   
    
//     if (Number.isNaN(parseInt(nid, 10))) {
//       return false;
//     }
//     return true;
// }


