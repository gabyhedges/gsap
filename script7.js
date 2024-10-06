//this line of code calls the gsap library and targets the title class which is the text and moves it to a location 980 pixels to the right on the horizontal x plane over a duration of 5 seconds
gsap.to(".title", {x: 980, duration: 5, color: "blue"});
//this code creats an animation of stars
//a function is created called animation 
  function animation() {
    //a variable i is set to equal 500
    i = 500,
    //a variable star is created with an empty list
      stars = [];
//this is a while loop that runs through the stars array 
//while i is greater than -1
    while (--i > -1) {
        //this line of code creates the stars with createElement with an argument of div
      star = document.createElement('div');
      //this assigns the star to class name of star 
      star.className = 'star';
      //the element with the id of space is added to with the star element
      space.append(star);
      //this is the tween element with the star argument
      tween(star);
    }
  }
  
  //this is another function created called tween with an argument e which stands for element
  function tween(e) {
    //we are using the tweenMax property with the argument of e the eleement
    TweenMax.set(e, {
        //we are creating at the x coordinate of the window and caalling it to be a randomly generated position
        x: Math.random() * $(window).width(),
        //we are creating at the y coordinate of the window and caalling it to be a randomly generated position
        y: Math.random() * $(window).height(),
        //we are creating at the z coordinate of the window and caalling it to be a randomly generated position using math Pi 
        z: Math.random() * Math.PI * 1000
      });
      //we are using the to method of the tweenMax library with arguments of e the element and the random generation function
      TweenMax.to(e, Math.random() * 2, {
        //this sets the z cordinate to a random value between 0 and 3000
        z: 3000,
        //this repeats the tween so it continues
        onComplete:tween,
       //this repeats the tween so it continues 
        onCompleteParams:[e]
        // Generate random color using hex format
      
      });
  }
  
  
  
  //this is the function call so the function runs
  animation();

// first we create the variables and assign them to the classes created in the images in the html
var ship1 = $(".ship1");
var ship2 = $(".ship2");
var ship3 = $(".ship3");

// then we et all ships initially invisible using the greensock library
gsap.set([ship1, ship2, ship3], { visibility: "hidden" });

// Ship1 animation
//we set the ship to a right position with transformOrigin and rotate it -20 degrees
gsap.set(ship1, { transformOrigin: "right center", rotation: -20 });
//we set the timeline for the ship and continuously loop through it. when the animation is completed the fiunction runs
var tlShip1 = gsap.timeline({ repeat: -1, repeatDelay: 0, onComplete: function() {
  //this resets the  ship1's position before each iteration
  gsap.set(ship1, { xPercent: 500, y: 0 }); 
}});
//this moves the ship along a diasgonal line to the height of the window over a duration of 3 seconds. because we want a smooth path there is no ease
tlShip1.fromTo(ship1, {
  xPercent: 500,
  y: 0
}, {
  xPercent: -300,
  y: window.innerHeight,
  duration: 3,
  ease: "none",
  //we set onStart to a function that makes the previously hidden ship visible
  onStart: function() {
    gsap.set(ship1, { visibility: "visible" }); 
  }
});

// Ship2 animation
//this time we set the origin to the top left but still rotate it -20 degrees
gsap.set(ship2, { transformOrigin: "left center", rotation: -20 });
//we set the timeline for the ship and continuously loop through it. when the animation is completed the fiunction runs
var tlShip2 = gsap.timeline({ repeat: -1, repeatDelay: 0, onComplete: function() {
  //this resets the ships position before each iteration
  gsap.set(ship2, { xPercent: 0, y: 0 }); 
}});
//this moves the ship along a diasgonal line to the height of the window over a duration of 3 seconds.this time in a left to right line. because we want a smooth path there is no ease
tlShip2.fromTo(ship2, {
  xPercent: 0,
  y: 0
}, {
  xPercent: 500,
  y: window.innerHeight,
  duration: 3,
  ease: "none",

  // this sets the  ship2 to be  visible before animation starts
  onStart: function() {
    gsap.set(ship2, { visibility: "visible" }); 
  }
});

// Ship3 animation
//this sets the position of the third ship to the center and rotates it this time positive 20 degrees
gsap.set(ship3, { transformOrigin: "center", rotation: 20 });

//we set the timeline for the ship and continuously loop through it. when the animation is completed the fiunction runs
var tlShip3 = gsap.timeline({ repeat: -1, repeatDelay: 0, onComplete: function() {
  //this resets the ships position before each iteration
  gsap.set(ship3, { y: 100 }); 
}});

//this moves the ship along a diasgonal line to the height of the window over a duration of 2 seconds.this time in the y axis or downwards. because we want a smooth path there is no ease
tlShip3.fromTo(ship3, {
  y: 100
}, {
  y: window.innerHeight,
  duration: 2,
  ease: "none",
  //we set onStart to a function that makes the previously hidden ship visible
  onStart: function() {
    gsap.set(ship3, { visibility: "visible" }); 
  }
});

// Create a master timeline to play each ship's animation sequentially with initial delays that will repeat endlessly
var masterTimeline = gsap.timeline({ repeat: -1 });
//we add each ship to the master timeline and then start the animation after a delay 
masterTimeline.add(tlShip1)
//this starts ship2 after ship1 finishes
              .add(tlShip2, tlShip1.duration()) 
              // this starts the  ship3 animation after the ship2 animation
              .add(tlShip3, "+=3"); 
