let img;

function preload() {
    img = loadImage('../Images/war.jpg');
}

function setup() {
    createCanvas(img.width, img.height);
    imageMode(CORNER);
    noLoop();
}

function draw() {
    background(0);
    image(img, 0, 0);
    glitchImage();
}

function glitchImage() {
    let sliceHeight = 5;

    for (let y = 0; y < height; y += sliceHeight) {
        let h = sliceHeight;
        if (y + h > height) h = height - y;

        let dx = int(random(-15, 15));

        let Offset = int(random(-5, 5));

        let imgSlice = img.get(0, y, width, h);

        tint(150, 255, 255);
        image(imgSlice, dx + Offset, y);

    }

    noTint();
}

function mousePressed() {
    glitchImage();
}
