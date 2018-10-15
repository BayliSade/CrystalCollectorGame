$(document).ready(function() {

//generates a random number between 19 and 120
var Random=Math.floor(Math.random()*101+19)

$(document).ready(function() {
//printing the random number onto screen
$('#randomNumber').text(Random);

var num1= Math.floor(Math.random()*11+1);
var num2= Math.floor(Math.random()*11+1);
var num3= Math.floor(Math.random()*11+1);
var num4= Math.floor(Math.random()*11+1);

var finalTotal;
var wins;
var losses;

$("#numberOfWins").text(wins);
$("#numberOfLosses").text(losses);
$("#finalTotal").text(finalTotal);


});

});