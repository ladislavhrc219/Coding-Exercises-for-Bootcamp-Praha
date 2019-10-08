
const phones = [
    {brand: "nokia", model: "nokia5"},
    {brand: "samsng", model: "note10"},
    {brand: "apple", model: "IphoneXR"},
    {brand: "plus7", model: "plusOneseries7"},
    {brand: "xiaomi", model: "I DONT KNOW "},
    {brand: "HUAWEII", model: "PLASTIC "},
];



document.addEventListener('DOMContentLoaded', () => {
    const phonelist = document.querySelector(".phonelist");
    for (let phone of phones) {
        html = (
            `<div class="newphonelist"> 
               <span> ${phone.brand} </span> 
               <span> ${phone.model} </span>
               
            </div>`
        )
        phonelist.innerHTML += html;  
    };

    // const phoneBrand = 
    const addPhones = document.querySelector('#addPhones');
    addPhones.addEventListener( 'click', () => {
        const phoneBrand = document.querySelector('#phoneBrand');
        const phoneModel = document.querySelector('#phoneModel');
        
        const html = (
            `<div class="newphonelist"> 
                ${phoneBrand.value}   
                ${phoneModel.value}
                
                
            </div>`

        ) 
        phonelist.innerHTML+= html

        document.querySelector('#phoneBrand').value = "";
        document.querySelector('#phoneModel').value = "";

    })
    
    












});












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