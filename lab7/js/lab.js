// index.js - Lab 7
// Author: Annabelle Stone
// Date: 05/01/2025


// Credit for shuffle function: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//Credit to Wes Modes  for the window.prompt() function https://wmodes.github.io/art101/lab7/js/lab7.js


// Constants


// Functions


// The Fisher-Yates (aka Knuth) Shuffle algorithm
function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;


    // Sorts while there are still elements to shuffle  
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
 
      // Swaps the current element with a random one    
     temporaryValue = array[currentIndex];
     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    }
    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(text) {
                return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
            }
        );
     }
   
    function sortUserName(userName) {
        return userName.toLowerCase().split("").sort().join("");
    }


    function nameRandomizer(userName) {
        var nameArray = userName.toLowerCase().split("");      
        console.log("nameArray =", nameArray);
        var shuffledArray = shuffleArray(nameArray);
        console.log("shuffledArray =", shuffledArray);
        var shuffledString = shuffledArray.join("");
        var newName = toTitleCase(shuffledString);
        return newName;
}


function printName() {
   
    var userName = window.prompt("Hi, may I please have your name?");
    document.writeln("<style>:root {---textlen: " + userName.length + ";}</style>");
   
    var sortedName = sortUserName(userName);
    document.writeln("Here, you can have it back: " + sortedName + "</br></br>");
   
    var randomName = nameRandomizer(userName);
    document.writeln("Or, you can have it back like this: " + randomName + "</br></br>");
}


// Call the function
printName();


// Variables


// Body







