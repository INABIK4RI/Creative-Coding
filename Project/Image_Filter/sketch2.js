let img;

function preload() {
    img = loadImage('../Images/war.jpg');
}

function setup() {
    createCanvas(img.width, img.height);
    img.loadPixels();

    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            let index = (x + y * img.width) * 4;

            let r = img.pixels[index];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];

            let gray = (r + g + b) / 3;

            let threshold = random(255);

            let bw = gray < threshold ? 0 : 255;

            img.pixels[index] = bw;
            img.pixels[index + 1] = bw;
            img.pixels[index + 2] = bw;
        }
    }

    img.updatePixels();
    image(img, 0, 0);
}
