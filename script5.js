
//thi line of code calls the gsap library and moves the hidden class which is the span from its location on the y axis or vertical axis by 500 pixels to a new location upwards. the power4 ease is the type of movement
gsap.from(".hidden", 1.5, {y:"500px", color: "red", ease:Power4.easezOut});
//The below code creates a new element with the class "smoke" and appends it to the element with the id "smoke_container". It then calls the tween function, which animates the position of the element.
//first we create a function called animation
function animation() {
  //we create a variable called i and asssign it to 20
    let i = 70;
    //we create a variable that is a constant and asign it to the smoke_container ID which is found using getElementByID selector
    const area = document.getElementById('smoke_container');
  //this while loop is created to make the smoke itself
    while (--i > -1) {
      //we create a constant variable and assign it tot the create elementthat is going to make a div element
      const smoke = document.createElement('div');
      //we give a class name of smoke to what we are creating
      smoke.className = 'smoke';
      //we append the area ID which means we add to thsat ID the smoke we have created
      area.append(smoke);
      //we call the tween with an argument of smoke (the variable we created)
      tween(smoke);
    }
  }
  //we create a function called tween with an argument of e which stands for element. The randomness in the position and duration of the animation is used to create a more realistic smoke effect
  function tween(e) {
    //we create constant varaibles which will confine the smoke to a certain area on the screen 
    const minX = 0;
    const maxX = 10;
    const minY = 0;
    const maxY = 20;
  //here we tell the tween that we want random events manufactured but within the set parameters of space we defined above
    TweenMax.set(e, {
      x: minX + Math.random() * (maxX - minX),
      y: minY + Math.random() * (maxY - minY),
      z: Math.random() * Math.PI * 50
    });
  //here we define the z axis and set to a random value between 0 and 3000. the oncomplete property is set to the tween function which is called when the animation is completed. The onCompleteParams property is set to an array containing the element to be animated.
    TweenMax.to(e, Math.random() * 2, {
      z: 3000,
      onComplete: tween,
      onCompleteParams: [e]
    });
  }
  //here we call the function named animation so it runs
  animation();
  