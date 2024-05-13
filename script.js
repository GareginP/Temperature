console.log("Calculator");

function calculate(){
// Definitions and Functions for Simple Calculator
// prompt() is a method used to display a dialog box that prompts the user for input.
// variable is a container for storing data values. It allows you to label data with a descriptive name, so you can use that name to refer to the data later in the program.
//
var num= Number(prompt("Enter first number:"));
var num2= Number(prompt("Enter second Number:"));

var option = prompt("Select 1 addition)Selection 2 subtraction)Selection 3 multiplication)Selection 4 Division");
var result;

if(option == 1){
    result = num+num2;
    console.log(num+num2);

}
if(option == 2){
    result = num-num2;
    console.log(num-num2);
}
if(option == 3){
    result = num*num2;
    console.log(num*num2);

}
if(option == 4){
    result = num/num2;
    console.log(num/num2);
}
console.log("The result is: " + result);

var problem= Number(0)

if(result <= problem){
    console.log("Can not calculate Zero or negatives:")
}


}