let teamone_numshots = document.querySelector ("#teamone-numshots");
let teamone_numgoals = document.querySelector ("#teamone-numgoals");
let teamone_shoot_button = document.querySelector ("#teamone-shoot-button");
let teamtwo_numshots = document.querySelector ("#teamtwo-numshots");
let teamtwo_numgoals = document.querySelector ("#teamtwo-numgoals");
let teamtwo_shoot_button = document.querySelector ("#teamtwo-shoot-button");
let reset_button = document.querySelector ("#reset-button");
let num_resets = document.querySelector ("#num-resets");

teamone_shoot_button.addEventListener("click", function(){
    console.log ("shot for team one")
    
   document.getElementById("teamone-shoot-button").innerHTML=Math.floor(Math.random() * 4);

})

teamtwo_shoot_button.addEventListener("click", function(){
    console.log ("shot for team two")
    
   document.getElementById("teamtwo-shoot-button").innerHTML=Math.floor(Math.random() * 4);

})