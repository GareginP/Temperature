


//function caltemp(Celsius){
   // var temperature= Number(prompt("Enter Celsius temperature to convert to Fahrenheit:"));
   // var temperature= Cel;
   // var result= Fahrenheit = (Celsius * 9/5) + 32;
   // console.log(result);
//}

function caltemp() {
    let temp= (prompt("Select C to convert Celsius to Fahrenheit)Select F to convert Fahrenheit to Celsius"));
    let valNum= Number(prompt("Enter to Convert:"));
    
    //let option = temp + valNum;
    //let result;
    
    if(temp == "C" ){
        let F= (valNum * 9/5) + 32;
        
        document.getElementById("outputtemp").innerHTML = F;
    }
    
    if(temp == "F" ){
        let C= (valNum - 32) * 5/92;
        
        document.getElementById("outputtemp").innerHTML = C;
    }
}