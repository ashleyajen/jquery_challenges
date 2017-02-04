$(document).ready(function() {

  $("#submit").on("click", function() {
    // grab the user input in the textbox and put it in the str variable
      var str = $("#question").val();
      // print the str variable to the p tag
      $("#question1").text(str);
      // replace the textbox content ("#question") w/ an empty string
      $("#question").val("");
      //Appends our random answer to <p id="answer">
      $("#answer").append(ourAnswer);

      });

    //defines our array of answers.
    var a = [ "Yup!", "Fuhgeddaboudit", "Maybe", "what would your mother do?", "what would an Australian do?", "Then do the opposite", "Your answer here"];
    //calculates random selection of index string.
    var randomNum =  Math.floor(Math.random() * 6);
    //this takes the string(words) from the array.
    var ourAnswer = a[randomNum];

  });


// function magicEight() {
//   var userInput = document.getElementById('user_input').value;
//   console.log(userInput);
//   console.log(ourAnswer);
//   document.getElementById('response').innerHTML = ourAnswer;
//   document.getElementById('input').innerHTML = userInput;
// }
