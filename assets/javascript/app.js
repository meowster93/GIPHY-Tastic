/*eslint-env browser*/
/*global $*/
$(document).ready(function () {

// create varaible with an array of topics for giphs
var topics = ["One Punch Man", "One Piece", "Dragon Ball Super", "Sailor Moon", "Code Geass","Steins;Gate", "Erased","Black Butler","Naruto", "Soul Eater"]
var APIkey= jWL1Z34W3Q5t4uM0IV3Z5K4TTp0O1yTR;

//----------------------------create functions----------------------------------------------//

function displayAnime(){
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + i + "&api_key=jWL1Z34W3Q5t4uM0IV3Z5K4TTp0O1yTR";

var i = $(this).data("search");
console.log(i);
}


displayAnime();


});