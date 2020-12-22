var xTurn = true;
var canPlay = true;
var x = [0,0,0,0,0,0,0,0,0];
var o = [0,0,0,0,0,0,0,0,0];
var xWins = 0, oWins = 0;

function main(id) {
    if (canPlay) {
        var arrayPosition = id - 1;
        if (x[arrayPosition] === 0 && o[arrayPosition] === 0) {
            if (xTurn) {
                document.getElementById(id).innerHTML = "x";
                x[arrayPosition] = 1;

                xTurn = false;
            } else {
                document.getElementById(id).innerHTML = "o";
                o[arrayPosition] = 1;

                xTurn = true;
            }
        }


        if (winX()) {
            xWins += 1;
            var text = "Player X: " + xWins;
            document.getElementById("xScore").innerHTML = text;
            document.getElementById("playerWon").innerHTML = "Player X Won!";
            document.getElementById("board").style.filter = "blur(5px)";
            canPlay = false;
        } else if (winO()) {
            oWins += 1;
            var text = "Player O: " + oWins;
            document.getElementById("oScore").innerHTML = text;
            document.getElementById("playerWon").innerHTML = "Player O Won!";
            document.getElementById("board").style.filter = "blur(5px)";
            canPlay = false;
        }
    }
}

function winX() {
    if (x[0] === 1 && x[1] === 1 && x[2] === 1 || x[3] === 1 && x[4] === 1 && x[5] === 1 || x[6] === 1 && x[7] === 1 && x[8] === 1) { //win horizontal
        return true;
    } else if (x[0] == 1 && x[3] === 1 && x[6] === 1 || x[1] == 1 && x[4] === 1 && x[7] === 1 || x[2] == 1 && x[5] === 1 && x[8] === 1) { //win vertically
        return true;
    } else if (x[0] === 1 && x[4] === 1 && x[8] === 1 || x[2] === 1 && x[4] === 1 && x[6] === 1) { // win diagonal
        return true;
    }
}

function winO() {
    if (o[0] === 1 && o[1] === 1 && o[2] === 1 || o[3] === 1 && o[4] === 1 && o[5] === 1 || o[6] === 1 && o[7] === 1 && o[8] === 1) { //win horizontal
        return true;
    } else if (o[0] == 1 && o[3] === 1 && o[6] === 1 || o[1] == 1 && o[4] === 1 && o[7] === 1 || o[2] == 1 && o[5] === 1 && o[8] === 1) { //win vertically
        return true;
    } else if (o[0] === 1 && o[4] === 1 && o[8] === 1 || o[2] === 1 && o[4] === 1 && o[6] === 1) { // win diagonal
        return true;
    }
}

function clean() {
    xTurn = true;
    canPlay = true;
    x = [0,0,0,0,0,0,0,0,0];
    o = [0,0,0,0,0,0,0,0,0];
    document.getElementById("playerWon").innerHTML = "";
    document.getElementById("board").style.filter = "";
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).innerHTML = "";
    }
}
