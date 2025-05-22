// index.js - Lab 12
// Author: Annabelle Stone 
// Date: 05/25/2025
//Javascript Forms and Events 

// Credit for magic descriptions from Fandom Wiki:https://skulduggery.fandom.com/wiki/Magic#Elemental

// Credit for HTML DOM Element addEventListner() and getElementByID() from W3Schools: https://www.w3schools.com/jsref/met_element_addeventlistener.asp

// Array of objects to sort by
magicsArray = [
    {
        title: "Please enter a name, it is required.",
        text: "You cannot go through the surge without your true name intact."
    },
    {
        title: "Sorcerer",
        text: "Sorcerers are the most common type of magic user. They are able to use both Elemental and Adept magic. Sorcerers are also able to use the magic of other sorcerers, but only if they have been given permission to do so."
    },
    {
        title: "Elemental",
        text: "Elemental magic involves the use of Air, Water, Earth and Fire. However, Air and Fire are the most commonly used. This is due to the fact that Earth magic is mostly only used for defense and Water magic has less practical or combative use except when large bodies of water or snow are nearby."
    },
    {
        title: "Adept",
        text: "Adept magic is one of the two base disciplines of magic available to sorcerers, the other being Elemental magic. Unlike Elemental mages, Adept mages have only one power, though it is typically more powerful than anything that an Elemental can do. However, there is often a significant drawback to using Adept magic."
    },
    {
        title: "Witch",
        text: "Witches, along with Warlocks, were reclusive users of Magic who lived in colonies, were wary of outsiders, and refused to share their secrets. The Brides of Blood Tears, a particular coven of witches, aligned themselves with Charivari during the War between Sanctuaries. Witches differentiate themselves from Sorcerers through their use of magic, which lacks the Adept/Elemental dichotomy. Instead, they weild magic as a singular power, with far more ritual and gesture than is typical of Sorcerer Magic. During the series, they repeatedly express their belief that magic should not be restricted by rules or disciplines."
    },
    {
        title: "Warlock",
        text: "Warlocks use a particularly dark kind of magic, the caster's mouth transforms to enable them to eat the soul of their defeated enemy therefore gaining their strength/power."
    }
]


function sortingHat(str) {
  let len = str.length;
  let mod = len % 5;
  if (mod == 0) {
    return "Please enter a name, it is required."
  }
  else if (mod == 1) {
    return "Elemental"
  }
  else if (mod == 2) {
    return "Adept"
  }
  else if (mod == 3) {
    return "Warlock"
  }
  else if (mod == 4) {
    return "Witch"
  }
}

 // Uses user input and button to sort into a magic type.
document.getElementById("sortButton").addEventListener("click", function() {
// Value of the input field 
const name = document.getElementById("nameInput").value;
// Value from the sortingHat function   
const magicName = sortingHat(name);
const magicInfo = magicsArray.find(h => h.title === magicName);
// Display the result in the result div
  document.getElementById("result").innerHTML = `
    <h2>${magicInfo.title}</h2>
    <p>${magicInfo.text}</p>
  `;
});