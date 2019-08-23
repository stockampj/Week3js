$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    $(".display").text("");

    //Text Cleaner
    var regex = /[^0-9-]/g
    var userInput = parseInt($("#userNumber").val().replace(regex, ""));

    //Display Text
    var output = numberValidator(userInput)
    $(".display").text(output)

    function numberValidator(number) {
      var check = Number.isInteger(number);
      console.log(check);
      return check;
    };

    var initialArray = []

    function arrayPopulator(number) {
      for (var i = 0; i <= userInput; i++) {
        var element = i.toString();
        var digets = element.split("");
        if (digets.indexOf("3")>=0) {
          element = "I'm sorry, Dave. I'm afraid I can't do that.";
        } else if (digets.indexOf("2")>=0) {
          element = "Boop";
        } else if (digets.indexOf("1")>=0) {
          element = "Beep";
        } else {
          element = i;
        }
        initialArray.push(element);
      }

    };



    //Director
    arrayPopulator(userInput)
    console.log(initialArray);

  });
});
