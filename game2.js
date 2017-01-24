$(document).ready(function() {

  var zones = ['zone-2', 'zone-3', 'zone-1', 'zone-4'];

  var x = 0;

// for each zone - this is what will happen on mouse enter, mouse out, and click event listeners

for (i=0; i<zones.length; i++) {

  $('.zone').eq(i).on('mouseenter', function(){
    // if statement - if the zone array value index is equal to the ID then execute this function
    // eq(); reduces array value to index value
    if (zones[x] === $(this).attr('id')) {
      // toggles class green
      $(this).toggleClass('green');
    } else {
      // toggles class red
      $(this).toggleClass('red');
    }
  });

  $('.zone').eq(i).on('mouseout', function(){
    // if statement if zone array value index is equal to id
    if (zones[x] === $(this).attr('id')) {
      // toggle green class
      $(this).toggleClass('green');
    } else {
      // else toggle red
      $(this).toggleClass('red');
    }
  });
  // click event - if statement
  $('.zone').eq(i).on('click', function(){
    if (zones[x] == $(this).attr('id')) {
      // turns first two functions off
      $(this).off('mouseenter');
      $(this).off('mouseout');
      // adds a counter to var x, which will allow you to move to the next index in the array in the game

      x++;
    }
  });
}

var count = 0;
// for every click add 1 to the counter
// if the count = 4, alert user that they won
$(".zone").on('click', function(){
  count += 1;
  if (count == 4) {
    alert("You won!");
  }
});



});
