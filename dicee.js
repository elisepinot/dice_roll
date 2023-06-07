var randomNumber1 = Math.floor(Math.random()*6)+1;
var img1 = document.querySelector(".img1");
img1.setAttribute("src", `images/dice${randomNumber1}.png`);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var img2 = document.querySelector(".img2");
img2.setAttribute("src", `images/dice${randomNumber2}.png`);


var winner = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    winner.textContent = "👏🏼 Le joueur 1 a gagné ! "
}else if(randomNumber1 < randomNumber2){
    winner.textContent = "Le joueur 2 a gagné ! 👏🏼"
}else{
    winner.textContent = "Egalité !"
}

var letsPlay = document.querySelector("button");
letsPlay.addEventListener("click", function(){
    location.reload();
})