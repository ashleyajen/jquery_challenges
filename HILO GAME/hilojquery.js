var name = prompt("Welcome to the Hi Lo Game! Please Enter Your Name");
var randomNum = Math.floor(Math.random() *100)+1;
console.log(randomNum);
var keepTrack = 0;
console.log("Number of guesses: " + keepTrack);

$(document).ready(function() {
//Take value of user input, parse it into an integer
   $("#go").on("click", function () {
     var userInput = parseInt($("#user_input").val());
//Is user input is not a number, return error message.
   if (isNaN(userInput)) {
    $("#response").text("That's not a number, enter a valid number between 0-100");
   }
//If user input less than random number & if user has guessed less than seven times, return "too low" message; also, up the count of keepTrack.
   else if (userInput < randomNum && keepTrack <= 7) {
     $("#response").text("Your Guess is Too Low. Try Again!");
     keepTrack++;
     console.log("Number of guesses: " + keepTrack);
   }
//If user input greater than random number & if user has guessed less than seven times, return "too high" message; also, up the count of keepTrack.
   else if (userInput > randomNum && keepTrack <= 7) {
     $("#response").text("Your Guess is Too High. Try Again!");
     keepTrack++;
     console.log("Number of guesses: " + keepTrack);
   }
//If user enters the correct number, return "you win" message.
   else if (userInput === randomNum) {
       $("#response").text("You Win" + "," + " " + name + "!");
   }
//6 is actually 7 because of indexing. If user exceeds seven tries, return "you lose" message.
   else if (keepTrack > 6) {
       $("#response").innerHTML("You ran out of tries, YOU LOSE!");
   }
//Resets input to an empty string, empty input field.
   $("#user_input").val("")

  });

});
