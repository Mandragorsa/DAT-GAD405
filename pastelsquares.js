//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color

let size = 50;

function setup() {
  createCanvas(500, 500);
  frameRate(2); //Drawing speed 3 fps
}

function draw() {
  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the background shapes
      noStroke();
      fill(random(180, 215), random(180, 200), random(170, 255));
      rect(size * x, size * y, size, size);

      //Draw the foreground shapes with a random RGB color
      fill(random(180,255), random(180,255), random(170, 255));
      //Create a slight offeset for the x and y, to appear in the middle
      rect(12.5+size * x, 12.5+size * y, size/2, size/2);
    }
  }
}
