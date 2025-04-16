let r = 255;
let g = 255;
let b = 255;

function setup() {
    createCanvas(500, 500);
    strokeWeight(1);
    frameRate(10);
}

function draw() {
    background(r, g, b, 1000);
    stroke(0);
    for (let x = 0; x <= innerWidth; x += 40) {
        for (let y = 0; y <= innerHeight; y += 40) {
            let grey = random(255);
            fill(grey, grey, grey);
            const i = random(1, 2);
            if (i < 1.5) {
                line(y, x, x, y);
            } else if (i >= 1.5) {
                line(-y, -x, x, y);
            }
        }
    }
}