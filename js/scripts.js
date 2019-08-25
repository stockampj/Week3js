var username = ""

$(document).ready(function() {
  $("body").fadeIn(1000);

  $("form#userInput").submit(function(event) {
    event.preventDefault();

    //Main Processor
    function outputProcessor(number) {
      var outputArray = []
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

    //User interaction
    var userInput = $("#userNumber").val();
    //Display Text
    $(".display").text("");
    $(".display").fadeIn(3000);
    outputProcessor(userInput).forEach(function(number) {
      if (number === "error3") {
        $(".display").append(hexAssigner("error3") + "I'm s0rRy, " + username +" I'm afR@id I caN't d0 tHat!" + "</span>" + " ");
      } else if (number === "error2") {
        $(".display").append(hexAssigner("error2") + " b00p " + "</span>");
      } else if (number === "error1") {
        $(".display").append(hexAssigner("error1") + " beep " + "</span>");
      } else {
        $(".display").append(hexAssigner("digit") + number + "</span> ");
      }
    });

    function hexAssigner(pull) {
      if (pull === "error3") {
        return "<span class=\"error3\">"
      } else {
        var tagList = [
          "<span class=\"color0 blinkFast\">",
          "<span class=\"color1 blinkSlow\">",
          "<span class=\"color2 blinkSlow\">",
          "<span class=\"color3 blinkSlow\">",
          "<span class=\"color4 blinkSlow\">",
          "<span class=\"color5 blinkSlow\">",
          "<span class=\"color6 blinkMed\">",
          "<span class=\"color7 blinkMed\">",
          "<span class=\"color8 blinkMed\">",
          "<span class=\"color9 blinkMed\">"
        ];
        var picker = parseInt(Math.random() * 10);
        console.log(picker);
        return tagList[picker];
      };
    };

    if ($("#userNumber").val() == 42) {
        $(".display").text("");
        $(".display").append("<span id=\"special\">" + "boop... boop... by my calculations, this is the answer to life, the universe, and everything." + "</span>");
    }

  });

  $("form#tellMe").submit(function(event) {
    event.preventDefault();
    $(".display").text("")
    username = $("#username").val();
    if (username === ""){
      username = "unidentified human. For a more personalized experience, please sumbit your designation."
    }
    $(".display").append("<span id=\"special\">" + "Hello " + username + "</span>");
  });

  $("#userNumber").change(function(){
    $("#usernumberdisplay").text($("#userNumber").val());
  });
});
