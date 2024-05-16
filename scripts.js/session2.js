




function taxCalcullation(){
    var num= Number(prompt("Enter first number:"));
    var num2= Number(prompt("Enter second Number:"));
    var result= num + num2

    console.log("The result is: " + result);
}

function getGPA(){
    var name= prompt("Enter the name");
    var grade101 = Number(prompt("Enter the 101 grade:"));
    var grade102 = Number(prompt("Enter the 102 grade:"));
    var gpa=(grade101+grade102)/2;
    
    document.getElementById("studentList").innerHTML+=`<li> Name: ${name} - GPA: ${gpa} </li>`;
}