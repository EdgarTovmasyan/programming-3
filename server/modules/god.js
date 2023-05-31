let random = require("./random");
module.exports = class God {
        constructor(x, y, index) {
            this.x = x;
            this.y = y;
            this.energy = 8;
            this.index = index;
            this.directions = [];
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
            this.getNewCoordinates();
            var found = [];
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] == character) {
                        found.push(this.directions[i]);
                    }
                }
            }
            return found;
        }
    
    
    
        mul() {
            var emptyCells = this.chooseCell(1);
            var newCell = random(emptyCells);
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 3;
                var newGrassE = new God(newX, newY, 1);
                godArr.push(newGrassE);
                this.energy = 8;
            }
        }
    
    
        eat() {
            let foods = this.chooseCell(2 && 3)
            let food = random(foods)
            if (food) {
                this.energy++
                matrix[this.y][this.x] = 0
                let newX = food[0]
                let newY = food[1]
                matrix[food[1]][food[0]] = 5
                this.x = newX
                this.y = newY
                for (var i in godArr) {
                    if (grassEaterArr[i] && newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                            grassEaterArr.splice(i, 1);
                            break;
                        }
                        if (predatorArr[i] &&  newX == predatorArr[i].x && newY == predatorArr[i].y) {
                            predatorArr.splice(i, 1);
                        break;
                    }
                }
    
                if (this.energy >= 12) {
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
                matrix[newY][newX] = 5
                this.x = newX
                this.y = newY
            }
    
            if (this.energy <= 0) {
                this.die()
            }
        }
        die() {
            matrix[this.y][this.x] = 0
            for (var i in godArr) {
                if (this.x == godArr[i]  .x && this.y == godArr[i].y) {
                    godArr.splice(i, 1);
                    break;
                }
            }        
        }
    }