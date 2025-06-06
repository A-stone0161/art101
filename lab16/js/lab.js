// index.js - Lab 16
// Author: Annabelle Stone 
// Date: 06/05/2025
//JSON and API's
// Using the core $.ajax() method


 // ajax obj
const ajaxObj = {
  url: "https://corsproxy.io/?https://xkcd.com/info.0.json",
  data: {},
  type: "GET",
  dataType: "json"
};

// button listener
$("#getComicButton").click(function(){
  // call ajax
  $.ajax(ajaxObj)
  // success callback
  .done(function(data){
    console.log(data);
    // pull out relevant data from results
    let title = data.title;
    let num = data.num;
    let desc = data.transcript;
    let imageUrl = data.img;
    // put data in output
    $("#output").html(`<h2>${title}</h2>`);
    $("#output").append(`<img src='${imageUrl}' />`);
    $("#output").append(`<p class='date'>Comic: ${num}</p>`);
    $("#output").append(`<p class='desc'>${desc}</p>`);
  })
  // fail callback
  .fail(function(xhr, status, error) { 
    // Error handler
    console.error(error); 
  })
  
})