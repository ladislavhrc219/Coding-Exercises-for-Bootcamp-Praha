const carlist = [ 
    {brand: "Porsche", model: "Panamera"},
    {brand: "Mazda", model: "CX5"},
    {brand: "Fiat", model: "PUNTO"},
    {brand: "SKODA", model: "SCALA"},
    {brand: "SUBARU", model: "impreza"},
    {brand: "TESLA", model: "X"},
    {brand: "MAsERATI", model: "wjhatever"}
];

document.addEventListener('DOMContentLoaded', () => {
    
    const carlistHTML = document.querySelector(".carlist");
    for (let cars of carlist) {
        const html = (
            `<div class="carlist"> 
                <div> ${cars.brand} </div>
                <div> ${cars.model} </div> 
                <br>
            
            </div>`
        );
        carlistHTML.innerHTML +=html;
    };


    const carLIST = document.querySelector('.carlist');
    const btnForCars = document.querySelector('#addItem');
    btnForCars.addEventListener ('click', () => {
        const brandCar = document.querySelector("#brandCar");
        const modelCar = document.querySelector('#modelCar');
        const html = (
            `<div class="carlist"> 
                <div > ${brandCar.value}</div> 
                <div > ${modelCar.value}</div>
            </div>`
        )
        carLIST.innerHTML += html;
    

    })



});








for (const fruit of fruits) {
    console.log(`${fruit} is good for you.`);
};

fruits.forEach(fruit => {
    console.log(`${fruit} is good for you.`);
})







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