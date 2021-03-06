//DAT405 / GAD405
//S2-04_Mario

//Set variables
var newColor = 3;
//Set up and background colour, creating canvaas to display on
function setup(){
  createCanvas(420, 460);
  background(170, 170, 200);
  frameRate(1);
  noStroke();
}

function draw(){
//hat
  fill(253,10, 40)
  rect(30, 0, 10, 10);
  rect(40, 0, 10, 10);
  rect(50, 0, 10, 10);
  rect(60, 0, 10, 10);
  rect(70, 0, 10, 10);
  rect(20, 10, 10, 10);
  rect(30, 10, 10, 10);
  rect(40, 10, 10, 10);
  rect(50, 10, 10, 10);
  rect(60, 10, 10, 10);
  rect(70, 10, 10, 10);
  rect(80, 10, 10, 10);
  rect(90, 10, 10, 10);
  rect(100, 10, 10, 10);

  //Hair: 128, 4, 4
  fill(255, 213, 0);
  rect(20, 20, 10, 10);
  rect(30, 20, 10, 10);
  rect(40, 20, 10, 10);
  rect(30, 30, 10, 10);
  rect(30, 40, 10, 10);
  rect(40, 40, 10, 10);
  rect(10, 30, 10, 10);
  rect(10, 40, 10, 10);
  rect(10, 50, 10, 10);
  rect(20, 50, 10, 10);

  //Face
  fill(253, 207, 148)
  rect(20, 30, 10, 10);
  rect(20, 40, 10, 10);
  rect(50, 20, 10, 10);
  rect(60, 20, 10, 10);
  rect(80, 20, 10, 10);
  rect(40, 30, 10, 10);
  rect(50, 30, 10, 10);
  rect(60, 30, 10, 10);
  rect(80, 30, 10, 10);
  rect(90, 30, 10, 10);
  rect(100, 30, 10, 10);
  rect(50, 40, 10, 10);
  rect(60, 40, 10, 10);
  rect(70, 40, 10, 10);
  rect(90, 40, 10, 10);
  rect(100, 40, 10, 10);
  rect(110, 40, 10, 10);
  rect(30, 50, 10, 10);
  rect(40, 50, 10, 10);
  rect(50, 50, 10, 10);
  rect(60, 50, 10, 10);
  rect(30, 60, 10, 10);
  rect(40, 60, 10, 10);
  rect(50, 60, 10, 10);
  rect(60, 60, 10, 10);
  rect(70, 60, 10, 10);
  rect(80, 60, 10, 10);
  rect(90, 60, 10, 10);
  rect(100, 60, 10, 10);

  //Eyes, Mustache: 110, 102, 27
  fill(20, 0, 10);
  rect(70, 20, 10, 10);
  rect(70, 30, 10, 10);
  rect(80, 40, 10, 10);
  rect(70, 50, 10, 10);
  rect(80, 50, 10, 10);
  rect(90, 50, 10, 10);
  rect(100, 50, 10, 10);

  //Blouse: 255, 18, 21

  rect(30, 70, 10, 10);
  rect(50, 70, 10, 10);
  rect(60, 70, 10, 10);
  rect(70, 70, 10, 10);
  rect(10, 80, 10, 10);
  rect(20, 80, 10, 10);
  rect(30, 80, 10, 10);
  rect(50, 80, 10, 10);
  rect(60, 80, 10, 10);
  rect(80, 80, 10, 10);
  rect(90, 80, 10, 10);
  rect(100, 80, 10, 10);
  rect(0, 90, 10, 10);
  rect(10, 90, 10, 10);
  rect(20, 90, 10, 10);
  rect(30, 90, 10, 10);
  rect(80, 90, 10, 10);
  rect(90, 90, 10, 10);
  rect(100, 90, 10, 10);
  rect(110, 90, 10, 10);
  rect(20, 100, 10, 10);
  rect(90, 100, 10, 10);

  //Trousers: 30, 57, 246
  fill(255, 10, 20);
  rect(40, 70, 10, 10);
  rect(40, 80, 10, 10);
  rect(70, 70, 10, 10);
  rect(70, 80, 10, 10);
  rect(40, 90, 10, 10);
  rect(50, 90, 10, 10);
  rect(60, 90, 10, 10);
  rect(70, 90, 10, 10);
  rect(30, 100, 10, 10);
  rect(50, 100, 10, 10);
  rect(60, 100, 10, 10);
  rect(80, 100, 10, 10);
  rect(30, 110, 10, 10);
  rect(40, 110, 10, 10);
  rect(50, 110, 10, 10);
  rect(60, 110, 10, 10);
  rect(70, 110, 10, 10);
  rect(80, 110, 10, 10);
  rect(20, 120, 10, 10);
  rect(30, 120, 10, 10);
  rect(40, 120, 10, 10);
  rect(50, 120, 10, 10);
  rect(60, 120, 10, 10);
  rect(70, 120, 10, 10);
  rect(80, 120, 10, 10);
  rect(90, 120, 10, 10);
  rect(20, 130, 10, 10);
  rect(30, 130, 10, 10);
  rect(40, 130, 10, 10);
  rect(70, 130, 10, 10);
  rect(80, 130, 10, 10);
  rect(90, 130, 10, 10);

  //Buttons: 249, 168, 53
  fill(255);
  rect(40, 100, 10, 10);
  rect(70, 100, 10, 10);

  //Hands
  fill(253, 207, 148)
  rect(0, 100, 10, 10);
  rect(10, 100, 10, 10);
  rect(100, 100, 10, 10);
  rect(110, 100, 10, 10);
  rect(0, 110, 10, 10);
  rect(10, 110, 10, 10);
  rect(20, 110, 10, 10);
  rect(90, 110, 10, 10);
  rect(100, 110, 10, 10);
  rect(110, 110, 10, 10);
  rect(0, 120, 10, 10);
  rect(10, 120, 10, 10);
  rect(100, 120, 10, 10);
  rect(110, 120, 10, 10);

  //Boots: 128, 4, 4
  if (newColor === 0) fill(255, 18, 21);
  else if (newColor === 1) fill(18, 255, 21);
  else if (newColor === 2) fill(18, 21, 255);
  else fill(random(255), random(255), random(255));
  rect(10, 140, 10, 10);
  rect(20, 140, 10, 10);
  rect(30, 140, 10, 10);
  rect(80, 140, 10, 10);
  rect(90, 140, 10, 10);
  rect(100, 140, 10, 10);
  rect(0, 150, 10, 10);
  rect(10, 150, 10, 10);
  rect(20, 150, 10, 10);
  rect(30, 150, 10, 10);
  rect(80, 150, 10, 10);
  rect(90, 150, 10, 10);
  rect(100, 150, 10, 10);
  rect(110, 150, 10, 10);
}
