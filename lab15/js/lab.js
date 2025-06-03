// index.js - Lab 15
// Author: Annabelle Stone 
// Date: 05/25/2025
//API's

//Constant 
const ajaxObj = {
  url: "https://yesno.wtf/api",
  type: "GET",
  dataType: "json"
}
//When user clicks button
$("#ideaButton").click(function(){
  console.log("click!");
//Use jQuery AJAX call to fetch output 
  $.ajax(ajaxObj)
//Callback for success  
  .done(function(data){
    console.log("Success!");
    console.log(data);
    //Extract answer from data
    let answer = data.answer;
    //Extract image from data 
    let imgURL = data.image
    //Build image HTML
    let imageHTML = "<img src = '" + imgURL + "'>";
     
    //Inset the output in the output div
    $("#output").html("<h1>" + answer);
    $("#output").append("<h1>" + imageHTML);
    
  })
 //Callback for failure
  .fail(function(xhr, status, errorThrown){
    console.log(errorThrown + "Status:" + status);
  });
  
});




