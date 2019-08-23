$(document).ready(function() {
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
    $(".display").fadeIn(8000);
    outputProcessor(userInput).forEach(function(number) {
      if (number === "error3") {
        $(".display").append(" " + "<span class=\"error3\">" + "I'm s0rRy, Dave. I'm afR@id I caN't d0 tHat!" + "</span>" + " ");
      } else if (number === "error2") {
        $(".display").append(hexAssigner() + " b00p " + "</span>");
      } else if (number === "error1") {
        $(".display").append(hexAssigner() + " beep " + "</span>");
      } else {
        $(".display").append(hexAssigner() + number + "</span> ");
      }
    });

    function hexAssigner() {
      var tagList = ["<span class=\"color0\">", "<span class=\"color1\">", "<span class=\"color2\">", "<span class=\"color3\">", "<span class=\"color4\">", "<span class=\"color5\">", "<span class=\"color6\">", "<span class=\"color7\">", "<span class=\"color8\">", "<span class=\"color9\">"];
      var picker = parseInt(Math.random() * 10);
      console.log(picker);
      return tagList[picker];

    }






  });
});









// function outputProcessor(number) {
//   var outputArray = []
//   for (var i = 0; i <= userInput; i++) {
//     var element = i.toString();
//     var digets = element.split("");
//     if (digets.indexOf("3") >= 0) {
//       element = "error3";
//     } else if (digets.indexOf("2") >= 0) {
//       element = "error2";
//     } else if (digets.indexOf("1") >= 0) {
//       element = "error1";
//     } else {
//       element = i;
//     }
//     outputArray.push(element);
//   }
//   return outputArray
// };









// function numberValidator(number) {
//   var check = Number.isInteger(number);
//   console.log(check);
//   return check;
// };
