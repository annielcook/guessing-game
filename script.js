var guesses = 5;
var target;
var input;
var arr = [];

function compare() {
  if (target == input){
    feedback("<h2>CORRECT!</h2>", "red");
    $(".guesses_left").remove();
  } else if (guesses == 0){
    $( ".prompt" ).append( "<h2>Game Over! The number was " + target + ".</h2>" );
    clickClear();
  } else if(target < input){
    if((input - target) > 25){
      feedback("<h2>Ice cold! "+ input + " is too high</h2>", "blue");
    } else {
      feedback("<h2>A tad chilly! "+ input + " is a little too high</h2>", "purple")
    }
  } else if (target > input) {
    if((target - input) > 25){
      feedback("<h2>Ice cold! "+ input + " is too low</h2>", "blue");
    } else {
      feedback("<h2>A tad chilly! "+ input + " is a little too low</h2>", "purple")
    }
  }
};

function clickClear(){
  guesses = 5;
  $("input").css("border", "5px solid #676767");
  $("input").val("Guess a number between 1 and 100");
  arr = [];
  target = Math.floor((Math.random() * 100) + 1);
};

function hint(){
  $("h2").remove();
  var lower = target - Math.floor(Math.random() * 5) + 1;
  var higher = target + Math.floor(Math.random() * 5) + 1;
  feedback("<h2>The number is between "+ lower + " and " + higher + ".</h2>", "#676767")
  $("h2").css("font-style", "italic");
};


function clearBox(){
  //clear value text of input field when clicked
  $("input").on("focus", function(){
    $("input").val("");
  });

  //clear input field when click submit
  $(".sub").on("click", function(event){
    $("input").val("");
  });
};

function updateGuesses(){
  $('.guesses_left').html(guesses + " guesses left");
};

function feedback(prompt, color){
  $( ".prompt" ).append(prompt);
  $("h2").css("color", color);
  $("input").css("border", "5px solid " + color);
};

function submitGuess(){
  $("h2").remove();
  input = $('input').val();
  $("input").val("");

  if(guesses === 0){
    $( ".prompt" ).append( "<h2>Game Over! The number was " + target + ".</h2>" );
    clickClear();
  } else if ($.inArray(input, arr) !== -1){
    feedback("<h2>"+ input + " has already been entered. Try a different number.</h2>", "#676767");
  } else if (input >= 1 && input <= 100){
    guesses--;
    arr.push(input);
    compare();
    updateGuesses();  
  } else {
    feedback("<h2>Please enter a number between 1 and 100</h2>", "#676767");
  }
};


$(document).ready(function(){

  target = Math.floor((Math.random() * 100) + 1);
  clearBox();
  updateGuesses();

  //if enter is clicked submit
  $('#box').keydown(function(event){    
    if(event.keyCode==13){
       $('#sub').trigger('click');
    }
  });

  //if clear is clicked
  $('#clear').click(function(){
    clickClear();
    $('.guesses_left').html(guesses + " guesses left");
    $("h2").remove();
  });

  //if hint is clicked
  $('#hint').click(function(){
    hint();
  });

  //if submit is clicked
  $('#sub').click(function () {
    submitGuess();
  });

});