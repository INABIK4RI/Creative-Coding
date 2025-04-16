let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();
  stroke(0, 75);
  strokeWeight(0.5);
}

function draw() {
  circles.push({ x: random(width), y: random(height), r: random(10, 50) });
  for (let circle of circles) {
    point(circle.x, circle.y);
    if (sqrt((circle.x ^ 2) + (circle.y ^ 2)) - circle.r > 0) {
      ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
    }
  }
}
