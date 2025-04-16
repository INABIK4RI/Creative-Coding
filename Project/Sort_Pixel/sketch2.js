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

    let pixelsArray = [];
    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            let i = (x + y * img.width) * 4;
            let r = img.pixels[i + 0];
            let g = img.pixels[i + 1];
            let b = img.pixels[i + 2];
            img.pixels[i + 3] = 255;
            pixelsArray.push([r, g, b]);
        }
    }

    pixelsArray.sort((a, b) => hue(a) - hue(b));
    let index = 0;
    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            let i = (x + y * img.width) * 4;
            img.pixels[i + 0] = pixelsArray[index][0];
            img.pixels[i + 1] = pixelsArray[index][1];
            img.pixels[i + 2] = pixelsArray[index][2];
            index++;
        }
    }


    img.updatePixels();
}