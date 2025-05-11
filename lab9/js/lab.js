// index.js - Lab 9
// Author: Annabelle Stone 
// Date: 05/12/2025

// Buttons using jQuery
$("#challenge").append("<button id='challenge-button'>Make Special</button>");
$("#problems").append("<button id='problem-button'>Make Special</button>");
$("#reflection").append("<button id='reflection-button'>Make Special</button>");
$("#results").append("<button id='results-button'>Make Special</button>");

// Button click-listner
$("#challenge-button").click(function() {
  $("#challenge").toggleClass("special");
});

$("#problem-button").click(function() {
  $("#problems").toggleClass("special");
});

$("#reflection-button").click(function() {
  $("#reflection").toggleClass("special");
});

$("#results-button").click(function() {
  $("#results").toggleClass("special");
});



