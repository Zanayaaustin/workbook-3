

//let date = {
  //  month: 1,
   // year: 1967
  //  day: 21,
 //toString: function(){
 //    return `month,year,date`
// }

let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toUTCString());
console.log(date.toDateString());

console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());
//console.log(date.getDate());

let anticipatedDate = new Date(2023, 5, 18,1,15,30,10);
console.log(anticipatedDate.toString());

let d5 = new Date("2023-05-18");

