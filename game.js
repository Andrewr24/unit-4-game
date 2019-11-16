src="https://code.jquery.com/jquery-3.4.1.min.js"
integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
crossorigin="anonymous">
$(document).ready(function() {

    var random = Math.floor(Math.random()*102+19);
    
    $(".random-number").text(random);
    
    var num1 = Math.floor(Math.random()*12+1);
    var num2 = Math.floor(Math.random()*12+1);
    var num3 = Math.floor(Math.random()*12+1);
    var num4 = Math.floor(Math.random()*12+1);
    
    var userTotal= 0;
    var wins = 0;
    var losses = 0;
    
    $(".win-counter").text(wins);
    $(".loss-counter").text(losses);
    
    function reset() {
        random = Math.floor(Math.random()*102+19);
        console.log(random);
        $(".random-number").text(random);
        var num1 = Math.floor(Math.random()*12+1);
        var num2 = Math.floor(Math.random()*12+1);
        var num3 = Math.floor(Math.random()*12+1);
        var num4 = Math.floor(Math.random()*12+1);
        userTotal = 0;
        $(".user-score").text(userTotal);
    }
    
    function winner() {
        alert("You Won!!");
        wins++;
        $(".win-counter").text(wins);
        reset();
    }
    
    function loser() {
        alert("You Lose!!");
        losses++;
        $(".loss-counter").text(losses);
        reset();
    }
    
    var crystalValues = {};
crystalValues[1] = Math.floor(Math.random()*12+1);
crystalValues[2] = Math.floor(Math.random()*12+1);
crystalValues[3] = Math.floor(Math.random()*12+1);
crystalValues[4] = Math.floor(Math.random()*12+1);




function getCrystalHandler(crystalKey) {
   return function() {
    userTotal = userTotal + crystalValues[crystalKey];
    console.log("New userTotal " + userTotal);
    $(".user-score").text(userTotal);

    if (userTotal === random) {
        winner()
    }

    else if (userTotal > random) {
        loser()
    } 
}
}

$("#image1").on("click", getCrystalHandler(1));
$("#image2").on("click", getCrystalHandler(2));
$("#image3").on("click", getCrystalHandler(3));
$("#image4").on("click", getCrystalHandler(4));})
