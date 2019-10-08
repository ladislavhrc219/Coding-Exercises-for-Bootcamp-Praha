
const items = [ 
    {
        name: "bread", 
        amount: '2'
    },
    { name: "butter", amount: '9'},
    { name: "bananas", amount: '2kg'},
    { name: "papers", amount: '90'},
    { name: "shoes", amount: '2 pairs'},
    { name: "gel", amount: '1 tub'},
    { name: "phone", amount: '1'},
];
// console.log('hello')

document.addEventListener('DOMContentLoaded', () => {
    // const addItem = document.querySelector('#addItem');
    // const addAmoun = document.querySelector('#addAmoun');
    

    const listItemz = document.querySelector('.itemLst');

    for (let listItem of items) {
        const html = (
            `<div class="itemLst"> 
                <div> ${listItem.name}</div> 
                <div> ${listItem.amount}</div>
            </div>`
        );
        listItemz.innerHTML += html;
    }
    
    // const checkbox = document.querySelector("#checkbox");
    // checkbox.addEventListener('click', () => {
    //     console.log("nice try");
    //     // for (let c)
    //     const html = (
    //         `<div class="checkbox"> 
    //             <div> ${checkbox.valu}</div> 
        
    //         </div>`
    //     )


    // });
    
    const buttonItems = document.querySelector('#btnItems');
    buttonItems.addEventListener('click', () => {
        const addProduct= document.querySelector('#addProduct');
        const addAmount = document.querySelector('#addAmount');
        const html = (
            `<div class="itemLst">
                <div> ${addProduct.value}</div>
                <div> ${addAmount.value}</div> 
            </div>`

        )
        listItemz.innerHTML += html;
        document.querySelector('#addProduct').value=" ";
        document.querySelector('#addAmount').value=" ";
    })

   

    


    // const checked = document.querySelector('#checked');
    //     checked.addEventListener ('checked',() => {
    //         if (checked = true) {
    //         console.log("it works")} 
    //         else (checked = false) {
    //             console.log("not checked");}
    //         };

    // function check() {
    //     document.getElementById("myCheck").checked = true;
    // }
    
    // function uncheck() {
    //     document.getElementById("myCheck").checked = false;
    // }

    
});





// document.addEventListener('DOMContentLoaded', () => {
//     const listItemz = document.querySelector('.itemLst');
//     for (let listItems of items) {
//         const html = (
//             `<div class="itemLst"> 
//                 <div> ${listItems.name}</div> 
//                 <div> ${listItems.amount}</div>
//             </div>`
//         );
//         listItemz.innerHTML +=html;
//     }
   
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const listItems = document.querySelector('.items');
//     for (let i = 0; i < items.length; i++) {
//         const itemHTML = `<div> ${items[i]}</div>`; 
        
        
//         listItems.innerHTML += itemHTML;
//     }
   
// });



// const list2 = ["Alhambra", "Altea", "Altea XL", "Arosa", "Cordoba", "Cordoba Vario", "Exeo", "Ibiza", "Ibiza ST", "Exeo ST", "Leon", "Leon ST", "Inca", "Mii", "Toledo"]

// document.addEventListener('DOMContentLoaded', () => {
//     const updateList = document.querySelector('.list2');
    
//     for (let i = 0; i < list2.length; i++) {
//         const listItems2 = `<div> ${list2[i]}</div>`; 
        
        
//         updateList.innerHTML += listItems2;
//     }
   
// });




















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