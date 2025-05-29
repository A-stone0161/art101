// index.js - Lab 13
// Author: Annabelle Stone 
// Date: 05/25/2025
//Loops

// Fizzbuzzboom function
function fizzBuzzBoom() {
  let oneLongString = "";

  for (let i = 1; i <= 200; i++) {
    let str = "";
// If else statements using modular division to determine the output of Fizz, Buzz, Boom, or FizzBuzzBoom
    // If i is divisible by 3, 5, and 7, output "FizzBuzzBoom!"
    // If i is divisible by 3 and 5, output "FizzBuzz!"
    // If i is divisible by 3 and 7, output "FizzBoom!"
    // If i is divisible by 5 and 7, output "BuzzBoom!"
    // If i is divisible by 3, output "Fizz!"
    // If i is divisible by 5, output "Buzz!"
    // If i is divisible by 7, output "Boom!"
    // Otherwise, output the number itself
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      str = "FizzBuzzBoom!";
    } else if (i % 3 === 0 && i % 5 === 0) {
      str = "FizzBuzz!";
    } else if (i % 3 === 0 && i % 7 === 0) {
      str = "FizzBoom!";
    } else if (i % 5 === 0 && i % 7 === 0) {
      str = "BuzzBoom!";
    } else if (i % 3 === 0) {
      str = "Fizz!";
    } else if (i % 5 === 0) {
      str = "Buzz!";
    } else if (i % 7 === 0) {
      str = "Boom!";
    } else {
      str = i;
    }
    oneLongString += i + " " + str + "<br>";
  }
// String output with id "output"
  $("#output").html(oneLongString);
}
// Call the fizzBuzzBoom function to execute it
fizzBuzzBoom();