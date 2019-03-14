$(".one").click(function(){
    var name = $(".number1").val();
    $(".result1").text(name);
});


$(".one").click(function(){
    var name = $(".number2").val();
    $(".result2").text(name);
});


$(".one").click(function(){
    var year = $(".number3").val();
    year = 2039 - parseInt(year);
    $(".result3").text(year);
});

$(".one").click(function(){
     var animal = $(".number4").val();
    $(".result4").text(animal);
});
