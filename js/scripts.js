$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var str = $("#sentence").val ();
    var words = str.split (' ');
    var threeOrMore = words.map (function (word){
      if (word.length >= 3){
        return word;
      };
    });
    var result = str + " " + threeOrMore.reverse ().toString ().replace(/,/g," ");
    $("#story").show();
    $("#story").append ("<p>"+result+"</p>");
    event.preventDefault();

  });
});
