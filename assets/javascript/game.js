$(document).ready(function() {

//generates a random number between 19 and 120
var Random=Math.floor(Math.random()*101+19);
var userTotal = 0;
//printing the random number onto screen
$('#randomNumber').text(Random);

var num1= Math.floor(Math.random()*11+1);
var num2= Math.floor(Math.random()*11+1);
var num3= Math.floor(Math.random()*11+1);
var num4= Math.floor(Math.random()*11+1);

var finalTotal = 0;
var wins = 0;
var losses = 0;

$("#numberOfWins").text(wins);
$("#numberOfLosses").text(losses);
$("#finalTotal").text(finalTotal);

//everything in this reset function will reset all numbers on screen
function reset() {
    Random=Math.floor(Math.random()*101+19);
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal = 0;
    $("#finalTotal").text(userTotal);
}

function winner() {
    alert("You won! Good job!");
    wins++;
    $("#numberOfWins").text(wins);
    reset();
}

function loser() {
    alert("You lost! Try again!");
    losses++;
    $("#numberOfLosses").text(losses);
    reset();
}

$("#yellow").on("click",function() {
    userTotal = userTotal + num1;
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
        winner();
    } else if (userTotal > Random) {
        loser();
    }
});

$("#red").on("click",function() {
    userTotal = userTotal + num1;
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
        winner();
    } else if (userTotal > Random) {
        loser();
    }
});

$("#blue").on("click",function() {
    userTotal = userTotal + num1;
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
        winner();
    } else if (userTotal > Random) {
        loser();
    }
});

$("#green").on("click",function() {
    userTotal = userTotal + num1;
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
        winner();
    } else if (userTotal > Random) {
        loser();
    }
});

});