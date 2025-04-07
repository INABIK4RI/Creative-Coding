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
    image(img, 100, 100, mouseX, mouseY);
}