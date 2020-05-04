let teamone_numshots = document.querySelector ("#teamone-numshots");
let teamone_numgoals = document.querySelector ("#teamone-numgoals");
let teamone_shoot_button = document.querySelector ("#teamone-shoot-button");
let teamtwo_numshots = document.querySelector ("#teamtwo-numshots");
let teamtwo_numgoals = document.querySelector ("#teamtwo-numgoals");
let teamtwo_shoot_button = document.querySelector ("#teamtwo-shoot-button");
let reset_button = document.querySelector ("#reset-button");
let num_resets = document.querySelector ("#num-resets");
let count = 1;


teamone_shoot_button.addEventListener("click",      function(){
    console.log (" shots for team one")
    
   let newTeamone_numshotsValue = Number(teamone_numshots.innerHTML) + 1;

   teamone_numshots.innerHTML = newTeamone_numshotsValue;
   
  document.getElementById("teamone-numshots").innerHTML=Math.floor(Math.random() * 4);


let newteamone_numgoalsValue = Number (teamone_numgoals.innerHTML);

teamone_numgoals.innerHTML = newteamone_numgoalsValue;

if (teamone_numshots.innerHTML > 0) {teamone_numgoals.innerHTML = newteamone_numgoalsValue + 1;
}
})


/*reset_button.addEventListener("click", 
function() {
console.log (" resets have occurred");
reset_button.innerHTML = + 1;
})*/