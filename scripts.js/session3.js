


function guessNumber(){
    let randomNumber=Math.floor(Math.random()*10)+1;

    let userGuess=prompt("Guess a number between 1 and 10");

    

    if(userGuess==randomNumber){

        document.getElementById("result").innerHTML = "Congratulations! You guessed the number" + randomNumber;

    }else{
        document.getElementById("result").innerHTML = "Sorry, that's not correct. The number was" + randomNumber;

    }
}

let userName= "Garegin@sdgku.edu";
let password="test1234";

function login(){
    let unameInput = prompt("Enter your email:");
    let upassInput = prompt("Enter your password:");
    
    if(unameInput===userName && upassInput===password){
        console.log("Welcome to the system");

    }else{
        console.log("Invalid credentials");
    }
}
