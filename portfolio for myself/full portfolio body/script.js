// JavaScript for a typewriter effect
const introText = "Welcome to my portfolio. I'm a web developer.";
const introElement = document.querySelector("#about p");

let charIndex = 0;

function typeWriter() {
    if (charIndex < introText.length) {
        introElement.innerHTML += introText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); // Adjust the typing speed (milliseconds) here
    }
}

typeWriter();

//javascript for animmation
/*$("button").click(function(){
    $(document).slideToggle().animate({margin: 30 }).animate({opacity: 0.5});
});*/

$("h1").css("color","#6b5b95");

