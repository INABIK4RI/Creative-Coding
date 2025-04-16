let img;

function preload() {
    img = loadImage('../Images/Dog.jpg');
}

function setup() {
    createCanvas(975, 600);
    pixelDensity(1);
}

function draw() {
    background(0);
    image(img, 100, 100, 750, 400);
    img.loadPixels();
    for (let y = 0; y < img.height; y += 2) {
        for (let x = 0; x < img.width; x += 2) {
            let i = (x + y * img.width) * 4;
            img.pixels[i + 0] = mouseX;
            img.pixels[i + 1] = mouseY;
            img.pixels[i + 2] = y;
            img.pixels[i + 3] = 255;
        }
    }
    img.updatePixels();
}