let cols = 50;
let rows = 50;
let running = true;

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function setup() {
    createCanvas(windowHeight - 100, windowHeight - 100);
    noFill();
    stroke(150, 75);
    frameRate(10);

    grid = make2DArray(cols, rows);

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            grid[x][y] = floor(random(2));
        }
    }
}

function mousePressed() {
    running = !running;
    running ? loop() : noLoop();
}

function draw() {
    background(0);

    let cellWidth = width / cols;
    let cellHeight = height / rows;

    let next = make2DArray(cols, rows);
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let state = grid[x][y];

            if (x == 0 || x == cols - 1 || y == 0 || y == rows - 1) {
                next[x][y] = state;
            } else {

                let neighbors = countNeighbors(grid, x, y);

                if (state === 0 && neighbors === 3) {
                    next[x][y] = 1;
                } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                    next[x][y] = 0;
                } else {
                    next[x][y] = state;
                }
            }
        }
    }

    grid = next;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (grid[x][y] === 1) {
                fill(50, 255, 0);
            } else {
                noFill();
            }
            stroke(150, 75);
            rect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight - 1);
        }
    }
}

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            sum += grid[x + i][y + j];
        }
    }
    sum -= grid[x][y];
    return sum;
}
