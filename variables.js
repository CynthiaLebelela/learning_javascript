//Exercise 1:Variable Declaration
let name = "Regomoditswe Lebelela"; // 1. Declare a variable ‘name’ and assign your name to it.

let age = 23; // 2. Declare a variable ‘age’ and assign your age to it.

let isStudent = false; // 3. Declare a variable ‘isStudent’ and assign it to a boolean value

//4. Print all three variables via console.log()
console.log("My name is:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

//Print all the variables on the html file directly, using elements id
document.getElementById("outputName").innerHTML = "Name: " + name;
document.getElementById("outputAge").innerHTML = "Age: " + age;
document.getElementById("outputStudent").innerHTML = "Is Student: " + isStudent;

//Exercise 2: Variable  Reassignment
let favoriteColour = "Purple";
document.getElementById("color1").innerHTML = "Initial Favorite colour: " + favoriteColour;

favoriteColour = "Pink";
document.getElementById("color2").innerHTML = "New favorite colour: " + favoriteColour;

//Exercise 3: Arithmetic Operations
let num1 = 20;
let num2 = 5;

let sum = num1 + num2;
let difference =  num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

document.getElementById("sum").innerHTML = "Sum: " + sum;
document.getElementById("difference").innerHTML = "Difference: " + difference;
document.getElementById("product").innerHTML = "Product: " + product;
document.getElementById("quotient").innerHTML = "Quotient: " + quotient;