var angle;
var axiom = "F";
var sentence = axiom;
var len = 100; // Length of each line segment

var rules = [];
rules[0] = {
    a: "F",
    b: "Ff+[+F-f-F]-[-F+f+F]+F+F+F+F+F"
};


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
    background(50);
    resetMatrix();
    translate(width / 2, height);
    stroke(255, 100);
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);

        if (current == "F") {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == "f") {
            translate(0, -len);
        } else if (current == "+") {
            rotate(angle);
        } else if (current == "-") {
            rotate(-angle);
        } else if (current == "[") {
            push();
        } else if (current == "]") {
            pop();
        }
    }
}

function setup() {
    createCanvas(600, 600);
    angle = radians(60);
    pixelDensity(1);
    background(50);
    turtle();

    var button = select('#generateButton'); // Select the button from the HTML
    button.mousePressed(generate); // Attach the event listener
}
