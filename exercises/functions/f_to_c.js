function convertFtoC(fahrenheititTemplate) {
let celsiusTemperature = (fahrenheititTemplate - 32) *(5/9);
return celsiusTemperature;
}

let currentTemp = 92;
let celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp.toFixed(2));