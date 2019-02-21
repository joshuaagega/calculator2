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
 var number1 = parseInt(prompt("Enter a number:"));
 var number2 = parseInt(prompt("Enter a number:"));
 alert(add(number1, number2));
});
