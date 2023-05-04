"use strict";
let a = 4; //global
function test3() {
 a = 3; //re-assign global
 console.log("a = " + a);
}
test3();
console.log("a = " + a);