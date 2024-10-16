var randomnumber1 = Math.floor(Math.random()*6)+1;//1-6 random number

var randomdiceimage = "dice" + randomnumber1 + ".png";//will take images from dice1.png to dice6.png

var randomdimagesource = "images/" + randomdiceimage;//for selecting images/dice.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdimagesource);
//
//
//
//
//
var randomnumber2 = Math.floor(Math.random()*6)+1;//1-6 random numebr

var randomdiceimage2 = "dice" + randomnumber2 + ".png";//will take images from dice1.png to dice6.png

var randomdimagesource2 = "images/" + randomdiceimage2;//for selecting images/dice.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdimagesource2);
//
//
//
//
if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "😀PLAYER 1 wins this with ease";
 }
else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "PLAYER 2 wins this with ease😁";
 }
 else{
    document.querySelector("h1").innerHTML = "OPPS Its a draw swwy🤫 mate";
 }
 
 