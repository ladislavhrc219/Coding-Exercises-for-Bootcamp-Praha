

 const popBar = document.querySelector('#popBar');
 const popbar = document.querySelector('#popBar');

document.addEventListener('DOMContentLoaded', () => {
   
    popBar.addEventListener('mouseover', ()=>{
        console.log('menu activated');

        popbar.style.color="yellow";

        

    });

});

// line1: nothing happens, adding event listener to document, 
// line2: defyining a variable, in which save a DOM element with the ID from html, save it for later use
// line3: adding aventlistener to to ID
// line4: removes the class closed, thats how activate that event
// line7: on even mouse leave, instad of removing, we adding the CLASS: aside.classList.add('closed');







// mouseover add
// mouseleave remove


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