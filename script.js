var side = 8;
socket = io();
var m = 40;
var n = 40;

function setup() {
    frameRate(20);
    createCanvas(n * side, m * side);
    background('#e8e8e8');
}

function drawmatrix(data) {
    console.log(data);
    matrix = data.matrix;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("gray");
            }
            else if (matrix[y][x] == 0) {
                fill("green");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("blue")
            } else if (matrix[y][x] == 5) {
                fill("white")
            }
            rect(x * side, y * side, side, side);


        }
    }
}

socket.on("matrix", drawmatrix);