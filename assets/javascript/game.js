let teamone_numshots = document.querySelector ("#teamone-numshots");
let teamone_numgoals = document.querySelector ("#teamone-numgoals");
let teamone_shoot_button = document.querySelector ("#teamone-shoot-button");
let teamtwo_numshots = document.querySelector ("#teamtwo-numshots");
let teamtwo_numgoals = document.querySelector ("#teamtwo-numgoals");
let teamtwo_shoot_button = document.querySelector ("#teamtwo-shoot-button");
let reset_button = document.querySelector ("#reset-button");
let num_resets = document.querySelector ("#num-resets");


teamone_shoot_button.addEventListener("click",      function(){
    console.log (" shots for Team Shorts")
       
let newTeamone_numshotsValue = Number(teamone_numshots.innerHTML) + 1;

teamone_numshots.innerHTML = newTeamone_numshotsValue;
   
let random = Math.random() *2;


let newteamone_numgoalsValue = Number (teamone_numgoals.innerHTML);

teamone_numgoals.innerHTML = newteamone_numgoalsValue;

if (random > 1) {teamone_numgoals.innerHTML = newteamone_numgoalsValue + 1;
}
})

teamtwo_shoot_button.addEventListener("click",      function(){
   console.log (" shots for Team Capris")
   
let newTeamtwo_numshotsValue = Number(teamtwo_numshots.innerHTML) + 1;

teamtwo_numshots.innerHTML = newTeamtwo_numshotsValue;
  
let random = Math.random() * 2;

let newteamtwo_numgoalsValue = Number (teamtwo_numgoals.innerHTML);

teamtwo_numgoals.innerHTML = newteamtwo_numgoalsValue;

if (random > 1) {teamtwo_numgoals.innerHTML = newteamtwo_numgoalsValue + 1;
}
})

reset_button.addEventListener("click", 
function() {
console.log (" resets have occurred");

let newNum_resetsValue = Number(num_resets.innerHTML);

num_resets.innerHTML = newNum_resetsValue + 1;

if (newNum_resetsValue = 1) {
    teamone_numshots.innerHTML = 0;
    teamone_numgoals.innerHTML = 0
    teamtwo_numshots.innerHTML = 0;
    teamtwo_numgoals.innerHTML = 0;
}

})