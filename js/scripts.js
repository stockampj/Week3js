var username = ""

//Main Processor - The entire coputation is beween lines 10 and 32;
function outputProcessor(number) {
  var outputArray = [];
  for (var i = 0; i <= number; i++) {
    var element = i.toString();
    var digets = element.split("");
    if (digets.indexOf("3") >= 0) {
      element = "error3";
    } else if (digets.indexOf("2") >= 0) {
      element = "error2";
    } else if (digets.indexOf("1") >= 0) {
      element = "error1";
    } else {
      element = i;
    }
    outputArray.push(element);
  }
  for (var i = 0; i < (outputArray.length - 1); i++) {
    if ((outputArray[i] === "error3") && (outputArray[i + 1] === "error3")) {
      outputArray[i] = "";
    }
  }
  return outputArray
};


$(document).ready(function() {
  $("body").fadeIn(1000);

  $("form#userInput").submit(function(event) {
    event.preventDefault();

    //User interaction
    var userInput = $("#userNumber").val();
    //Display Text
    $(".display").text("");
    outputProcessor(userInput).forEach(function(number) {
      if (number === "error3") {
        $(".display").append(hexAssigner("error3") + "I'm s0rRy, " + username + " I'm afR@id I caN't d0 tHat!" + "</span>" + " ");
      } else if (number === "error2") {
        $(".display").append(hexAssigner("error2") + " b00p " + "</span>");
      } else if (number === "error1") {
        $(".display").append(hexAssigner("error1") + " beep " + "</span>");
      } else {
        $(".display").append(hexAssigner("digit") + number + "</span> ");
      }
    });


    // This function changes the styles of the individule numbers with an RNG
    function hexAssigner(pull) {
      if (pull === "error3") {
        return "<span class=\"error3 blinkFast\">"
      } else {
        var tagList = [
          "<span class=\"color0 blinknone\">",
          "<span class=\"color1 blinknone\">",
          "<span class=\"color2 blinknone\">",
          "<span class=\"color3 blinknone\">",
          "<span class=\"color4 blinknone\">",
          "<span class=\"color5 blinkSlow\">",
          "<span class=\"color6 blinknone\">",
          "<span class=\"color7 blinknone\">",
          "<span class=\"color8 blinksMed\">",
          "<span class=\"color9 blinknone\">"
        ];
        var picker = parseInt(Math.random() * 10);
        console.log(picker);
        return tagList[picker];
      };
    };


    //Special circumstance
    if ($("#userNumber").val() == 42) {
      $(".display").text("");
      $(".display").append("<span id=\"special\">" + "boop... boop... by my calculations, this is the answer to life, the universe, and everything." + "</span>");
    }


    username = $("#username").val();
    if (username === "") {
      $(".display").text("")
      $(".display").append("<span id=\"special\">" + "PLEASE SUBMIT YOUR DESIGNATION FOR PROCESSING")
    };
  });


  // This handels the User's Name submition and the displayed behavior
  $("form#tellMe").submit(function(event) {
    event.preventDefault();
    $(".display").text("")
    username = $("#username").val();
    if (username === "") {
      username = "unidentified human"
      $(".display").append("<span id=\"special\">" + "Hello " + username + ". For a more personalized experience, please sumbit your designation.</span>")
    } else {
    $(".display").append("<span id=\"special\">" + "Hello " + username + "</span>");
    }
    $("#username").val(username);
  });


  // This changes the user's number display on the slider
  $("#userNumber").change(function() {
    $("#usernumberdisplay").text("");
    if ($("#userNumber").val() == 42) {
      $("#usernumberdisplay").append("<span class=\"surprise\">" + $("#userNumber").val() + "</span>");
    } else {
      $("#usernumberdisplay").append("<span class=\"blinkFast\">" + $("#userNumber").val() + "</span>")
    };
  });
});
