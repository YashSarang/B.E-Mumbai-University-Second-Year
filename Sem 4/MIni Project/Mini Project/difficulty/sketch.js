function create2DArray(rows, cols, filler = 0) {
    return new Array(rows).fill().map(() => new Array(cols).fill(filler));
}

let difficulties = [20, 15, 10, 5, 1, 0]

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let w; // = width / 3;
let h; // = height / 3;

let ai = 'X';
let human = 'O';
let currentPlayer = human;
let n = 3;
let resultP;
let DifficultySlider;
let difficulty = 5;
let DifficultyInfo;
let resetButton;

function setup() {
    createCanvas(400, 400).parent("canvas-container");
    resetButton = select("#reset-button");
    resetButton.mousePressed(reset);
    resultP = select("#winner");
    DifficultySlider = select("#difficulty");
    DifficultySlider.input(() => {
        if (difficulty != DifficultySlider.value()) {
            difficulty = DifficultySlider.value() - 1
            // reset();
        }
    });
    createElement("p", "<h3>Difficulty levels explained</h3><ol><li>almost completly random</li><li>significant randomness in moves</li><li>major randomness in moves</li><li>minor randomness in moves</li><li>insignificant randomness in moves</li><li>Unbeatable</li></ol>").parent("info-bar");
    board = create2DArray(n, n, "");
    w = width / n;
    h = height / n;
    bestMove();
}

function reset() {
    loop()
    board = create2DArray(n, n, "");
    w = width / n;
    h = height / n;
    bestMove();
}

function equals3(a, b, c) {
    return a == b && b == c && a != '';
}

function checkWin(board) {
    let first = board[0][0];
    let diagonal = first != ""
    let n = board.length;
    for (let i = 0; i < n; i++) {
        if (board[i][i] != first) {
            diagonal = false
            break
        }
    }
    if (diagonal) return first
    first = board[0][n - 1];
    let back_diag = first != "";
    for (let i = 1; i <= n; i++) {
        if (board[i - 1][n - i] != first) {
            back_diag = false
            break
        }
    }
    if (back_diag) return first

    for (let i = 0; i < n; i++) {
        first = board[i][0]
        let sideways = first != ""
        for (let j = 0; j < n; j++) {
            if (board[i][j] != first) {
                sideways = false
                break
            }
        }
        if (sideways)
            return first
    }

    for (let i = 0; i < n; i++) {
        first = board[0][i]
        let sideways = first != ""
        for (let j = 0; j < n; j++) {
            if (board[j][i] != first) {
                sideways = false
                break
            }
        }
        if (sideways)
            return first
    }

    let openSpots = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == '') {
                openSpots++;
            }
        }
    }

    if (openSpots == 0) {
        return 'tie';
    }
    return null;
}

function checkWinner() {
    return checkWin(board)
}

function mousePressed() {
    if (currentPlayer == human) {
        // Human make turn
        let i = floor(mouseX / w);
        let j = floor(mouseY / h);
        // If valid turn
        if (i >= 0 && i < n) {
            if (board[i][j] == '') {
                board[i][j] = human;
                currentPlayer = ai;
                bestMove();
            }
        }
    }
}

function draw() {
    background(255);
    strokeWeight(4);
    // DifficultyInfo.html("Difficulty: " + (Number(DifficultySlider.value())+1));
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            let x = w * i + w / 2;
            let y = h * j + h / 2;
            let spot = board[i][j];
            textSize(32);
            let r = w / 4;
            if (spot == human) {
                noFill();
                ellipse(x, y, r * 2);
            } else if (spot == ai) {
                line(x - r, y - r, x + r, y + r);
                line(x + r, y - r, x - r, y + r);
            }
        }
    }

    let result = checkWinner();
    if (result != null) {
        resultP.style('font-size', '32pt');
        if (result == 'tie') {
            resultP.html('Tie!');
        } else {
            resultP.html(`${result} wins!`);
        }
        noLoop();
    }
}

function keyPressed() {
    reset();
}