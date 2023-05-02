let globalVariable = `global`;

function myFirstFunction() { 
    let functionVariable = `function var`;
    console.log(`Global ${globalVariable}   `);
    console.log(`Function ${functionVariable}`);
    // console.log(`Function ${secondFunctionVariable}`); not defined
  
    if (true) {
  let blockVariable = 'block var'
  console.log(`Block ${blockVariable}`);
 }
// 
}

function mySecondFunction(){
    let secondFunctionVariable = `second function var`;
    console.log(`Global ${globalVariable}   `);
    //console.log(`Function ${functionVariable}`);
} console.log(`Function ${secondFunctionVariable}`);


myFirstFunction();
mySecondFunction();

console.log(globalVariable);
