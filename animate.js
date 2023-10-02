function fadeElementInAndOut(elementId) {
    var element = document.getElementById(elementId);
     element.style.opacity = 1;

    setTimeout(function() {
        element.style.opacity = 0;
    }, 2500);

    setTimeout(function() {
        element.style.opacity = 0;
    }, 1227000);
}
const elementToAnimate = document.getElementById("headline1");
const animationDuration = 2000; 
const animationInterval = 3000; 

function animateLeft() {
elementToAnimate.style.transition = `right ${animationDuration / 4}ms ease-in`;
elementToAnimate.style.left = "120px";
setTimeout(() => {
elementToAnimate.style.transition = `left ${animationDuration / 2}ms ease-out`;
elementToAnimate.style.left = "350px";
  }, animationDuration / 5);
}
window.onload = function() {
    fadeElementInAndOut("girl");
    fadeElementInAndOut("headline1");
    animateLeft();
};
