LivingCreature = require("./livingCreature");
let random = require("./random");

module.exports = class Magma extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 8;
    } 
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    mul() {
        var newCell = random(this.chooseCell(2))
        if (newCell) {
            var magma = new Magma(newCell[0], newCell[1], this.index);
            magmaArr.push(magma);
            matrix[newCell[1]][newCell[0]] = 6;
            this.energy = 8;
        }
    }
    eat() {
        let foods = this.chooseCell(4)
        let food = random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 6
            this.x = newX
            this.y = newY
            for (var i in waterArr) {
                if (waterArr[i] && newX == waterArr[i].x && newY == waterArr[i].y) {
                    waterArr.splice(i, 1);
                    break;
                }
                if (magmaArr[i] && newX == magmaArr[i].x && newY == magmaArr[i].y) {
                    magmaArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 4) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.energy--;
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 6
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in magmaArr) {
            if (this.x == magmaArr[i].x && this.y == magmaArr[i].y) {
                magmaArr.splice(i, 1);
                break;
            }
        }
    }
}