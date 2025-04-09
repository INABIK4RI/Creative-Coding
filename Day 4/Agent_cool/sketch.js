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
  createCanvas(windowWidth, windowHeight);
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
      dir_y = random(50, 100);
      dir_x = random(50, 50);
      break;
    case NORTH_EAST:
      dir_y = random(50, 100);
      dir_x = random(50, 100);
      break;
    case NORTH_WEST:
      dir_y = random(50, 100);
      dir_x = random(0, 50);
      break;
    case EAST:
      dir_y = random(50, 50);
      dir_x = random(50, 100);
      break;
    case SOUTH_EAST:
      dir_y = random(0, 50);
      dir_x = random(50, 100);
      break;
    case SOUTH:
      dir_y = random(0, 50);
      dir_x = random(50, 50);
      break;
    case SOUTH_WEST:
      dir_y = random(0, 50);
      dir_x = random(0, 50);
      break;
    case WEST:
      dir_y = random(50, 50);
      dir_x = random(0, 50);
      break;
    default:
      dir_y = 0;
      dir_x = 0;
      break;
  }

  graphics.triangle(
    random(graphics.width) + dir_x,
    random(graphics.height) + dir_y,
    random(graphics.width) + dir_x,
    random(graphics.height) + dir_y,
    random(graphics.width) + dir_x,
    random(graphics.height) + dir_y
  );

  image(graphics, random(direction), random(direction));
}

function mousePressed() {
  graphics.clear();
}
