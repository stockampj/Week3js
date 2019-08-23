$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    $(".display").text("");

    //Text Cleaner
    var regex = /[^0-9-]/g
    var userInput = parseInt($("#userNumber").val().replace(regex, ""));


    function numberValidator(number) {
      var check = Number.isInteger(number);
      console.log(check);
      return check;
    };



    function outputProcessor(number) {
      var outputArray = []
      for (var i = 0; i <= userInput; i++) {
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
      return outputArray
    };

    outputProcessor(userInput).forEach(function(number) {
      if (number === "error3") {
        $(".display").append("<span id=\"error3\">" + "I'm s0rRy, D@ve. I'm afR@id I caN't d0 tHat " + "</span>");
      } else if (number === "error2") {
        $(".display").append("b00p ");
      } else if (number === "error1") {
        $(".display").append("BeeP ");
      } else {
        $(".display").append(number+" ");
      }
    })






    // function outputProcessor(number) {
    //   var outputString = ""
    //   for (var i = 0; i <= userInput; i++) {
    //     var element = i.toString();
    //     var digets = element.split("");
    //     if (digets.indexOf("3") >= 0) {
    //       element = "<span id=\"error3\">" + "I'm sorry, Dave. I'm afraid I can't do that." + "</span>";
    //     } else if (digets.indexOf("2") >= 0) {
    //       element = "<span id=\"error2\">Boop </span>";
    //     } else if (digets.indexOf("1") >= 0) {
    //       element = "<span id=\"error1\">Beep </span>";
    //     } else {
    //       element = i + " ";
    //     }
    //     outputString += element;
    //   }
    //   return outputString
    // };


    // outputProcessor(userInput)
    // output = outputProcessor(userInput)
    // $(".display").text(output)



  });
});
