$("a").mouseenter(function() {
 $(this).animate({
    fontSize: "1.5em"
  }, 300 );
  console.log("Worked");
});
$("a").mouseleave(function() {
 $(this).animate({
    fontSize: "1em"
  }, 300);
  console.log("mouse has left");
  });
