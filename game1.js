$(document).ready(function() {

  // add style when mouseover occurs
  $(".zone").mouseover(function(){
    $(this).css({
      "background-color":"green"
    });
  });

  $(".zone").mouseout(function(){
    // remove style when mouse out occurs
    $(this).removeAttr("style");
  });

  $(".zone").on("click", function(){
    $(this).addClass("green");
    $(this).off("click");
  });

  // establish variable as counter for clicks
  var count = 0;
  // for every click add 1 to the counter
  // if the count = 4, alert user that they won
  $(".zone").click(function(){
    count += 1;
    if (count == 4) {
      alert("You won!");
    }
  });




});
