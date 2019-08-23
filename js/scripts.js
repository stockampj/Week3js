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
    outputProcessor(userInput).forEach(function(number) {
      if (number === "error3") {
        $(".display").append("<span id=\"error3\">" + " I'm s0rRy, Dave. I'm afR@id I caN't d0 tHat! " + "</span>");
      } else if (number === "error2") {
      $(".display").append("<span id=\"error2\">" + " b00p " + "</span>");
      } else if (number === "error1") {
      $(".display").append("<span id=\"error1\">" + " BeeP " + "</span>");
      } else {
        $(".display").append(number + "  ");
      }
    });

    function hexAssigner() {
          var tagList = ["<span id=\"color0\">", "<span id=\"color1\">", "<span id=\"color2\">", "<span id=\"color3\">", "<span id=\"color4\">", "<span id=\"color5\">", "<span id=\"color6\">", "<span id=\"color7\">", "<span id=\"color8\">", "<span id=\"color9\">"];
          var picker = parseInt(Math.random()*10);
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
