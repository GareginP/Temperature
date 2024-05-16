console.log("Calculator");

function calculate(){

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