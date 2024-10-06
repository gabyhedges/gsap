//this line of code calls the gsap library and moves the title class which is the text to the right along the x or horizontal axis 500pixels over a duration of 3 seconds
gsap.to(".title" , {x: 500, duration: 3});
// create a variable ball and assign it to the id of ball using jquery
var ball = $("#ball");

// create a variable shadow and assign it to the id of shadow using jquery
var shadow = $("#shadow");

// define the easing function for the animation
var ease = Circ.easeIn; 

// Create a GSAP timeline object
var tl = gsap.timeline({
  // Makes the animation repeat infinitely   play forwards and backwards which is the (yoyo: true)
  repeat: -1,
  //play forwards and backwards which is the 
  yoyo: true
});

//add a label "start" to the timeline for reference
tl.add("start");

//animate the ball element for 0.5 seconds
tl.to(ball, .50, {
  //move the ball 100 pixels down the y-axis this gives the vertical movement
  y: 100,
  //this is the ease function for the animation These functions control the speed and tempo of an animation over a given time interval
  ease: ease
})
//here we chain another animation to the timeline, starting 0.05 seconds before the previous one ends
.to(ball, .10, {
  //this squashes the ball vertically by setting scaleY to 0.6 so the bouncing looks real
  scaleY: 1.2,
  //this is where we set the transform origin to "center bottom" for squash effect which means that the ball will squash at its bottom plane
  transformOrigin: "center bottom",
  //this is the ease function for the animation These functions control the speed and tempo of an animation over a given time interval
  ease: ease
}, "-=.05")
//this animates the shadow element for 0.5 seconds, starting at the same time as "start" label so they appear together
.to(shadow, .5, {
  //this increases the width of the shadow to 50 pixels so it looks like the ball is getting closer
  width: 50,
  //this sets the opacity of the shadow to 0.7
  opacity: 0.7,
  //this is the ease function for the animation These functions control the speed and tempo of an animation over a given time interval
  ease: ease
  //this creates the specific animation sequence within the GSAP timeline and coordinates it with the start listed above
}, "start");
// Create a Draggable instance for the ball

