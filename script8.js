// this is a program that creats a particle emitter where particles fly out from it and disappear
//first we  create a variable called emitter and assign it to the ID of the object in html called emitter using querySelector
var emitter = document.querySelector("#emitter"),
//next we set up the variables to do with that emitter. its size as displayed on the screen, an empty list for the dots, start the dot index to 0, the quantity of dots in this case 2000, the minimum and maximum size of the dots appearing, the speed we wish them to move at and to take gravity into effect
    emitterSize = 500,
    dotPool = [],
    dotIndex = 0,
    dotQuantity = 2000,
    dotSizeMax = 30,
    dotSizeMin = 10,
    speed = 1,
    gravity = 1;
//next we call on the gsap (greensock) library and set the width of the emitter to be a variable (set in the original varaible) the height as the same (so its round) and we center it with xpercent and ypercent both set to -50 so its in the middle of the screen 
gsap.set(emitter, { width: emitterSize, height: emitterSize, xPercent: -50, yPercent: -50 });

//here is the loop so that the dots are emitted. we use a for loop and assign i to equal the quantity we set earlier, while i is greater than 0 and minus one i each loop. this runs until the 2000 are exhausted
for (var i = dotQuantity - 1; i >= 0; i--) {
    //we create a variable called dot and we call upon it to create the element div
    var dot = document.createElement("div");
    //we give the dot a class name of dot
    dot.className = "dot";
    //here we use the set method to position the dot within its parent element using xpercent and ypercent again. the force#D iss set to a boolean true so that #D effects are forced on the dot element
    gsap.set(dot, { xPercent: -50, yPercent: -50, force3D: true });
    //here we append or add the dot to the emitter using appendChild
    document.body.appendChild(dot);
    //here we add the dot to the dot pool so that it can be reused later
    dotPool[i] = dot;
}
// we create a variable called explosio9n and assign it to the greensock library (GSAP) timeline we create. it is set it repeat -1 which means it will continue to run
var explosion = gsap.timeline({ repeat: -1 });

// here we call the shootout function at regular intervals so it runs. the null allows for the function to run in a global scope. the 2/dotquantity refers to the calculation of the interval with dotquantity being defined earlier as 2000
explosion.call(shootDot, [emitter], null, 2 / dotQuantity);

//this the function created called shootout with emitter as the argument. it creats the dots themselves
function shootDot(emitter) {
    //first we create a number of variables and assign them to the bounding rectangle of the emitter using getBoundingClientRect. remember that while it looks like a circle on the screen it started out as a rectangle.
    var angle, length, dot, i, size, bounds = emitter.getBoundingClientRect();
    //here we set the dot index to the index of the first dot in the dot pool and then we set the dot to the first dot in the dot pool. we then set the size of the dot to a random number between the minimum and maximum size of the dots. we then set the angle of the dot to a random number between 0 and 2 pi. we then set the length of the dot to a random number between 0 and half of the emitter size 
    dot = dotPool[dotIndex++];
    if (dotIndex === dotQuantity) dotIndex = 0;
    size = getRandom(dotSizeMin, dotSizeMax);
    angle = Math.random() * Math.PI * 2;
    length = Math.random() * (emitterSize / 2);
    //here we set the position of the dot using the cosine and sine of the angle and the length of the dot. we then set the width and height of the dot to the size of the dot. we then set the opacity of the dot to 1. we then set the position of the dot using the cosine and sine of the angle and the length of the dot. we then set the width and height of the dot to the size of the dot
    gsap.set(dot, {
        opacity: 1,
        x: Math.cos(angle) * length + bounds.left + bounds.width / 2,
        y: Math.sin(angle) * length + bounds.top + bounds.height / 2,
        width: size,
        height: size
    });
    //here we set the duration of the to 1 plus a random number between 0 and 1. we set the opacity to 0 of the dot so it disappears from the viewport. we then set the difining parameters that simulate the @D physics behaviour for the dots in the animation including their initial angle of motion, velocity, and the strength of gravity acting upon them. the angle is calculated using the Math function of PI so they are diverse. the velocity is set to a random number so they move at different speeds and the gravity calculates the gravitational force by multiplying 500 which theorectically is the strength of the gravitational force by the gravity variable
    gsap.to(dot, {
        duration: 1 + Math.random(),
        opacity: 0,
        physics2D: {
            angle: angle * 180 / Math.PI,
            velocity: (100 + Math.random() * 250) * speed,
            gravity: 500 * gravity
        }
    });
}
//we then create a function called getRandom which will generate a random number between the minimum and maximum variables and returns that value. it does this by first generating a random number between 0 and 1  using the Math random function, and then multiplying it by the difference between the maximum and minimum values. the result is then added to the minimum value to get a number between the minimum and maximum values 
function getRandom(min, max) {
    return min + Math.random() * (max - min);
}
//this is the part of the code that makes the circle draggable on the screen. we included the draggable cdn in the html section so this was possible. we create a new draggable by assigning it to the ID of the emitter. the throwProps is set to a boolean true so that when the user releases the draggable element in this case the emitter it will continue on its trajectory motion. we keep it within the bounds of the window so we don't lose it. the edgeResistance is set to a moderate level so when the emitter reaches the edges of the bounding window it slows and can't go further
Draggable.create("#emitter", {
    throwProps: true,
    bounds: window,
    edgeResistance: 0.7
});
