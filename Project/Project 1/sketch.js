let r, g, b = 0;

function setup() {
  createCanvas(500, 500);
  strokeWeight(10);
}

function draw() {
  background(mouseX, mouseY, 255, 90);
  stroke(r, g, b);
  strokeWeight(1);
  for (let i = 0; i <= 10; i++) {
    noFill();
    square(random(300), random(300), random(200));

  }
}
function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
}