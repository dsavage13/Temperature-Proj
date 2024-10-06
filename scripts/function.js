console.log("function");

//Function
function sayHello(){
  console.log("Hello");
}

sayHello(); //trigger the function

// Functions with parameters
function greet(name){
  console.log("Welcome to the system " + name);
}

greet("Damian");

//Functions that return values

function addNumbers(a,b){
  return a+b;
}

let result = addNumbers(3,5);
console.log(result); 

//Function with default parameters

function greetings(name="Damian"){
  console.log("Hello to " + name);
}

greetings("Damian");

//Function Challenges
//Double Number

function doubleNumber(a){
  let total = a*2;
  console.log(total);
  return total;
}
doubleNumber(4);
doubleNumber(10);

//Combine Names
function combineNames(firstName = "Unknown" , lastName = "Unknown"){
  return firstName + " " + lastName;
}

let studentName = combineNames("Damian","Savage");
console.log(studentName);

//Convert Minutes to Seconds
function convertToSeconds(m){
  let answer = m*60;
  console.log(answer);
  return answer;
}

convertToSeconds(5);
convertToSeconds(10);
convertToSeconds(1);

function sayHello2(){
  let name = prompt("Enter your name: ");
 // document.write("Welcome to the system " + name);
  document.getElementById("result").innerHTML=`<p> Welcome to the system ${name} </p>`;
  //document.getElementById("result").innerHTML="<p> Welcome to the system " + name + "</p>"; 
  //template string
}


