//Conditional Statements & Loops
const out = document.getElementById("output");
const br = "<br>";

//Execrise 1: Temperature Check
let temperature = 18;
if(temperature < 0){
    out.innerHTML += "It's freezing!" + br;
} else if (temperature <=15){
    out.innerHTML += "it's cold." + br;
}else if(temperature <=25){
    out.innerHTML += "It's mild." + br;
}else{
    out.innerHTML += "It's warm." + br;
}

//Using Switch
let tempRange = temperature < 0 ? "freezing" :
                temperature <= 15 ? "cold" :
                temperature <= 25 ? "mild" : "warm";

switch(tempRange){
    case "freezing": out.innerHTML += "Switch: It's freezing!" + br; break;
    case "cold": out.innerHTML += "Switch: It's cold." + br; break;
    case "mild": out.innerHTML += "Switch: It's mild." + br; break;
    case "warm": out.innerHTML += "Switch: It's warm" + br; break;
}

//Exercise 2: Divisibility Check
let number = 6;
if (number % 2 === 0 && number % 3 === 0) {
  out.innerHTML += "Divisible by both." + br;
} else if (number % 2 === 0) {
  out.innerHTML += "Divisible by 2." + br;
} else if (number % 3 === 0) {
  out.innerHTML += "Divisible by 3." + br;
} else {
  out.innerHTML += "Not divisible by 2 or 3." + br;
}

//Using Switch
let divisibleCase = (number % 2 === 0 && number % 3 === 0) ? "both" :
                    (number % 2 === 0) ? "two" :
                    (number % 3 === 0) ? "three" : "none";

switch (divisibleCase) {
  case "both": out.innerHTML += "Switch: Divisible by both." + br; break;
  case "two": out.innerHTML += "Switch: Divisible by 2." + br; break;
  case "three": out.innerHTML += "Switch: Divisible by 3." + br; break;
  default: out.innerHTML += "Switch: Not divisible by 2 or 3." + br;
}

//Exercise 3: For Loops
out.innerHTML += "<br><strong>For Loop:</strong><br>";
// from 1 to 10
for (let i = 1; i <= 10; i++) {
  out.innerHTML += i + " ";
}

// Even numbers 1 - 20
out.innerHTML += "<br>Even numbers 1-20:<br>";
for (let i = 2; i <= 20; i += 2) {
  out.innerHTML += i + " ";
}

// Sum 1 - 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
out.innerHTML += "<br>Sum 1-100: " + sum + br;

// Print array elements
const numbers = [1, 2, 3, 4, 5];
out.innerHTML += "<br>Array Elements:<br>";
for (let i = 0; i < numbers.length; i++) {
  out.innerHTML += numbers[i] + " ";
}

// Find largest number
const nums = [3, 7, 2, 5, 10, 6];
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) max = nums[i];
}
out.innerHTML += "<br>Largest number: " + max + br;

//Exercise 4: While loops
out.innerHTML += "<br><strong>While Loop:</strong><br>";

// 1 - 10
let i = 1;
while (i <= 10) {
  out.innerHTML += i + " ";
  i++;
}

// Even 1 - 20
out.innerHTML += "<br>Even numbers 1-20:<br>";
i = 2;
while (i <= 20) {
  out.innerHTML += i + " ";
  i += 2;
}

// Sum 1 - 100
let total = 0, j = 1;
while (j <= 100) {
  total += j;
  j++;
}
out.innerHTML += "<br>Sum 1-100: " + total + br;

// Multiples of 5 < 50
out.innerHTML += "Multiples of 5 below 50:<br>";
let k = 5;
while (k < 50) {
  out.innerHTML += k + " ";
  k += 5;
}

//Exercise 5: Do While Loops
out.innerHTML += "<br><br><strong>Do While Loop:</strong><br>";

// 1 - 10
let x = 1;
do {
  out.innerHTML += x + " ";
  x++;
} while (x <= 10);

// Sum 1 - 100
let z = 1, sumDo = 0;
do {
  sumDo += z;35
  z++;
} while (z <= 100);
out.innerHTML += "<br>Sum 1-100 (do-while): " + sumDo + br;

 //Prompt the user for a number
 number > 10 
 let userNum;
do {
  userNum = prompt("Enter a number greater than 10:");
 } while (parseInt(userNum) <= 10);

  //Simple_guessing_game 
  const target = 7;
  let guess;
  do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
  } while (guess !== target);
 alert("Correct! You guessed the number!");
