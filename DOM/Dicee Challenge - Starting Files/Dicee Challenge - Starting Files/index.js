var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImg1 = "dice"+randomNumber1+".png";
  
var randomImgSrc1 = "images/" +randomDiceImg1;

var randomNumber2 = Math.floor(Math.random()*6)+1;
  
var randomImgSrc2 = "images/dice"+randomNumber2+".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImgSrc1);

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",randomImgSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw"
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}

function refreshClick(){
    location.reload();
}