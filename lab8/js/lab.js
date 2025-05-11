// index.js - Lab 8
// Author: Annabelle Stone 
// Date: 05/08/2025

// Define the array.
const numArray = [1, 3, 5, 7, 9, 20, 24, 26];

console.log("This is our starting array: " + numArray);

// This function gives us the square root of the inpur number
function squareNumber(num) {
  return num * num;
}


console.log("These are the square roots: " + numArray.map(squareNumber));


// This anonymous function returns the array of 
const dividedByPointFive = numArray.map(function(num) {
  return num / .5;
});

console.log("What if we divided the numbers by .5... " + dividedByPointFive);

//6.


const getOddNumbers = function(numbers) {
  return numbers.filter(function(num) {
    return num % 2 !== 0;
  });
};

console.log("What if we pulled out just the odd numbers?");

  setTimeout(function(){
    const result = getOddNumbers(numArray);
    console.log("Sorry that took a second (or three). Here's the odd numbers: " + result);
  }, 3000);

 var mapResults = "Here are the results of the lab! <br>";

  $("#output").append(mapResults);

 $("#output").append("<br>" + "Here is the original array: " + numArray.join(", "));

 $("#output").append("<br>" + "Here's the array divided by point five: " + dividedByPointFive.join(", "));

 $("#output").append("<br>" + "The square roots are: " + numArray.map(squareNumber).join(", "));

  $("#output").append("<br>" + "The odd numbers are: " + getOddNumbers(numArray).join(", "));

