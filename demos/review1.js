"use strict"
// greeting takes a name parameter
function greeting(first, last) {
    return`Hello ${first} ${last}`
}
let firstName = "Zanaya"
let lastName = "Austin"
// calling/ invoking greeting function and passing the firstName argument
let message = greeting(firstName, lastName);
console.log(message);
