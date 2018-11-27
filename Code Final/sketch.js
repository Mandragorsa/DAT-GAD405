//DAT405 / GAD405
//S1-00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

var t;
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console

  createCanvas(800,800);
  background(255)
  noFill();
  t = 0;

}


//function mousePressed() {
  //  stroke(random(255), random(255), random(255));
//}


//Draws line to follow movement of mouse by tracing position.
//A left mouse click clears the canvas, whilst while drawing,
//the colour value changes constantly to a random value on the RGB spectrum.
function draw() {
  if (mouseIsPressed){
  clear();
  }
  else {
  stroke(random(255), random(255), random(255));
  }
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 200; i++) {
    var ang = map(i, 0, 200, 0, TWO_PI);
    var rad = 200 * noise(i * 0.01, t * 5);
    var x = mouseX * cos(ang);
    var y = mouseY * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t +=1;


  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console

}
