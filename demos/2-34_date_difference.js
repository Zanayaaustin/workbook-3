// create date with today's date
let date1 = new Date("January 15, 2022");

//create date with the end of program
let date2 = new Date("March 15, 2022");
// msec_per_day = millisecounds in a second *60 seconds in a min * 60 min in an hour* 24 hours in a day
let msec_per_day = 1000 * 60 * 60 * 24;

let elapsedMilliseconds = date2.getTime() - date1.getTime();
let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);
console.log("The number of days between dates is " + numDays);