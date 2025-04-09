//Exercise 1:Variable Declaration

// 1. Declare a variable ‘name’ and assign your name to it.
let name = "Regomoditswe Lebelela";

// 2. Declare a variable ‘age’ and assign your age to it.
let age = 23;

// 3. Declare a variable ‘isStudent’ and assign it to a boolean value
let isStudent = false;

//4. Print all three variables
console.log("My name is:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

//Print all the variables on the html file directly, using elements id
document.getElementById("outputName").innerHTML = "Name: " + name;
document.getElementById("outputAge").innerHTML = "Age: " + age;
document.getElementById("outputStudent").innerHTML = "Is Student: " + isStudent;