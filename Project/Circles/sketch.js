let circles = [];
let maxTries = 3000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(0);

  let first = {
    x: random(width),
    y: random(height),
    r: random(5, 50)
  };
  circles.push(first);

  for (let i = 0; i < maxTries; i++) {
    let newCircle = createNewCircle();

    if (newCircle) {
      circles.push(newCircle);
    }
  }

  // Draw all circles
  background(255);
  for (let circle of circles) {
    ellipse(circle.x, circle.y, circle.r * 2);
  }
}

function mousePressed() {
  circles = [];
  setup();
}

function createNewCircle() {
  let tries = 0;
  while (tries < 1000) {
    let x = random(width);
    let y = random(height);

    // Check distance to all other circles
    let valid = true;
    let minDist = Infinity;
    for (let c of circles) {
      let d = dist(x, y, c.x, c.y);
      let edgeDist = d - c.r;
      if (edgeDist < 0) {
        valid = false;
        break;
      }
      if (edgeDist < minDist) {
        minDist = edgeDist;
      }
    }

    if (valid && minDist > 5) {
      return {
        x: x,
        y: y,
        r: min(minDist, random(5, 50))
      };
    }

    tries++;
  }
  return null;
}
