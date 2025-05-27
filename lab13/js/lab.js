// index.js - Lab 13
// Author: Annabelle Stone 
// Date: 05/25/2025
//Loops


function fizzBuzzBoom() {
  let oneLongString = "";

  for (let i = 1; i <= 200; i++) {
    let str = "";

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

  $("#output").html(oneLongString);
}

fizzBuzzBoom();