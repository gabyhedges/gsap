//creates a constant variable and assigns it to the title_box class using querySelector 
const title = document.querySelector('.logo');
//creates a constant variable and assigns it to the greensock gsap library then says to location and has one argument the title previously assigned. then we set the yPerecent which is the vertical axis to -50% and repeat it 10 times with no ease
const tween =gsap.to(title, {yPercent: -50, repeat: 20, ease: "none"});
//creates a constant variable and assigns it to the greensock library and again do to location and have the previous tween as an argument. we change the total progress to 1 and a duration of 4 seconds with the power4 ease
const eased =gsap.to(tween, {totalProgress: 1, duration: 4, ease:"power4.inOut"});

// first we create a constant called man and set it to the class of man on our image in the html
const man = document.querySelector('.man');

// the we use GSAP to create the animation
//we create a simple to function that is set to repeat indefinetely (-1) 
gsap.to(man, { repeat: -1,
    //we rotate the image 360 degrees
  rotation: 360,
  //we set the duration of the animation to 2 seconds
  duration: 2,  
  //we use the power2 ease or type of motion for a smooth rotation 
  ease: "power2.inOut" 
});
