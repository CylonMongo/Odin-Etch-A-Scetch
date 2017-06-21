var gsize = 16; 

$(document).ready(function() {
  makeGrid();
  $(".button").click(function() {
    $('.grid').removeClass("highlight");
    gsize = prompt("What size??");
    if (gsize > 150) {gsize = 150};
    makeNew();
  });
});
 
function makeGrid() {
	var box = '.container'
	var div = "<div class='grid'></div>"
  for (i = 0;i < gsize * gsize ;i++) {
    $(box).append(div);
  };
  $(".grid").width(600/gsize + "px");
  $(".grid").height(600/gsize + "px");
};
 
function makeNew() {
  $(".container").empty();
  makeGrid();
};
 
$(document).on("mouseenter", ".grid", function() {
  $(this).addClass("highlight");
});