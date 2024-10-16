for(var i = 0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);//here we are passing the name of the function and not the function if we straight away call the function as handleclick() then it will straight away call the funtion and not wait forr it to get clickedd like it should do NB
    function handleclick(){
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);


}
document.addEventListener("keypress",function(event){makesound(event.key)});
function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
            case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            default: console.log(buttonInnerHTML);


    }
}

}







