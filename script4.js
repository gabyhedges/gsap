//this line of code calls the gsap library and targets the title class which is the text and moves it to a location 980 pixels to the right on the horizontal x plane over a duration of 5 seconds
gsap.to(".title", {x: 200, duration: 5});

//this  is a function that is being used to create a draggable element . the onDrag function is responsible for calculating the x position of the element and sets a clip path on a different element to clip the element out of view based on its x position. it bounds or stops the dragger from exiting the gallery element
Draggable.create(".dragger", {type: "x", 
bounds: ".gallery",
//first we creat the onDrag function which uses the gsap.getProperty() method to get the x position of the element and the gsap.set() method to set a clip path on a different element. The clip path is set using a CSS clip-path property and an inset() function to clip the element out of view based on its x position.
onDrag: function() {
    //we create a variable that sets x to the value of the size of the picture  element
    let x = 950 - gsap.getProperty(this.target, "x")
    //the clipped class is set using the greensock library and the clip path is set to the value of x along the right value
    gsap.set(".clipped", {clipPath: `inset(0px ${x}px 0px 0px)`})
}
})