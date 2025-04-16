let directions = [
  (NORTH = 0),
  (NORTH_EAST = 1),
  (NORTH_WEST = 2),
  (EAST = 3),
  (SOUTH_EAST = 4),
  (SOUTH = 5),
  (SOUTH_WEST = 6),
  (WEST = 7),
];
let dir_y;
let dir_x;

function setup() {
  createCanvas(windowWidth + 1000, windowHeight + 1000);
  graphics = createGraphics(width, height);
}

function draw() {
  background(255);
  noFill();
  stroke(0, 75);
  strokeWeight(0.5);
  graphics.fill(random(255), random(255), random(255));

  let direction = random(directions);

  switch (direction) {
    case NORTH:
      dir_y = random(500, 1000);
      dir_x = random(500, 500);
      break;
    case NORTH_EAST:
      dir_y = random(500, 1000);
      dir_x = random(500, 1000);
      break;
    case NORTH_WEST:
      dir_y = random(500, 1000);
      dir_x = random(0, 500);
      break;
    case EAST:
      dir_y = random(500, 500);
      dir_x = random(500, 1000);
      break;
    case SOUTH_EAST:
      dir_y = random(0, 500);
      dir_x = random(500, 1000);
      break;
    case SOUTH:
      dir_y = random(0, 500);
      dir_x = random(500, 500);
      break;
    case SOUTH_WEST:
      dir_y = random(0, 500);
      dir_x = random(0, 500);
      break;
    case WEST:
      dir_y = random(500, 500);
      dir_x = random(0, 500);
      break;
    default:
      dir_y = 0;
      dir_x = 0;
      break;
  }
  graphics.triangle(
    dir_x + random(100, 150),
    dir_y + random(100, 150),
    dir_x + random(100, 150),
    dir_y + random(100, 150),
    dir_x + random(100, 150),
    dir_y + random(100, 150)
  );

  image(graphics, random(direction), random(direction));
}

function mousePressed() {
  graphics.clear();
}
