// Exercise 1: Numbers
let integerNum = 10;
let floatNum = 3.5;

let add = integerNum + floatNum;
let subtract = integerNum  - floatNum;
let multiply = integerNum * floatNum;
let divide = integerNum / floatNum;
let modulus = integerNum % floatNum;
let exponent = integerNum ** 2;

let numResult = `
   Integer: ${integerNum}<br>
   Float: ${floatNum}<br>
   Addition: ${add}<br>
   Subtraction: ${subtract}<br>
   Multiplication: ${multiply}<br>
   Division: ${divide}<br>
   Modulus: ${modulus}<br>
   Exponentation: ${exponent}<br>
`;
document.getElementById("numOutput").innerHTML = numResult;

//Exercise 2: Boolean and Operators
let isGreater = 8 > 5;
let isLess = 4 < 2;

let x = 9;
let y = 15;

let comparisonResult =`
   x = ${x}, y = ${y}<br>
   x > y: ${x > y}<br>
   x <= y: ${x <= y}<br>
   x == y: ${x == y}<br>
   x != y: ${x != y}<br>
`;

let a = true;
let b = false;

let logicResult =`
   a AND b: ${a && b}<br>
   a OR b: ${a || b}<br>
   NOT a: ${!a}<br>
`;

document.getElementById("compareOutput").innerHTML = comparisonResult;
document.getElementById("logicOutput").innerHTML = logicResult;

let t = 10;
let assignmentResult = `Initial value of t: ${t}<br>`;
t += 5;
assignmentResult += `After += 5: ${t}<br>`;
 t -= 2;
assignmentResult += `After -= 2: ${t}<br>`;
t *= 3;
assignmentResult += `After *= 3: ${t}<br>`;
t /= 4;
assignmentResult += `After /= 4: ${t}<br>`;
t %= 3;
assignmentResult += `After %= 3: ${t}<br>`;

document.getElementById("assignmentOutput").innerHTML = assignmentResult;