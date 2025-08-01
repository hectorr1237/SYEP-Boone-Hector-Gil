console.log("Hello World!");

//string has quotes/number no quotes
let myTest = "123";
console.log(typeof myTest);

console.log(10 + " eggs");
console.log(10 + 8 + " eggs");
console.log("eggs"+10 +8);

//Both conditions need to be true 
console.log(7>3) &&(5>2);

//Only one condition must be true
console.log(10>3)||(10>12)

//Logical not 
console.log(!5>3);

function introduction(namw,age){
    console.log("Hello, my name is "+ name +"and I am "+ age + "years old.");
}

introduction("Hector",15)

const hour =new Date().getHours();
let greeting = "";

if (hour<12){
    greeting= "Good morning☀️"
}else if (hour>18){
    greetings="Good Afternoon ⛅"
}else{
    greeting = "Good Evening🌙"
}

document.getElementById("greeting").innerText = greeting;