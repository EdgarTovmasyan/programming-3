var matrix = [];
var a = 40;
var b = 50;

function kerparner(qanak,kerpar){
    var p = 0;
    while (p < qanak) {
        var k = Math.floor(random(0,a))
        var l = Math.floor(random(0,b))
        if(matrix[k][l] == 0){
            matrix[k][l] = kerpar
        }
        p++;
    }
};

var side = 30;
var grassArr = [];
var grassEaterArr = []
var predatorArr = []
var waterArr = []
var godArr=[]
function setup() {
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < b; j++) {
            matrix[i].push(0)
        }
    }

    kerparner(50,1)
    kerparner(50,2)
    kerparner(50,3)
    kerparner(50,4)
    kerparner(50,5)

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2)
                grassEaterArr.push(gre)
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3)
                predatorArr.push(pre)
            }
            else if (matrix[y][x] == 4) {
                var wtr = new Water(x, y, 4)
                waterArr.push(wtr)
            }
            else if (matrix[y][x] == 5) {
                var god = new God(x, y, 5)
                godArr.push(god)
            }
            else if (matrix[y][x] == 8) {

            }
        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("Red")
            }
            else if (matrix[y][x] == 4) {
                fill("blue")
            }
            else if (matrix[y][x] == 5) {
                fill("white")
            }

            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in waterArr) {
        waterArr[i].move();
    }
    for (var i in godArr) {
        godArr[i].eat();
    }
}