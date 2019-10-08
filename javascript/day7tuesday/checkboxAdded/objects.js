// create a blueprint for a person:
// constructor special kind of class
// this is a varibale hold an abjoect being constracted
// 
// 
// 

class Person {
    constructor (firstname, lastname, age){
        this.firstname = firstName;
        this.lastname = lastName;
        this.age = age;
    }
    email () {
        return this.firstname + '@springfieldmail.com';
    }
}
 
// write in console.log
const homer = new Person (firstName, lastName, age)



class shopItem {
    constructor (name, amount) {
        this.name = name;
        this.amount = amount;
        this.done = false;
    }
    buy () {
        this.done = true;
    }
}
const list = [ 
    new shopItem = ['apple' '1kg'],

    ]
]

// const homer = {
//     firstname: 'homer',
//     lastname: "simpson",
//     age: 59,
//     email: () => {
//         return homer.firstname + '@springfieldmail.com';
//     }
// };


// const marge = {
//     firstname: 'marge',
//     lastname: "simpson",
//     age: 53,
//     email: () => {
//         return marge.firstname + '@springfieldmail.com';
//     }
// }