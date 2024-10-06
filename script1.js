// This is an animation that moves the title into position as well as blows up a balloon by changing the scale and rotating it
// First, we create a GreenSock timeline with a variable and set it to repeat indefinitely (-1)
var tl = gsap.timeline({ repeat: -1 });

//next we create a variable for the shadow and set it to the ID of the shadow from the html
var shadow = $("#shadow");

// here we add a label to the animation so later we can co ordinate the two effects
tl.add("start");

// this is the animation to move the title downwards in the y axis over 5 seconds duration
tl.to(".title", { y: 900, duration: 5, color: "#000", opacity:.5});

// Then we target the balloon class and scale it by 1.2 times its size over a duration of 2 seconds using the ease or motion of power2. It is timed to start immediately; this is the initial inflation timed to start immediately
tl.to(".balloon", { scale: 1.2, duration: 1.5, ease: "power2.inOut" }, "<"); 
//next we start the shadow animation to increase its width in keeping with the balloon inflation. we start it so it co ordinates with the balloon animation
tl.to(shadow, { duration: 2, transform: "translateY(0px)", width: 100 }, "start+=0.5");
  // Next, we increase the scale again on the same class of balloon a further 1.3 scale so it is 2.5 scale of the original. This time using bounce.out ease or motion. This gives the bounce effect timed to start 1.5 seconds after the previous one. we maintain some overlap with the previous animation
tl.to(".balloon", { scale: 2.5, duration: 2, ease: "bounce.out" }, "-=1"); 
//again it is the shadows turn to animate and get a little bigger by increasing its width over 2.5 second duration using the power2 ease or type of motion
tl.to(shadow, { duration: 2.5, width: 200, ease: "power2.inOut" }, "-=2"); 
// We target the same class of balloon, and this time increase its scale by a further 2.5 over 2 seconds using the bounce.out ease or motion to create the bouncy effect. Timed to start 1 second after the previous one. we increase the overlap for a smoother transition
tl.to(".balloon", { scale: 5, duration: 2, ease: "bounce.out" }, "-=1.5"); 
//again it is the shadows turn to animate and get a little bigger by increasing its width over 2 second duration using the power2 ease or type of motion
tl.to(shadow, { duration: 2, width: 300, ease: "power2.inOut" }, "-=2"); 
  // We target the same class of balloon, and this time increase its scale by a further 5 over 2 seconds using the bounce.out ease or motion to create the bouncy effect. Timed to start 0.7 seconds after the previous one. the overlap is increased again to improve the smoothness of the animation
tl.to(".balloon", { scale: 10, duration: 2, ease: "bounce.out" }, "-=1.5"); 
  //again it is the shadows turn to animate and get a little bigger by increasing its width over 1.5 seconds duration using the power2 ease or type of motion
tl.to(shadow, { duration: 1.5, width: 400, ease: "power2.inOut" }, "-=2"); 
 // We target the same element again and increase its scale or size to 15 with a duration of 2 seconds. But this time we use the ease of elastic out for a different effect. This is the final inflation timed to start 0.5 seconds after the previous one. the overlap is the same
tl.to(".balloon", { scale: 15, duration: 2, ease: "elastic.out" }, "-=1.5"); 
//again we target the shadow variable and increase its width over a 1 second duration. this time we use the elastic out ease or type of motion
tl.to(shadow, { duration: 1, width: 500, ease: "elastic.out" }, "-=2"); 
   // Now we are targeting the same image element, but this time we are rotating it a full 360 degrees to the right over a 3-second duration with the power2 ease or motion. This gives the spin effect timed to start 1 second after the previous one
tl.to(".balloon", { rotation: 360, duration: 3, ease: "power2.inOut" }, "-=1"); 
// This targets the same element image and changes its opacity to zero so it fades out over 1 second with an ease or motion effect given by the power2 ease. Timed to start half a second after the previous one
tl.to(".balloon", { opacity: 0, duration: 1, ease: "power2.inOut" }, "-=0.5");
//this fades out the shadow as the balloon disappears by decreasing its opacity to zero over a 5 second duration
tl.to(shadow, { duration: 5, opacity: 0 }, "-=4"); 

 

