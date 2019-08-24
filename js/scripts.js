var username = ""

$(document).ready(function() {
  $("body").fadeIn(1000);
  $("form#tellMe").submit(function(event) {
    event.preventDefault();
    username = $("#username").val();
  });





  $("form#userInput").submit(function(event) {
    event.preventDefault();

    //Text Cleaner
    function numberCleaner(number) {
      var regex = /[^0-9-]/g;
      return parseInt(userInput.replace(regex, ""));
    }

    //Main Processor
    function outputProcessor(number) {
      number = numberCleaner(number)
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
        $(".display").append(hexAssigner("error3") + "I'm s0rRy, " + username +". I'm afR@id I caN't d0 tHat!" + "</span>" + " ");
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

  });
});
