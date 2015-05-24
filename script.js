var guesses = 5;
var target;
var input;
var arr = [];


function compare() {
  //$("h2").remove();
  guesses--;
  $('input').val('');
  if(target < input){
    if((input - target) > 25){
      $(".prompt").append("<h2>Ice cold! "+ input + " is too high</h2>" );
      $("h2").css("color", "blue");
      $("input").css("border", "5px solid blue");
    } else {
      $(".prompt").append("<h2>A tad chilly! "+ input + " is a little too high</h2>" );
      $("h2").css("color", "purple");
      $("input").css("border", "5px solid purple");
    }
  } else if (target > input) {
    if((target - input) > 25){
      $(".prompt").append("<h2>Ice cold! "+ input + " is too low</h2>" );
      $("h2").css("color", "blue");
      $("input").css("border", "5px solid blue");
    } else {
      $(".prompt").append("<h2>A tad chilly! "+ input + " is a little too low</h2>" );
      $("h2").css("color", "purple");
      $("input").css("border", "5px solid purple");
    }
  } else if (target == input){
    $(".prompt").append("<h2>"+ input + " is correct!</h2>" );
    $("h2").css("color", "red");
    $("input").css("border", "5px solid red");
  } else {
    console.log("undefined input")
  }
};

function clear(){
  guesses = 5;
  $("input").css("border", "5px solid #676767");
  $("input").val("");
  arr = [];
};

function hint(){
  $("h2").remove();
  var add = Math.floor(Math.random() * 5) + 1
  var sub = Math.floor(Math.random() * 5) + 1
  var lower = target - sub;
  var higher = target + add;
  $(".prompt").append("<h2>The number is between "+ lower + " and " + higher + ".</h2>" );
  $("h2").css("color", "#676767");
  $("h2").css("font-style", "italic");
  $("input").css("border", "5px solid #676767");
};



$(document).ready(function(){
  target = Math.floor((Math.random() * 100) + 1);

  $("input").on("focus", function(){
    $("input").val("");
  });

  $(".sub").on("click", function(event){
    $("input").val("");
  });

  $('.guesses_left').html(guesses + " guesses left");

  $('#box').keydown(function(event){    
    if(event.keyCode==13){
       $('#sub').trigger('click');
    }
  });

  $('#clear').click(function(){
    clear();
    $('.guesses_left').html(guesses + " guesses left");
    $("h2").remove();
  });

  $('#hint').click(function(){
    hint();
  });

  $('#sub').click(function () {
    $("h2").remove();
    input = $('input').val();
    if(guesses === 0){
      $( ".prompt" ).append( "<h2>Game Over!</h2>" );
      clear();
    }else if(input == '' || input > 100 || input < 1){
      $( ".prompt" ).append( "<h2>Please enter a number between 1 and 100</h2>" );
      $("input").val("");
    } else if ($.inArray(input, arr) !== -1){
      $( ".prompt" ).append( "<h2>"+ input + " has already been entered. Try a different number.</h2>" );
      $("h2").css("color", "#676767");
      $("input").val("");
      $("input").css("border", "5px solid #676767");
    } else {
      arr.push(input);
      compare();
      console.log(guesses);
    }
    $('.guesses_left').html(guesses + " guesses left");
  });
  //  input = $('input').val();
    
  //  $('.button').on("click", compare(guesses));
  //  console.log(guesses);


  //  //});
  
//if guesses left -- get guess

//subtract one from counter

//tell user if high or low or right

// repeat

});