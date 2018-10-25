//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(600, 400);

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  frameRate(30);

  //Preferences for the text (size, and alignment)
  textSize(25);
  textAlign(CENTER);

  fill(219, 209, 219);
  rect(width/2, height/2, 50, 50);
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to dark grey
  background(227, 235, 247);
  //Set the color of the text
  stroke(209, 50, 209, 40)
  strokeWeight(5);
  line(50, 50, 550, 350);
  line(50, 50, 550, 50);
  line(50, 50, 50, 350);
  line(550, 350, 550, 50);
  line(550, 350, 50, 350);
  line(550, 50, 50, 350);

  fill(194, 150, 209, 60);
  stroke(10, 170, 255, 40);
  strokeWeight(10)
  ellipse(300, 200, 160, 160);
  ellipse(300, 200, 140, 140);
  ellipse(300, 200, 120, 120);
  ellipse(300, 200, 100, 100);
  ellipse(300, 200, 80, 80);
  ellipse(300, 200, 60, 60);
  ellipse(300, 200, 40, 40);
  //Set the text message as the frame count
  //Position text in the middle of the screen
  stroke(10, 170, 255, 40);
  strokeWeight(5);
    fill(190, 100, 209);
 text("Frame Counter:  " + frameCount, width/2, height/2-20);
  //Set the text message as the frame rate (round it to an integer)
  //Position text in the middle of the screen
  text("Frame Rate:  " + Math.round(frameRate()), width/2, height/2+20);
  //a circle
  stroke(10, 170, 255, 40);
  strokeWeight(10)
  fill(194, 150, 209);
  ellipse(50, 50, 60, 60);

  fill(194, 150, 209);
  ellipse(550, 350, 60, 60);

  fill(194, 150, 209);
  ellipse(50, 350, 60, 60);

  fill(194, 150, 209);
  ellipse(550, 50, 60, 60);







  //noLoop();
}
