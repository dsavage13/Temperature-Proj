let hungerLevel = 30;
const hungerDisplay = document.getElementById("hungerLevel");

function feedPet(){
  console.log("Feeding the pet");

  
  let foodAmount = 5;
  hungerLevel-=foodAmount;
  //hungerLevel=hungerLevel-foodAmount;

  if(hungerLevel<=0){
    alert("Your pet is full");
    hungerLevel=0;
  }


  hungerDisplay.innerHTML=hungerLevel;
  }

  
  var interval = setInterval(
    function getHungry(){
      if(hungerLevel>=40){
        clearInterval(interval);
        alert("Your pet is starving");
        hungerLevel=40;
    }else if(hungerLevel<40){
      console.log("Getting Hungry");
      let foodAmount = 1;
      hungerLevel+=foodAmount;
    }
    


    hungerDisplay.innerHTML=hungerLevel;
    }, 1000);