let r = 255;
let g = 255;
let b = 255;
let changeColors = false;
function setup() {
    createCanvas(500, 500);
    strokeWeight(0);
    frameRate(10);
}

function draw() {
    if (changeColors) {
        r = random(255);
        g = random(255);
        b = random(255);
    }
    background(r, g, b, 1000);
    stroke(0);
    for (let i = 0; i <= innerWidth; i += 40) {
        for (let j = 0; j <= innerHeight; j += 40) {
            let grey = random(255);
            fill(grey, grey, grey);
            circle(j, i, random(50));
        }
    }
}

function mousePressed() {
    if (changeColors == false) {
    changeColors = !changeColors;
    }
    movement();
}
function movement() {
    frameRate(mouseX / 100);
}
