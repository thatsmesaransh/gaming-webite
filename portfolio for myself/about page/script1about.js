// script.js

$(document).ready(function() {
    const elements = $(".fade-in");

    elements.each(function(index) {
        setTimeout(() => {
            $(this).css("animation", "none");
        }, index * 300); // Delay the animations for each element
    });

    // Define the time after which the animations should stop (in milliseconds)
    const stopAnimationAfter = 5000; // 5000 milliseconds = 5 seconds

    setTimeout(() => {
        elements.css("animation", "none");
    }, stopAnimationAfter);
});
