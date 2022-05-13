let horror = ["Midsommar", "Hereditary", "Get Out"];
let x = Math.floor(Math.random()*3);

$(".horror").click(function() { 
    $(".horror-recommend").append("<p>" + horror [x] + "</p>");

});

//declare your new array here
let action = ["Iron man", "Superman", "Transformers"];

$(".action").click(function() {
    // write your for loop here
    $(".action-recommend").append("<p>" + action + "</p>");

});

let comedy = ["Coffe and kareem", "21 Jumpstreet", "Scary Movie"];

$(".comedy").click(function() {
    // write your for loop here
    $(".comedy").append("<p>" + comedy + "</p>");

});





