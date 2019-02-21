//business backend logic:

var add = function(number1, number2,) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

// every thing below is user interface logic:

$(document).ready(function(){
$("form#add").submit(function(event) {
event.preventDefault();
 var number1 = parseInt($("#add1").val());
 var number2 = parseInt($("#add2").val());
 var result = add(number1,number2);
 $("#output").text(result);
});

$("form#multiply").submit(function(event) {
event.preventDefault();
 var number1 = parseInt($("#multiply1").val());
 var number2 = parseInt($("#multiply2").val());
 var result = multiply(number1,number2);
 $("#output").text(result);
});
});
