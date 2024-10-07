document.write("<h2>For Loops</h2>");
//document.write("<h2>Table of 2!</h2>");
//document.write("<p>2x0=0</p>");
//document.write("<p>2x1=2</p>");
//document.write("<p>2x2=4</p>");
//document.write("<p>2x3=6</p>");
//document.write("<p>2x4=8</p>");
//document.write("<p>2x5=10</p>");
//document.write("<p>2x6=12</p>");
//document.write("<p>2x7=14</p>");
//document.write("<p>2x8=16</p>");
//document.write("<p>2x9=18</p>");
//document.write("<p>2x10=20</p>");

//The For Loop: for(starting_value; stopping_value; interval);
// index++ = Index + 1

  for(let i=0; i<=10; i++){
    let result = 2*i;
    document.write(`<p> 2 x ${i} = ${result} </p>`);
  }

function challenge(){
  for(let i=1; i<=100; i++){
    if(i == 50){
      console.log("I found it");
    }else{
      console.log(i);
    }
  }
}
//challenge()

let number = prompt("Enter the number of the table you want to display");
function multiTable(num){
  document.write(`Multiplication table of ${num}`);
  for(let i=0; i<=10; i++){
    let result = num*i;
    document.write(`<p>${num} x ${i} = ${result}</p>`)
  }
}
multiTable(number) 

