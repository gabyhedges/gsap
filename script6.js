//this line of code calls the gsap library and moves the title class which is the text to the right along the x or horizontal axis 500pixels over a duration of 3 seconds
gsap.to(".title" , {x: -500, y: -100, color: "yellow", duration: 3});
// this is the  smily face blinking with growing smile
//first we create variables for each of the lids and the mouth using getElementByID and the ID's we assigned in the html
var lid_top_left = document.getElementById("lid_top_left");
var lid_bottom_left = document.getElementById("lid_bottom_left");
var lid_top_right = document.getElementById("lid_top_right");
var lid_bottom_right = document.getElementById("lid_bottom_right");
var mouth = document.getElementById("mouth");

// this is the function that creates a timeline with 3 animations for blinking the eyes and growing the smile of the smiley face
//The code creates two animations for blinking the eyes: one for the top eyelids and one for the bottom eyelids. The top and bottom eyelids are scaled from 0 to 1 using TweenMax.fromTo(). The transformOrigin is set to "center top" or "center bottom" to ensure that the scaling occurs from the center of the eyelid
//first we create a function named blinking
function blinking() {
  //next we create a variable and assign it to a new timeline with paused as a boolean true value, repeat 1 so it continues, yoyo a boolean value of true so it repeats continuosly, a oncomplemetparameter of itsellf
  var tl = new TimelineMax({
    paused: true,
    repeat: 1,
    yoyo: true,
    onCompleteParams: ["{self}"],
    //when oncomplete is accomplished which means when the animation ends we start a new function
    onComplete: function () {
      // The delayedCall function is scheduling a call to tl.restart after a random delay.The delay is randomly generated between 0.6 and 3.6 seconds.After the delay, the tl.restart function will be called with no arguments, and tl will be the context within that function call. This effectively restarts the animation associated with tl
      TweenLite.delayedCall((3 * Math.random() + 0.6), tl.restart, [], tl);
    }
  });

  // this is the animation for the blinking of the eyelids
  //we assign a variable for the top lid of the eye and create a twen that goes from and to. its arguments are two of the variables we previously assigned lid_top_left and lid_top_right over 0.2 seconds we have scaley first set to 0 so it doesnt show. the transformation will occur on the center top. 
  var lid_top = TweenMax.fromTo([lid_top_left, lid_top_right], 0.2, {
    scaleY: 0,
    transformOrigin: "center top"
  }, {
    //we then change the scaley to 1 so its visible witht the same transform location
    scaleY: 1,
    transformOrigin: "center top"
  });
  //we do exactly the same thing with the bottom eyelid as we did with the top but this time center bottom is used 
  var lid_bottom = TweenMax.fromTo([lid_bottom_left, lid_bottom_right], 0.2, {
    scaleY: 0,
    transformOrigin: "center bottom"
  }, {
    scaleY: 1,
    transformOrigin: "center bottom"
  });

  // this is the animation for growing the smile. we start by creating a variable and assigning it to a new tween with a to value over 0.2 seconds we will scale up 1.7. we set the transform origin to be center so the growth is even accross the smile
  var mouthScaleUp = TweenMax.to(mouth, 0.2, { scale: 1.7, transformOrigin: "center"});
  //next we create a variable to scale down the smile with a new tween and return it to its original state
  var mouthScaleDown = TweenMax.to(mouth, 0.2, { scale: 1 });

  // here we are adding animations to the timeline with a specific order. blinking first
  tl.add([lid_top, lid_bottom]) 
  //then we add the smiling mouth to start just after the blinking starts
    .add(mouthScaleUp, "+=.1") 
    //and to scale down after the blinking completes
    .add(mouthScaleDown, "+=.2");
//this sets the timeline progress to 1 and back to o to initialize it
  tl.progress(1).progress(0); 
//this plays the animation timeline
  tl.play();
//escape for the timleine 
  return tl;
}

// here we are going to run  the blink functions. we make sure the animation runs at next frame to prevent layout trashing
window.requestAnimationFrame(function () {
  //call to the blinking function so it runs
  blinking();
});
