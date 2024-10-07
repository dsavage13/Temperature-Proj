console.log("If Satetement File");

// If Statements
// if(condition){
// code to be executed if condition is true
//}

if(3>7){
  console.log("I am inside the if statement");
}

let studentAge=35;
let StudentAge2=35;

if(studentAge == StudentAge2){
  console.log("Both are the same");
}

// If-Else Statement
// if(condition){
//  Code to be executed if condition is true
// }else{
//  code to be executed if condition is false
//}

if("Samantha" == "Jesus"){
  console.log("Sam is equal to jesus");
}else{
  console.log("Sam is different than jesus");
}

//Challenge:
// check if age is greather than 21
// display "you are an adult"
// display "you are underage"
let Age= 21;

if(Age>=21){
  console.log("You are an adult");
}else{
  console.log("You are underage");
}

// if-else if-else statements
// if(condition){
// code to be executed if condition 1 is true
//}else if(condition2){
// code to be executed if condition 2 is true but one is false
//}else{
// code to be executed if all conditions are false
//}

age = 25;

if(age<13){
  console.log("Child");
}else if(age<20){
  console.log("Teenager");
}else if(age<64){
  console.log("Adult");
}else{
  console.log("Senior");
}

function ticket(){
  let price = prompt("What is your age?");

  if (price<12){
    console.log("Ticket Price: $5.00");
  }else if(price<18){
    console.log("Ticket Price: $8.00");
  }else{
    console.log("Ticket Price: $10.00")
  }
}

function dress(){ //Tossing these inside a button just for ease of practice
  let temp = prompt("What temperature is it?");

  if (temp<=15){
    console.log("It's cold outside, you should wear a sweater");
  }else if(temp<25){
    console.log("It's a little chilly, you can get away with a sweatshirt");
  }else{
    console.log("Suns out guns out!")
  }
}

// Using logical AND operator &&
age = 16;

if(age<13){
  console.log("child");
}else if(age>=13 && age<=19){
  console.log("teenager");
}else if(age>=20 && age<=64){
  console.log("adult");
}else{
  console.log("senior");
}


