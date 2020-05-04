
const resetButton = document.querySelector("#reset-button");
const teamOneshots  = document.querySelector("#teamone-shoot-button");
const teamone_numshots = document.querySelector("#teamone-numshots");
const teamone_numgoals = document.querySelector("#teamone-numgoals");
const teamtwo_numshots = document.querySelector("#teamtwo-numshots");
const teamTwoshots = document.querySelector("#teamtwo-shoot-button");
const teamtwo_numgoals = document.querySelector("#teamtwo-numgoals");
let reset =  document.querySelector("#num-resets"); 
let teamonecount1= 0;
let teamonegoal=0;
let teamtwocount1=0;
let teamtwogoal=0;
let number_of_resets= 0;



resetButton.addEventListener("click", function(){
      console.log("reset");
      teamone_numshots.innerHTML =  teamonecount1 = 0;
      teamtwo_numshots.innerHTML =  teamtwocount1 = 0;
      teamone_numgoals.innerHTML = teamonegoal = 0;
      teamtwo_numgoals.innerHTML = teamtwogoal = 0;
      reset.innerHTML =  number_of_resets +=1;
    })

      teamOneshots.addEventListener("click", function () {
      console.log("teamone-shoot-button")
      teamone_numshots.innerHTML =  teamonecount1 += 1; 
      let random =Math.floor(Math.random()*10);
      if (random>5) {
      teamonegoal+=1
      teamone_numgoals.innerHTML= teamonegoal;
     }
    })
  

    teamTwoshots.addEventListener("click", function(){
      console.log("teamtwo-shoot-button");
      teamtwo_numshots.innerHTML =  teamtwocount1 += 1;
      let random =Math.floor(Math.random()*10);
      if (random>5) {
      teamtwogoal+=1
      teamtwo_numgoals.innerHTML= teamtwogoal;
     }
     
})



//let  Math.floor(Math.random()*10)=  if (5 > 0) {
  //  return "+ 1";
  //} else {
    //return "0";
//let randomnum=  if (5 > 0) { //  return "+ 1";
  //} else {return "0"; }
  
//let team_2_goal =
//let number_of_reset =0

    
 




  
  
