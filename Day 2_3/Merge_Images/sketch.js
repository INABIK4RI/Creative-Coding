let img;
let img2;

function preload() {
  img = loadImage("../Images/Dog.jpg");
  img2 = loadImage("../Images/war.jpg");
}

function setup() {
  createCanvas(975, 600);
  // pixelDensity(1);
}

function draw() {
  background(0);
  image(img, 100, 100, 750, 400);
  image(img2, 100, 100, 750, 400);
  img.loadPixels();
  img2.loadPixels();

  // prettier-ignore
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
            let i = (x + y * img.width) * 4;
            img.pixels[i + 0] % 2 == 0 ? img2.pixels[i + 0] = img.pixels[i + 0] : img2.pixels[i + 0];
            img.pixels[i + 1] % 2 == 0 ? img2.pixels[i + 1] = img.pixels[i + 1] : img2.pixels[i + 1];
            img.pixels[i + 2] % 2 == 0 ? img2.pixels[i + 2] = img.pixels[i + 2] : img2.pixels[i + 2];
            img.pixels[i + 3] = 255;
            img2.pixels[i + 3] = 255;
        }
  }
  img.updatePixels();
  img2.updatePixels();
}
