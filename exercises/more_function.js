"use strict"
function displayMailingLabel(name,address,city,state,zip) {
 let addressLabel = `
 ${name} 
 ${address} 
 ${city}, ${state}, ${zip}
 `;
 console.log(addressLabel);
} 

let firstName = "Zanaya";
let homeAddress = "691 Throwdown Lane";
let homeCity = "Washington"
let homeState = "DC"
let zip = 30445

displayMailingLabel(firstName,homeAddress,homeCity,homeState,zip);