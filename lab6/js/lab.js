// index.js - Arrays and Objects Lab 6
// Author: Annabelle Stone 
// Date: 04/28/2025

// Constants

// Functions

// Variables

let myMainRide = {
  make: 'Lexus',
  model: 'ES 330',
  color: 'Gold',
  year: 2005,
  name: 'SSTAHOE',
  age: function() {
    return 2025 - this.year;
  }, 
}

let myTransport = ['My Car', 'The Bus', 'Walking, i.e. Subarshoes, Chevrolegs, etc...', 'Uber'];

//Output
document.writeln('Kinds of Transportation I Use:', myTransport, "<br>");
//Object written into the document
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
