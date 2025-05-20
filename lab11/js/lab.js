// index.js - Lab 11
// Author: Annabelle Stone 
// Date: 05/19/2025
//Javascript Forms and Events 

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

function anagramString(inputString) {
  return inputString.split('').anagramString().join('');
}


$("#submit").click(function(){
   const userName = $("#user-name").val();
  userNameSorted = sortString(userName);
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

  userNameAnagramed = anagramString(userName);
  $("#output").html('<div class="text"><p>' + userNameAnagramed + '</p></div>');
});


