//this triggers the function that animates the title once the page loads
document.addEventListener("DOMContentLoaded", function() {
    
    //it moves the element to the right by 200 pixels 
    gsap.to(".title", {
        x: 200, 
        //this occurs over a duration of 5 seconds
        duration: 5, 
        //this occurs over a ease of bounce.inOut
        ease: "bounce.inOut" 

    });
});


//create a new draggable from the gsap library that works on the class of dragger only moving in the x or horizontal axis and is kept within the bounds of the class gallery 
Draggable.create(".dragger", {type: "x", 
bounds: ".gallery",
//The onDrag function is triggered whenever the draggable element is being dragged, and it uses the gsap.getProperty() method to get the current x-position of the draggable element and subtracts it from a fixed value (640 in this case). 
onDrag: function() {
    let x = 950 - gsap.getProperty(this.target, "x")
    //This value is then used to set the clip-path of a.clipped element, which clips the content of that element to the left by the calculated value
    gsap.set(".clipped", {clipPath: `inset(0px ${x}px 0px 0px)`})
}
})