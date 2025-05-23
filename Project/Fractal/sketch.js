var angle;
var axiom = "F";
var sentence = axiom;
var len = 100; // Length of each line segment

var rules = [];
rules[0] = {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]+F+F+F+F+F"
};

let angleIncrement = 0;

function generate() {
    len *= 0.5; // Reduce the length of each line segment
    var nextSentence = "";
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var found = false;
        for (var j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }
        if (!found) {
            nextSentence += current;
        }
    }
    sentence = nextSentence;
    // createP(sentence);
    turtle();
}

function turtle() {
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        if (current == "F") {
            line(0, 0, 0, -len); // Draw a line relative to the current position
            translate(0, -len); // Move forward
        } else if (current == "f") {
            translate(0, -len); // Move forward without drawing
        } else if (current == "+") {
            rotate(angle); // Rotate clockwise
        } else if (current == "-") {
            rotate(-angle); // Rotate counterclockwise
        } else if (current == "[") {
            push(); // Save the current transformation state
        } else if (current == "]") {
            pop(); // Restore the previous transformation state
        }
    }
}

function setup() {
    createCanvas(600, 600);
    angle = radians(60);
    pixelDensity(1);
    background(50);

    var button = select('#generateButton'); // Select the button from the HTML
    button.mousePressed(generate); // Attach the event listener
}

function draw() {
    background(50); // Clear the canvas
    translate(width / 2, height / 2); // Move the origin to the center of the canvas
    rotate(angleIncrement); // Rotate the entire canvas
    angleIncrement += 0.01; // Increment the rotation angle
    turtle(); // Draw the figure
}
