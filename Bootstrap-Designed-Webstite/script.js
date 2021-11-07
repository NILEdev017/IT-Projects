$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel("pause");

  // Go to the previous item
  $("#myBtn").click(function(){
    $("#myCarousel").carousel("prev");
  });

  // Go to the next item
  $("#myBtn2").click(function(){
    $("#myCarousel").carousel("next");
  });
    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});