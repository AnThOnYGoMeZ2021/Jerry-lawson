$(".bottom-left").hover(function() {
    $(".bottom-left").text("Thank you for learning about Jerry Lawson");
     $(".bottom-left").css("background-color","yellow");
});


$(".bottom-right").mouseenter(function() {
    $(".bottom-right").text("Thank you for visiting me and have a good day");
     $(".bottom-right").css("background-color","red");
});

$(".bottom-right").mouseleave(function() {
    $(".bottom-right").text("come again soon");
     $(".bottom-right").css("background-color","orange");
});

$(".submit").click(function() {
      var name=$('.jerryLawson').val();
    var message= "anthony " + name + "!!!!";
  $(".submit").html(message);
 
});

$(".submit").click(function() {
      var amountPlayed=$('.jerryLawson').val();
    var message= "your a smart person, and great job on learning about Jerry Lawson " + amountPlayed + " keep it up";
  $(".submit").html(message);
 
});

$(".submit").click(function(){
  $("p").append("<b>\ Yay im glad to hear this! </b>");
});